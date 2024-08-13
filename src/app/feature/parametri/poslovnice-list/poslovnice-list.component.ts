import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Poslovnica } from 'src/app/data-access/parametri/poslovnice/poslovnica';
import { PoslovniceService } from 'src/app/data-access/parametri/poslovnice/poslovnice.service';

@Component({
  selector: 'app-poslovnice-list',
  templateUrl: './poslovnice-list.component.html',
  styleUrls: ['./poslovnice-list.component.scss']
})
export class PoslovniceListComponent {
  addBlock: boolean = false;
  poslovnice: Observable<Poslovnica[]> = of([])

  constructor(private poslovniceService: PoslovniceService ){}

  ngOnInit(): void {
    this.poslovnice = this.poslovniceService.getAllPoslovnice()
  }

  onRowEditInit(id:number){}

  showAddBlock(){
    this.addBlock = true;
  }

  hiddenAddBlock(){
    this.addBlock = false;
  }

}
