/**
 * Copyright (c) everis. All rights reserved.
 * Licensed under the MIT License.
 * Banco Popular
 * Version: 1.0.0
 * Date: AGO 2019
 * Author: jcastcor - yquintana.
 * All rights reserved
 * @description Fichero para la administracion de constantes a nivel de APIS
 */
import { environment } from '../environments/environment';

const IP_API = environment.apiUrl;
export const API = {
  //TOKEN: IP_API + '/otorgamiento/seguridad/v1.0/oauth/token',
  TOKEN: IP_API + '/otorgamiento/v1.0/seguridad/autenticacion/token/generar',

  //   LOGIN: HOST + 'login/poc/porvenir/v1.0/login',
  SEARCH_REQUEST: IP_API + '/otorgamiento/v1.0/gestion-solicitud/solicitudes',
  SEARCH_PERMISSIONS:
    IP_API + '/otorgamiento/v1.0/seguridad/permisos/obtenerPermisos',
  //Perfil
  SEARCH_PROFILES: IP_API + '/otorgamiento/v1.0/seguridad/perfiles/consultar',
  //ADD_PROFILES: IP_API + '/otorgamiento/v1.0/seguridad/perfiles/agregar',
  UPDATE_PROFILES: IP_API + '/otorgamiento/v1.0/seguridad/perfiles/actualizar',
  PATH_PROFILES: IP_API + '/otorgamiento/v1.0/seguridad/perfiles/agregar',
  //PATH_PROFILES: IP_API + '/otorgamiento/v1.0/seguridad/perfil',
  PAGINATION_PROFILES:
    IP_API + '/otorgamiento/v1.0/seguridad/perfiles/consultarPaginado',
  SEARCH_REQUEST_DETAILS:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/solicitud/consultar',
  /* SEARCH_REQUEST_CLIENTE:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/solicitud/consultar/', */
  SEARCH_REQUEST_PER_CLIENTE:
    IP_API +
    '/otorgamiento/v1.0/gestion-solicitud/solicitud/consultarporcliente',
  SEARCH_CLIENT_ID: IP_API + '/otorgamiento/v1.0/cliente/consultar',
  //SEARCH_CLIENT_DOCUMENT: IP_API + '/otorgamiento/v1.0/cliente/documento/',
  SEARCH_CLIENT_DOCUMENT: IP_API + '/otorgamiento/v1.0/cliente/consultar/',
  //Oficina
  SEARCH_OFFICE: IP_API + '/otorgamiento/v1.0/oficinas/oficina/consultar/',

  //decision motor
  SEARCH_MOTOR: IP_API + '/otorgamiento/v1.0/decisionmotor/solicitud/',

  //Ficha
  DOWNLOAD_FILE: IP_API + '/otorgamiento/v1.0/ficha/consultar',

  //Financiera
  SEARCH_FINANCIERA:
    IP_API + '/otorgamiento/v1.0/gestion-solicitud/datosfinancieros/consultar/',

  //Laboral
  SEARCH_LABORAL: IP_API + '/otorgamiento/v1.0/info-laboral/empleado/consultar',

  // Trazabilidad
  SEARCH_TRAZA: IP_API + '/otorgamiento/v1.0/traza/consultar',
  UPDATE_TRAZA: IP_API + '/otorgamiento/v1.0/traza/actualizar',

  //Accesos
  SEARCH_ALL_PERMS: IP_API + '/otorgamiento/v1.0/seguridad/permisos/consultar',
  SEARCH_PERMS_BY_FUNCTION:
    IP_API + '/otorgamiento/v1.0/seguridad/permisos/consultarPorPerfil',
  UPDATE_PERMS:
    IP_API + '/otorgamiento/v1.0/seguridad/permisos/actualizarPermisos',
  
  //Reintentos
  SEND_MESSAGE:
      IP_API + '/otorgamiento/v1.0/reintentos/enviarMensaje',

  // Parametrizacion de reintentos 
  RETRY_PARAMETRIZATION:
    IP_API + '/otorgamiento/v1.0/parametrizacion/reintento/consultar',  

  // lista microservicios
  MICRO_SERVICIOS:
  IP_API + '/otorgamiento/v1.0/parametrizacion/reintento/microservicio/consultar', 

  // lista habil
  DIA:
    IP_API + '/otorgamiento/v1.0/parametrizacion/habil/lista', 

  // guardar parametrizacion reintento
  SAVE_PARAMETRIZATION: 
    IP_API + '/otorgamiento/v1.0/parametrizacion/reintento/agregar',
  
  // buscar parametrizacion reintento por id
  SEARCH_PARAMETRIZATION_ID: 
    IP_API + '/otorgamiento/v1.0/parametrizacion/reintento/consultarId',
  
  // editar parametrizacion reintento  
  EDIT_PARAMETRIZATION: 
    IP_API + '/otorgamiento/v1.0/parametrizacion/reintento/editar',

  //Lista de trazas en estado reintento para masivo
  TRACE_MASSIVE_RETRY:
    IP_API + '/otorgamiento/v1.0/traza/consultarEstado', 
  // hacer reintento masivo
  RETRY_MASSIVE_TRACES:
    IP_API + '/otorgamiento/v1.0/reintentos/enviarReintentoMasivo',  
};
