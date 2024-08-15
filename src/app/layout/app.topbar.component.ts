import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import {Store} from "@ngrx/store";


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    cities = [
        {godina: '2023'},
        {godina: '2022'},
        {godina: '2021'},
        {godina: '2020'},
        {godina: '2019'}
    ];

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
      public layoutService: LayoutService,
      private store: Store
    ) { }

    logOut(){
      //this.store.dispatch(logout());
    }
}
