import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UtilInterceptorModule} from "./interceptors/util-interceptor.module";
import {ToastModule} from "primeng/toast";
import {MessageToastComponent} from "./message/message-toast.component";
import {MessageService} from "primeng/api";



@NgModule({
  declarations: [
    MessageToastComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    UtilInterceptorModule
  ],
  exports: [
    MessageToastComponent
  ],
  providers: [MessageService],
})
export class UtilModule { }
