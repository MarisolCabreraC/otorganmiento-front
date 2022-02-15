import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CATALOGS } from "src/utils/catalogs";
import { PaginaResponse } from "../models/paginaResponse";
import { Observable } from "rxjs";
import { InfoAdherence } from "../models/infoAdherence";
import { InfoProfile } from "../models/infoProfile";

@Injectable({
  providedIn: "root",
})
export class MainService {
  constructor(public clientHttp: HttpClient) {}

  public findAllAdherences(): Observable<any> {
    return this.clientHttp.post<PaginaResponse>(
      "/otorgamiento/v1.0/adherencia/consultarCriterio",
      {
        filtros: [
          {
            parametro: "nombreParametrizacion",
          },
        ],
        numeroPagina: "1",
        numeroRegistros: "ALL",
        orden: "ASC",
        parametroOrdenamiento: "idParametrizacion",
      },
      { headers: { Authorization: "12345", usuario: "arodrivi" } }
    );
  }

  public updateStatusAdherence(infoAdherence: InfoAdherence): Observable<any> {
    return this.clientHttp.post<PaginaResponse>(
      "/otorgamiento/v1.0/adherencia/editarCriterio",
      { infoAdherence },
      { headers: { Authorization: "12345", usuario: "arodrivi" } }
    );
  }

  public findAllProfiles(): Observable<any> {
    return this.clientHttp.post<PaginaResponse>(
      "/otorgamiento/v1.0/adherencia/colsultarCorreoDistribucion",
      {},
      { headers: { Authorization: "12345", usuario: "arodrivi" } }
    );
  }

  public saveProfile(infoProfile: any): Observable<any> {
    return this.clientHttp.post<PaginaResponse>(
      "/otorgamiento/v1.0/adherencia/agregarCorreoDistribucion",
      infoProfile,
      { headers: { Authorization: "12345", usuario: "arodrivi" } }
    );
  }

  public updateProfile(infoProfile: any): Observable<any> {
    return this.clientHttp.post<PaginaResponse>(
      "/otorgamiento/v1.0/adherencia/editarCorreoDistribucion",
      infoProfile,
      { headers: { Authorization: "12345", usuario: "arodrivi" } }
    );
  }

  public updateStatusProfileMS(infoProfile: any): Observable<any> {
    return this.clientHttp.post<PaginaResponse>(
      "/otorgamiento/v1.0/adherencia/editarCorreoDistribucion",
      infoProfile,
      { headers: { Authorization: "12345", usuario: "arodrivi" } }
    );
  }

  public findAllRulesCriteria(): Observable<any> {
    return this.clientHttp.post<PaginaResponse>(
      "/otorgamiento/v1.0/adherencia/consultarReglaCriterio",
      { headers: { Authorization: "12345", usuario: "arodrivi" } }
    );
  }
}
