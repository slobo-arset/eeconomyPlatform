import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PorezNaPotosnju } from 'src/app/data-access/parametri/porez-na-potrosnju/porez-na-potosnju';
import { PorezNaPotrosnjuService } from 'src/app/data-access/parametri/porez-na-potrosnju/porez-na-potrosnju.service';

@Component({
  selector: 'app-porez-na-potrosnju-list',
  templateUrl: './porez-na-potrosnju-list.component.html',
  styleUrls: ['./porez-na-potrosnju-list.component.scss']
})
export class PorezNaPotrosnjuListComponent {

  addBlock: boolean = false;
  porez: Observable<PorezNaPotosnju[]> = of([])

  constructor(private porezNaPotrosnjuService: PorezNaPotrosnjuService ){}

  ngOnInit(): void {
    this.porez = this.porezNaPotrosnjuService.getAllPorezNaPotrosnju()
  }

  onRowEditInit(id:number){}

  showAddBlock(){
    this.addBlock = true;
  }

  hiddenAddBlock(){
    this.addBlock = false;
  }

}
