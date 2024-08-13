import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Artikal } from 'src/app/data-access/parametri/artikli/artikli';
import { ArtikliService } from 'src/app/data-access/parametri/artikli/artikli.service';


@Component({
  selector: 'app-artikli-list',
  templateUrl: './artikli-list.component.html',
  styleUrls: ['./artikli-list.component.scss']
})
export class ArtikliListComponent implements OnInit {

  artikli: Observable<Artikal[]> = of([])

  constructor(
    private artikliService: ArtikliService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.artikli = this.artikliService.getAllArtikle()
  }

  onRowEditInit(id:number){
    this.router.navigate(['/parametri/artikli/0'])
  }

}
