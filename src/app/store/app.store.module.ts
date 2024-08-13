import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthStoreModule} from "./auth/auth.store.module";
import {ParametriStoreModule} from "./parametri/parametri.store.module";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthStoreModule,
    ParametriStoreModule
  ]
})
export class AppStoreModule { }
