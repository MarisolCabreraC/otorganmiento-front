import { Component, OnInit } from '@angular/core';
import { InfoAdherence } from '../commons/models/infoAdherence';
import { MainService } from '../commons/services/main.service';

@Component({
  selector: 'app-admin-adherencia',
  templateUrl: './admin-adherencia.component.html',
  styleUrls: ['./admin-adherencia.component.scss', '../../../node_modules/bootstrap/scss/bootstrap.scss', '../../assets/css/style_catalogue.scss'],
  providers: [MainService]
})
export class AdminAdherenciaComponent implements OnInit {
  public listAdherence: any;
  public status: any;

  constructor(
    private mainService: MainService

  ) { }

  ngOnInit() {
    this.initTable();
  }

  initTable() {
  this.mainService.findAllAdherences().subscribe(result => {
      this.listAdherence = result.contenido;
      this.setStatus(this.listAdherence);
    });
  }

  setStatus(criteria: any){
  
    for (let i = 0; i < criteria.length; i++) {
      if ( criteria[i].estado == "0" || criteria[i].estado == null){
        this.status = false;
      } else {
        this.status =true;
      }
    }
  }

  statusAdherence(criteria: any, status: boolean){
    let statusObj;
    if ( status == true){
      statusObj = 1
    } else {
      statusObj = 0;
    }

    let objToSend = {
      idParametrizacion: criteria.idParametrizacion ,
      nombre: criteria.nombre ,
      idTipoProducto: criteria.idTipoProducto ,
      idTipoFlujo: criteria.idTipoFlujo,
      idTipoDecision: criteria.idTipoDecision,
      estado: statusObj
    };   

    this.mainService.updateStatusAdherence(objToSend).subscribe(
      (result) => {
        this.initTable();
        console.log(result);
      },
      (error) => { 
        this.initTable();
        console.log('aaaa')}
      );
 
   
  }

}
