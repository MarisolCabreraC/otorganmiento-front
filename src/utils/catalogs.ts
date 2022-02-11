/**
 * Copyright (c) everis. All rights reserved.
 * Licensed under the MIT License.
 * Banco Popular
 * Version: 1.0.0
 * Date: DIC 2021
 * All rights reserved
 * @description Fichero para la administracion de catalogos a nivel de APIS
 */
 import { environment } from '../environments/environment';

 const IP_API = environment.apiUrl;
 
 export const API_CATALOGS = {
     
     //Catalogo producto
     SEARCH_CATALOGO: IP_API + '/otorgamiento/v1.0/productos/etapa/consulta',
     SEARCH_CATALOG_PAGE:
         IP_API + '/otorgamiento/v1.0/productos/producto/consultarpaginado',
    UPDATE_CATALOG_PRODUCT:
         IP_API + '/otorgamiento/v1.0/productos/producto/editar',
    ADD_CATALOG_PRODUCT: 
         IP_API + '/otorgamiento/v1.0/productos/producto/agregar',
    STATUS_CATALOG_PRODUCT:
         IP_API + '/otorgamiento/v1.0/productos/producto/editar/estado',
    SEARCH_CATALOG_PRODUCT:
         IP_API + '/otorgamiento/v1.0/productos/producto/consulta',
 
 
     //Catalogo Tipo Flujo
     SEARCH_CATALOG_TYPE_FLOW:
         IP_API + '/otorgamiento/v1.0/productos/flujo/consulta',
     ADD_CATALOG_TYPE_FLOW: IP_API + '/otorgamiento/v1.0/productos/flujo/agregar',
     UPDATE_CATALOG_TYPE_FLOW:
         IP_API + '/otorgamiento/v1.0/productos/flujo/editar',
     STATUS_CATALOG_TYPE_FLOW:
         IP_API + '/otorgamiento/v1.0/productos/flujo/estado',
 
     //Catalogo canal venta
     SEARCH_CATALOG_CANAL:
         IP_API + '/otorgamiento/v1.0/gestion-solicitud/canal/consulta',
     ADD_CATALOG_CANAL:
         IP_API + '/otorgamiento/v1.0/gestion-solicitud/canal/agregar',
     UPDATE_CATALOG_CANAL:
         IP_API + '/otorgamiento/v1.0/gestion-solicitud/canal/editar',
     STATUS_CATALOG_CANAL:
         IP_API + '/otorgamiento/v1.0/gestion-solicitud/canal/estado',
 
    //Catalogo tipo cuenta
    SEARCH_CATALOG_ACCOUNT:
        IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipocuenta/listar',
    SEARCH_CATALOG_ID_ACCOUNT:
        IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipocuenta/buscar',
     ADD_CATALOG_ACCOUNT:
         IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipocuenta/guardar',
     UPDATE_CATALOG_ACCOUNT:
         IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipocuenta/editar',
     STATUS_CATALOG_ACCOUNT:
         IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipocuenta/cambiarestado',

     //Catalogo festivos
     SEARCH_CATALOG_FESTIVE:
     IP_API + '/otorgamiento/v1.0/parametrizacion/festivo/consulta',
     ADD_CATALOG_FESTIVE:
     IP_API + '/otorgamiento/v1.0/parametrizacion/festivo/agregar',
     UPDATE_CATALOG_FESTIVE:
     IP_API + '/otorgamiento/v1.0/parametrizacion/festivo/editar',
     STATUS_CATALOG_FESTIVE:
     IP_API + '/otorgamiento/v1.0/parametrizacion/festivo/estado',
     SEARCH_CATALOG_ID_FESTIVE:
     IP_API + '/otorgamiento/v1.0/parametrizacion/festivo/consulta/id',
     UPDATE2_CATALOG_FESTIVE:
     IP_API + '/otorgamiento/v1.0/parametrizacion/festivo/actualizar',
 
     //Catalogo cargo
     SEARCH_CATALOG_CARGO:
         IP_API + '/otorgamiento/v1.0/info-laboral/cargo/consultarpaginado',
     ADD_CATALOG_CARGO: IP_API + '/otorgamiento/v1.0/info-laboral/cargo/agregar',
     UPDATE_CATALOG_CARGO: IP_API + '/otorgamiento/v1.0/info-laboral/cargo/editar',
 
     //Catalogo ocupacion
     SEARCH_CATALOG_OCUPATION:
         IP_API + '/otorgamiento/v1.0/cliente/ocupacion/consultarpaginado',
     ADD_CATALOG_OCUPATION:
         IP_API + '/otorgamiento/v1.0/cliente/ocupacion/agregar',
     UPDATE_CATALOG_OCUPATION:
         IP_API + '/otorgamiento/v1.0/cliente/ocupacion/editar',
     STATUS_CATALOG_OCUPATION:
         IP_API + '/otorgamiento/v1.0/cliente/ocupacion/editar',
 
     //Catalogo profesion
     LIST_CATALOG_PROFESSION:
         IP_API + '/otorgamiento/v1.0/cliente/profesion/listar',
     ADD_CATALOG_PROFESSION:
         IP_API + '/otorgamiento/v1.0/cliente/profesion/agregar',
     UPDATE_CATALOG_PROFESSION:
         IP_API + '/otorgamiento/v1.0/cliente/profesion/editar',
     STATUS_CATALOG_PROFESSION:
         IP_API + '/otorgamiento/v1.0/cliente/profesion/cambiarestado',
 
     //Catalogo actividad
     SEARCH_CATALOG_ACTIVITY:
         IP_API + '/otorgamiento/v1.0/cliente/actividad/consulta',
     ADD_CATALOG_ACTIVITY: IP_API + '/otorgamiento/v1.0/cliente/actividad/agregar',
     UPDATE_CATALOG_ACTIVITY:
         IP_API + '/otorgamiento/v1.0/cliente/actividad/editar',
     STATUS_CATALOG_ACTIVITY:
         IP_API + '/otorgamiento/v1.0/cliente/actividad/estado',
 
     //Catalogo sector
     LIST_CATALOG_SECTOR:
         IP_API + '/otorgamiento/v1.0/info-laboral/sectorempresa/listar',
     ADD_CATALOG_SECTOR:
         IP_API + '/otorgamiento/v1.0/info-laboral/sectorempresa/agregar',
     UPDATE_CATALOG_SECTOR:
         IP_API + '/otorgamiento/v1.0/info-laboral/sectorempresa/editar',
     STATUS_CATALOG_SECTOR:
         IP_API + '/otorgamiento/v1.0/info-laboral/sectorempresa/cambiarestado',
 
     //Catalogo tipo de contrato
     SEARCH_CATALOG_CONTRACT:
         IP_API + '/otorgamiento/v1.0/info-laboral/tipocontrato/listar',
     ADD_CATALOG_CONTRACT:
         IP_API + '/otorgamiento/v1.0/info-laboral/tipocontrato/agregar',
     UPDATE_CATALOG_CONTRACT:
         IP_API + '/otorgamiento/v1.0/info-laboral/tipocontrato/editar',
 
     //Catalogo estamento decisor
     SEARCH_CATALOG_STATEMENT:
         IP_API + '/otorgamiento/v1.0/gestion-solicitud/estamentodecisor/consultarpaginado',
     ADD_CATALOG_STATEMENT:
         IP_API + '/otorgamiento/v1.0/gestion-solicitud/estamentodecisor/agregar',
     UPDATE_CATALOG_STATEMENT:
         IP_API + '/otorgamiento/v1.0/gestion-solicitud/estamentodecisor/editar',
     
     //Catalogo Oficinas
     SEARCH_CATALOG_OFFICE_ALL:
         IP_API + '/otorgamiento/v1.0/oficinas/oficina/consultarpaginado',
     SEARCH_CATALOG_OFFICE_ZONES:
         IP_API + '/otorgamiento/v1.0/oficinas/zonas/consultar',
     SEARCH_CATALOG_OFFICE_DEPARTMENTS:
         IP_API + '/otorgamiento/v1.0/oficinas/departamentos/consultar',
     SEARCH_CATALOG_OFFICE_CITIES:
         IP_API + '/otorgamiento/v1.0/oficinas/ciudades/consultar',
     ADD_CATALOG_OFFICE: IP_API + '/otorgamiento/v1.0/oficinas/oficina/agregar',
     UPDATE_CATALOG_OFFICE: IP_API + '/otorgamiento/v1.0/oficinas/oficina/editar',
 
     //Parametrizacion
     SEARCH_PARAMS_ALL_PAGES:
         IP_API + '/otorgamiento/v1.0/parametrizacion/parametro/consultarPaginado',
     SEARCH_PARAMS_ALL_NAMES:
         IP_API + '/otorgamiento/v1.0/parametrizacion/parametro/consultarNombre',
 
     //Parametrizacion catalogos
     SEARCH_ALL_CATALOGS:
         IP_API + '/otorgamiento/v1.0/parametrizacion/menucatalogo/consultar',
     UPDATE_PARAMS:
         IP_API + '/otorgamiento/v1.0/parametrizacion/parametro/actualizar',
     SEARCH_PARAMS:
         IP_API + '/otorgamiento/v1.0/parametrizacion/parametro/consultar',
 

    //Parametrización adherencia
    SEARCH_ADHERENCE_ALL_PAGES: 'http://localhost:8081/otorgamiento/v1.0/adherencia/consultarCriterio',
    CHANGE_STATUS_ADHERENCE: 'http://localhost:8081/otorgamiento/v1.0/adherencia/editarCriterio',

     //Catálogo Entidad Financiera
     SEARCH_CATALOG_FINANCIAL_ENTITY:
     IP_API + '/otorgamiento/v1.0/gestion-solicitud/entidadfinanciera/listar',
     ADD_CATALOG_FINANCIAL_ENTITY:
     IP_API + '/otorgamiento/v1.0/gestion-solicitud/entidadfinanciera/guardar',
     UPDATE_CATALOG_FINANCIAL_ENTITY:
     IP_API + '/otorgamiento/v1.0/gestion-solicitud/entidadfinanciera/editar',
     STATUS_CATALOG_FINANCIAL_ENTITY:
     IP_API + '/otorgamiento/v1.0/gestion-solicitud/entidadfinanciera/cambiarEstado',

     //Catalógo de Reginales
     SEARCH_CATALOG_REGIONALES_ENTITY:
     IP_API + '/otorgamiento/v1.0/oficinas/regional/consulta',
     SEARCH_CATALOG_REGIONALES_ID_ENTITY:
     IP_API + '/otorgamiento/v1.0/oficinas/regional/consultar',
     ADD_CATALOG_REGINALES_ENTITY:
     IP_API + '/otorgamiento/v1.0/oficinas/regional/agregar',
     UPDATE_REGINALES_STATEMENT:
     IP_API + '/otorgamiento/v1.0/oficinas/regional/editar',
     STATUS_CATALOG_REGINALES_ENTITY:
     IP_API + '/otorgamiento/v1.0/oficinas/regional/estado',

     //Catalogo Etapa Flujo
     SEARCH_CATALOG_FLOW_STAGE:
         IP_API + '/otorgamiento/v1.0/productos/etapa/listar',
     ADD_CATALOG_FLOW_STAGE: IP_API + '/otorgamiento/v1.0/productos/etapa/guardar',
     UPDATE_CATALOG_FLOW_STAGE:
         IP_API + '/otorgamiento/v1.0/productos/etapa/editar',
     STATUS_CATALOG_FLOW_STAGE:
         IP_API + '/otorgamiento/v1.0/productos/etapa/cambiarestado',

      //Catalógo de Tipo documento
      SEARCH_CATALOG_TYPEDOCUMENT_ENTITY:
      IP_API + '/otorgamiento/v1.0/cliente/tipoidentificacion/listar',
      SEARCH_CATALOG_TYPEDOCUMENT_ID_ENTITY:
      IP_API + '/otorgamiento/v1.0/cliente/tipoidentificacion/buscar',
      ADD_CATALOG_TYPEDOCUMENT_ENTITY:
      IP_API + '/otorgamiento/v1.0/cliente/tipoidentificacion/guardar',
      UPDATE_CATALOG_TYPEDOCUMENT_STATEMENT:
      IP_API + '/otorgamiento/v1.0/cliente/tipoidentificacion/editar',
      STATUS_CATALOG_TYPEDOCUMENT_ENTITY:
      IP_API + '/otorgamiento/v1.0/cliente/tipoidentificacion/cambiarestado',

    // Catalogo Zona
    LIST_CATALOG_ZONE:
        IP_API + '/otorgamiento/v1.0/oficinas/zonas/listar',
    ADD_CATALOG_ZONE: IP_API + '/otorgamiento/v1.0/oficinas/zonas/guardar',
    UPDATE_CATALOG_ZONE:
        IP_API + '/otorgamiento/v1.0/oficinas/zonas/editar',
    STATUS_CATALOG_ZONE:
        IP_API + '/otorgamiento/v1.0/oficinas/zonas/cambiarestado',

    // Catalogo Rol Titularidad
    LIST_CATALOG_ROL:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/titularidad/listar',
    ADD_CATALOG_ROL: IP_API + '/otorgamiento/v1.0/gestion-solicitud/titularidad/guardar',
    UPDATE_CATALOG_ROL:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/titularidad/editar',
    STATUS_CATALOG_ROL:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/titularidad/cambiarestado',

    // Catalogo Tipo Documento Decisor
    LIST_CATALOG_DOC_DECIDER:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipodocumentodecisor/listar',
    ADD_CATALOG_DOC_DECIDER: IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipodocumentodecisor/guardar',
    UPDATE_CATALOG_DOC_DECIDER:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipodocumentodecisor/editar',
    STATUS_CATALOG_DOC_DECIDER:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipodocumentodecisor/cambiarestado',

    //Catálgo Tipo Pagaré
    LIST_CATALOG_PAY_NOTE:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipopagare/listar',
    ADD_CATALOG_PAY_NOTE:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipopagare/guardar',
    UPDATE_CATALOG_PAY_NOTE:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipopagare/editar',
    STATUS_CATALOG_PAY_NOTE:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipopagare/cambiarestado',
    SEARCH_CATALOG_PAY_NOTE:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/tipopagare/buscar'
 };
