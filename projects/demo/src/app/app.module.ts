import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLilGuiModule } from 'ngx-lil-gui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxLilGuiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
