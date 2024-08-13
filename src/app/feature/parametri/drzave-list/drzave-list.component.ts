import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Drzava } from 'src/app/data-access/parametri/drzave/drzava';
import { DrzaveService } from 'src/app/data-access/parametri/drzave/drzave.service';

@Component({
  selector: 'app-drzave-list',
  templateUrl: './drzave-list.component.html',
  styleUrls: ['./drzave-list.component.scss']
})
export class DrzaveListComponent {
  addBlock: boolean = false;
  drzave: Observable<Drzava[]> = of([])

  constructor(private drzaveService: DrzaveService ){}

  ngOnInit(): void {
    this.drzave = this.drzaveService.getAllDrzave()
  }

  onRowEditInit(id:number){}

  showAddBlock(){
    this.addBlock = true;
  }

  hiddenAddBlock(){
    this.addBlock = false;
  }
}
