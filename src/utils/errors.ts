/**
 * @ngdoc const
 * @copyright Copyright (c) Banco Popular. All rights reserved.
 * @license MIT License.
 * @version 1.0.0
 * @since Septiembre 2020
 * @author jcastcor - para Banco Popular.
 * @description Fichero encargado de realizar el manejo de las constantes de los errores.
 */
export const ERRORS = {
  ERROR_NO_SELECCTION:
    'Por favor elija una opción y escriba la información correspondiente.',
  ERROR_NO_IDCLIENT:
    'Lo sentimos, no hemos encontrado el número de documento solicitado.',
  ERROR_NO_IDSOLICITUD:
    'Lo sentimos, no hemos encontrado la solicitud en nuestra base de datos.',
  //HTTP ERRORS
  ERROR_HTTP_401:
    'El token de su sesión ha caducado por favor espere',
  ERROR_HTTP_404:
    'Lo sentimos, el servidor no pudo interpretar la solicitud dada una sintaxis inválida.',
  ERROR_HTTP_204:
    'Lo sentimos, La petición se ha completado con éxito pero su respuesta no tiene ningún contenido.',
  ERROR_HTTP_400: 
     'Lo sentimos, la pagina que busca no esta disponible.',
  ERROR_HTTP_500:
    'Lo sentimos, el requerimiento esta temporalmente fuera de servicio.',
  ERROR_SERVIDOR_COMMUNICATION1:
    'Lo sentimos no se ha podido establecer comunicación con el servidor',
  ERROR_SERVIDOR_COMMUNICATION2:
    'Lo sentimos no se ha podido establecer comunicación con el servidor 02',
  ERROR_SERVIDOR_COMMUNICATION3:
    'Lo sentimos no se ha podido establecer comunicación con el servidor 03',
  ERROR_BROWSER:
    'BROWSER OFFLINE'
};
