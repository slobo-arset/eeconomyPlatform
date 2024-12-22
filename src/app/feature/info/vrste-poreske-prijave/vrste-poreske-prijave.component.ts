import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, switchMap, tap } from 'rxjs';
import { InfoService } from 'src/app/data-access/info/info.service';

@Component({
  selector: 'app-vrste-poreske-prijave',
  templateUrl: './vrste-poreske-prijave.component.html',
  styleUrl: './vrste-poreske-prijave.component.scss'
})
export class VrstePoreskePrijaveComponent implements OnInit {

  vrste$: Observable<any>;
  items: MenuItem[] = [{ label: 'Vrste poreske prijave' }];
  visible: boolean = false;

  mode: number = 1;
  name: string = '';

  constructor(
    private infoService: InfoService
  ){}


  ngOnInit(): void {
    this.vrste$ = this.infoService.getAllVrstaPoreskePrijave();
  }

  editData(data: any){}

  deleteData(id: string){
    this.vrste$ = this.infoService.deleteVrstaPoreskePrijave(id).pipe(
      switchMap(()=>{
        return this.infoService.getAllVrstaPoreskePrijave();
      })
    );
  }


  showData(){
    this.clear();
    this.visible = true;
  }



  create(){

    const data = {
      naziv: this.name,
      is_active: 1
    }

    this.vrste$ = this.infoService.createVrstaPoreskePrijave(data).pipe(
      switchMap(()=>{
          return this.infoService.getAllVrstaPoreskePrijave();
        }
      )
    )

    this.visible = false;
  }

  updateData(){}

  clear(){
    this.name = '';
  }
}
