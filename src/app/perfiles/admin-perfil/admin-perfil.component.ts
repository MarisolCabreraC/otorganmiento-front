import { Component, OnInit, ViewChild } from "@angular/core";
import { MainService } from "src/app/commons/services/main.service";
import { AddProfileComponent } from "./add-profile/add-profile.component";

@Component({
  selector: "app-admin-perfil",
  templateUrl: "./admin-perfil.component.html",
  styleUrls: ["./admin-perfil.component.scss"],
})
export class AdminPerfilComponent implements OnInit {
  @ViewChild("AddProfileComponent", { static: false })
  AddProfileComponent: AddProfileComponent;

  public listProfiles: any;
  public status: any;
  public hideForm = true;

  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.initTable();
  }

  initTable() {
    this.mainService.findAllProfiles().subscribe((result) => {
      this.listProfiles = result.listacorreos;
      this.setStatus(this.listProfiles);
    });
  }

  setStatus(criteria: any) {
    for (let i = 0; i < criteria.length; i++) {
      if (criteria[i].activo == "0" || criteria[i].activo == null) {
        this.status = false;
      } else {
        this.status = true;
      }
    }
  }

  updateStatusProfile(profile: any) {
    if (profile.activo == "0" || profile.activo == null) {
      profile.activo = 1;
    } else if (profile.activo == "1") {
      profile.activo = 0;
    }

    let objetoStatus = {
      correoDistribucionId: profile.correosDistribucionId,
      nombre: profile.nombre,
      correo: profile.correo,
      activo: profile.activo,
    };

    this.mainService.updateStatusProfileMS(objetoStatus).subscribe(
      (result) => {
        this.initTable();
      },
      (error) => {
        this.initTable();
      }
    );
  }

  editProfile(objeto: any) {
    this.AddProfileComponent.fillForm(objeto);
    this.hideForm = false;
  }

  addProfile() {
    this.hideForm = false;
  }

  back() {
    this.hideForm = true;
  }

  visualizarTabla() {
    this.back();
    this.initTable();
  }
}
