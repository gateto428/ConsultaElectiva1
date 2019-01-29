import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalPanelComponent } from './principal-panel/principal-panel.component';

import {ServiceConsultService } from './service-consult.service'
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PrincipalPanelComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule

  ],
  providers: [ServiceConsultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
