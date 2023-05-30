import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PersonService} from "./service/person.service";
import {StoreModule} from "@ngrx/store";
import {effects, metaReducers, reducers} from "./store/app-state";
import {EffectsModule} from "@ngrx/effects";
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers: metaReducers}),
    EffectsModule.forRoot(effects),
    NgxMaskModule.forRoot({

    }),
    // DeviceDetectorModule.forRoot()
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
