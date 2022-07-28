import { DividerTextComponent } from './../../../ng-parotek-extension/src/lib/divider-text/divider-text.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DividerTextComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
