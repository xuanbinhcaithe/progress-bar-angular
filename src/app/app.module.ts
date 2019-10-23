import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XuanbinhComponent } from './xuanbinh/xuanbinh.component';

@NgModule({
  declarations: [
    AppComponent,
    XuanbinhComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
