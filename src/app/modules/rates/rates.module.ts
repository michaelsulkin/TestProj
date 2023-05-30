import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicRatesComponent } from './basic-rates/basic-rates.component';
import {RouterModule, Routes} from "@angular/router";

export const firmRoutes: Routes = [
  {
    path: '',
    component: BasicRatesComponent
  }
];

@NgModule({
  declarations: [
    BasicRatesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(firmRoutes)
  ]
})
export class RatesModule { }
