import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JediniceMjere } from 'src/app/data-access/parametri/jedinice-mjere/jedinice-mjere';
import { JediniceMjereService } from 'src/app/data-access/parametri/jedinice-mjere/jedinice-mjere.service';

@Component({
  selector: 'app-jedinice-mere-list',
  templateUrl: './jedinice-mere-list.component.html',
  styleUrls: ['./jedinice-mere-list.component.scss']
})
export class JediniceMereListComponent {

  addBlock: boolean = false;
  jediniceMere: Observable<JediniceMjere[]> = of([])

  constructor(private jediniceMereService: JediniceMjereService ){}

  ngOnInit(): void {
    this.jediniceMere = this.jediniceMereService.getJediniceMere()
  }

  onRowEditInit(id:number){}

  showAddBlock(){
    this.addBlock = true;
  }

  hiddenAddBlock(){
    this.addBlock = false;
  }

}
