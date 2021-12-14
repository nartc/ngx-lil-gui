import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SkipSelf,
} from '@angular/core';
import { Controller } from 'lil-gui';
import { NgxLilGui } from './ngx-lil-gui.component';
import {
  NgxLilGuiControllerChange,
  NgxLilGuiControllerConfig,
  NgxLilGuiControllerFinishChange,
} from './types';

@Component({
  selector: 'ngx-lil-gui-controller[property]',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLilGuiController implements OnInit, OnDestroy {
  @Input() property!: string;
  @Input() controllerConfig?: NgxLilGuiControllerConfig[string];

  @Output() change = new EventEmitter<NgxLilGuiControllerChange>();
  @Output() finishChange = new EventEmitter<NgxLilGuiControllerFinishChange>();
  @Output() controllerReady = new EventEmitter<Controller>();

  #controller?: Controller;

  constructor(@Optional() @SkipSelf() private parentGui: NgxLilGui) {
    if (!parentGui) {
      throw new Error(
        'ngx-lil-gui-controller must be used within a ngx-lil-gui.'
      );
    }
  }

  ngOnInit() {
    this.#controller = this.parentGui.addController(
      this.property,
      this.controllerConfig
    );
    this.parentGui.run(() => {
      if (this.controller) {
        this.controller.updateDisplay();

        this.controller.onChange((value: any) => {
          this.change.emit({ value, controller: this.controller! });
        });
        this.controller.onFinishChange((value: any) => {
          this.finishChange.emit({ value, controller: this.controller! });
        });

        this.controllerReady.emit(this.controller);
      }
    });
  }

  ngOnDestroy() {
    if (this.controller) {
      this.controller.destroy();
    }
  }

  get controller(): Controller | undefined {
    return this.#controller;
  }
}
