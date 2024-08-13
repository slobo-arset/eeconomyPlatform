import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";

import {EffectsModule} from "@ngrx/effects";
import {ParametriReducer} from "./parametri.reducer";
import {ParametriEffects} from "./parametri.effects";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('parametri', ParametriReducer),
    EffectsModule.forFeature([ParametriEffects])
  ]
})
export class ParametriStoreModule { }
