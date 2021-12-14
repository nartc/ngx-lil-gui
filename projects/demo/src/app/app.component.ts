import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div
      #divElement
      style="width: 300px; height: 300px; background-color: #FA8072; display: flex; justify-content: center; align-items: center"
    >
      <span #spanElement style="color: #ffffff">I am a span</span>
    </div>

    <ngx-lil-gui [zoneless]="true">
      <ngx-lil-gui title="DIV" [object]="divElement.style">
        <ngx-lil-gui-color
          (colorReady)="$event.name('Background')"
          property="backgroundColor"
        ></ngx-lil-gui-color>
        <ngx-lil-gui-controller
          property="justifyContent"
          [controllerConfig]="{
            minOrCollection: ['center', 'flex-start', 'flex-end']
          }"
        ></ngx-lil-gui-controller>
      </ngx-lil-gui>
      <ngx-lil-gui title="SPAN" [object]="spanElement.style">
        <ngx-lil-gui-color
          (colorReady)="$event.name('Color')"
          property="color"
        ></ngx-lil-gui-color>
      </ngx-lil-gui>
    </ngx-lil-gui>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class AppComponent {}
