import {Component, Signal} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Vrsta} from 'src/app/data-access/parametri/vrste/vrsta';
import {VrsteService} from 'src/app/data-access/parametri/vrste/vrste.service';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {VrsteEditComponent} from "../vrste-edit/vrste-edit.component";
import {login} from "../../../store/auth/auth.actions";
import {createVrste, getVrste, updateVrste} from "../../../store/parametri/parametri.actions";
import {Store} from "@ngrx/store";
import * as selector from "../../../store/auth/auth.selector";
import * as selectorParam from "../../../store/parametri/parametri.selector";

@Component({
  selector: 'app-vrste-list',
  templateUrl: './vrste-list.component.html',
  styleUrls: ['./vrste-list.component.scss'],
  providers: [DialogService]
})
export class VrsteListComponent {

  addBlock: boolean = false;

  ref: DynamicDialogRef | undefined;

  companyID = this.store.selectSignal(selector.companyID);
  vrste : Signal<any> = this.store.selectSignal(selectorParam.VrsteList);

  constructor(
    public dialogService: DialogService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(getVrste({data: this.companyID()}));
  }

  onRowEditInit(id: number) {
  }


  show(data: Vrsta) {
    this.ref = this.dialogService.open(VrsteEditComponent, {
      header: 'Dodaj vrstu',
      width: '30%',
      contentStyle: {overflow: 'auto'},
      baseZIndex: 10000,
      draggable: true,
      data: data,
      maximizable: true
    });

    this.ref.onClose.subscribe((data: Vrsta) => {
      if(data?.id){
        this.store.dispatch(updateVrste({data: data}))
      } else {
        this.store.dispatch(createVrste({data: data}))
      }
    });
  }

}
