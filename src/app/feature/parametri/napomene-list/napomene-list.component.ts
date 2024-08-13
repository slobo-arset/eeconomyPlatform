import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Napomena } from 'src/app/data-access/parametri/napomene/napomena';
import { NapomeneService } from 'src/app/data-access/parametri/napomene/napomene.service';

@Component({
  selector: 'app-napomene-list',
  templateUrl: './napomene-list.component.html',
  styleUrls: ['./napomene-list.component.scss']
})
export class NapomeneListComponent {

  addBlock: boolean = false;
  napomene: Observable<Napomena[]> = of([])

  constructor(private napomeneService: NapomeneService ){}

  ngOnInit(): void {
    this.napomene = this.napomeneService.getAllNapomene()
  }

  onRowEditInit(id:number){}

  showAddBlock(){
    this.addBlock = true;
  }

  hiddenAddBlock(){
    this.addBlock = false;
  }
}
