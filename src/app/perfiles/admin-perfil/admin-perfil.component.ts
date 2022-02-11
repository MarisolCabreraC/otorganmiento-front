import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/commons/services/main.service';

@Component({
  selector: 'app-admin-perfil',
  templateUrl: './admin-perfil.component.html',
  styleUrls: ['./admin-perfil.component.scss']
})
export class AdminPerfilComponent implements OnInit {
  public listProfiles: any;
  public status: any;
  public hideForm= true;

  constructor(
    private mainService: MainService

  ) { }

  ngOnInit() {
    this.initTable();
  }

  initTable() {
  this.mainService.findAllProfiles().subscribe(result => {
      this.listProfiles = result.listacorreos;
      this.setStatus(this.listProfiles);
    });
  }

  setStatus(criteria: any){
  
    for (let i = 0; i < criteria.length; i++) {
      if ( criteria[i].activo == "0" || criteria[i].activo == null){
        this.status = false;
      } else {
        this.status =true;
      }
    }
  }

  addProfile(){
    this.hideForm = false;
  }

  back(){
    this.hideForm = true;
  }



}
