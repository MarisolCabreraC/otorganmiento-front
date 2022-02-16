import { Component, OnInit, ViewChild } from "@angular/core";
import { InfoAdherence } from "../commons/models/infoAdherence";
import { MainService } from "../commons/services/main.service";
import { AddAdherenceComponent } from "./add-adherence/add-adherence.component";

@Component({
  selector: "app-admin-adherencia",
  templateUrl: "./admin-adherencia.component.html",
  styleUrls: [
    "./admin-adherencia.component.scss",
    "../../../node_modules/bootstrap/scss/bootstrap.scss",
    "../../assets/css/style_catalogue.scss",
  ],
  providers: [MainService],
})
export class AdminAdherenciaComponent implements OnInit {
  @ViewChild("AddAdherenceComponent", { static: false })
  AddAdherenceComponent: AddAdherenceComponent;

  public listAdherence: any;
  public status: any;
  public hideForm = true;

  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.initTable();
  }

  initTable() {
    this.mainService.findAllAdherences().subscribe((result) => {
      this.listAdherence = result.contenido;
      this.setStatus(this.listAdherence);
    });
  }

  addAdherence() {
    this.hideForm = false;
  }

  back() {
    this.hideForm = true;
  }

  visualizarTabla() {
    this.back();
    this.initTable();
  }

  setStatus(criteria: any) {
    for (let i = 0; i < criteria.length; i++) {
      if (criteria[i].estado == "0" || criteria[i].estado == null) {
        this.status = false;
      } else {
        this.status = true;
      }
    }
  }

  statusAdherence(criteria: any) {
    if (criteria.activo == "0" || criteria.activo == null) {
      criteria.activo = 1;
    } else if (criteria.activo == "1") {
      criteria.activo = 0;
    }

    let objToSend = {
      idParametrizacion: criteria.idParametrizacion,
      nombre: criteria.nombre,
      idTipoProducto: criteria.idTipoProducto,
      idTipoFlujo: criteria.idTipoFlujo,
      idTipoDecision: criteria.idTipoDecision,
      estado: criteria.activo,
    };

    this.mainService.updateStatusAdherence(objToSend).subscribe(
      (result) => {
        this.initTable();
      },
      (error) => {
        this.initTable();
      }
    );
  }
}
