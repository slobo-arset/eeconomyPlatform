import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Porez } from 'src/app/data-access/parametri/porezne-stope/porez';
import { PorezneStopeService } from 'src/app/data-access/parametri/porezne-stope/porezne-stope.service';

@Component({
  selector: 'app-porezne-stope-list',
  templateUrl: './porezne-stope-list.component.html',
  styleUrls: ['./porezne-stope-list.component.scss']
})
export class PorezneStopeListComponent {

  addBlock: boolean = false;
  porez: Observable<Porez[]> = of([])

  constructor(private porezneStopeService: PorezneStopeService ){}

  ngOnInit(): void {
    this.porez = this.porezneStopeService.getAllStope()
  }

  onRowEditInit(id:number){}

  showAddBlock(){
    this.addBlock = true;
  }

  hiddenAddBlock(){
    this.addBlock = false;
  }


}
