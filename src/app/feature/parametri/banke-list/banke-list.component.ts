import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BankeService } from 'src/app/data-access/parametri/banke/banke.service';
import { Banka } from 'src/app/data-access/parametri/banke/banka';

@Component({
  selector: 'app-banke-list',
  templateUrl: './banke-list.component.html',
  styleUrls: ['./banke-list.component.scss']
})
export class BankeListComponent implements OnInit{
  addBlock: boolean = false;
  banke: Observable<Banka[]> = of([])

  constructor(private bankeService: BankeService ){}

  ngOnInit(): void {
    this.banke = this.bankeService.getAllBanke()
  }

  onRowEditInit(id:number){}

  showAddBlock(){
    this.addBlock = true;
  }

  hiddenAddBlock(){
    this.addBlock = false;
  }

}
