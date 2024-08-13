import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {AuthReducer} from "./auth.reducer";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffects} from "./auth.effects";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([LoginEffects])
  ]
})
export class AuthStoreModule { }
