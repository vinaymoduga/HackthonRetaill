import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { cashSendComponent } from './cashSend.component';
import { RetailComponent } from './retail.component';

@NgModule({
  declarations: [
    AppComponent,cashSendComponent,RetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
