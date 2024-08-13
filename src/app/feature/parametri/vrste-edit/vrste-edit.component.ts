import {Component} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-vrste-edit',
  templateUrl: './vrste-edit.component.html',
  styleUrls: ['./vrste-edit.component.scss']
})
export class VrsteEditComponent {

  constructor(public ref: DynamicDialogRef, private dialogService: DynamicDialogConfig) {
    console.log(this.dialogService.data)
  }

  selectProduct(data: any) {
    this.ref.close(data);
  }

}
