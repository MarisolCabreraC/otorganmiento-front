/**
 * @ngdoc const
 * @copyright Copyright (c) Banco Popular. All rights reserved.
 * @license MIT License.
 * @version 1.0.0
 * @since Julio 2020
 * @author jcastcor - para Banco Popular.
 * @description Fichero encargado de realizar el manejo de las constantes en el menu.
 */
export const APP = {
  PROFILE: {
    CLIENT: 'client',
    ADMIN: 'administrator',
  },
  MENU: {
    ADMIN: [
      {
        id: 10,
        active: true,
        icon: 'Group.svg',
        name: 'Consultar cliente o solicitud',
        route: '/home/query',
      },
      {
        id: 6,
        active: false,
        icon: 'document.svg',
        name: 'Generar reporte',
        route: '/home/reportes',
        reportUrl: 'url',
      },
      {
        id: 7,
        active: false,
        icon: 'cog.svg',
        name: 'Parametrización',
        route: '/home/parametrization',
        subMenus: [
          {
            id: 7,
            name: 'Parametrización general',
            route: '/home/parametrization',
          },
          {
            id: 8,
            name: 'Parametrización catálogos',
            route: '/home/parametrization/catalogos',
          },
          
        ],
      },
      { 
        id: 12,
        active: false,
        icon: 'reintento.svg',
        name: 'Reintento',
        route: '/home/reintentos',
        subMenus: [
          {
            id: 12,
            name: 'Parametrización reintento',
            route: '/home/reintentos/parametrizacion',
          },
          {
            id: 13,
            name: 'Ejecución masiva',
            route: '/home/reintentos/masivo',
           },
        ]
      },
      {
        id: 9,
        active: true,
        icon: 'lock.svg',
        name: 'Seguridad',
        route: '/home/seguridad',
        subMenus: [
          {
            id: 4,
            name: 'Administrador de accesos',
            route: '/home/admin-access',
          },
          {
            id: 9,
            name: 'Administrador de perfíl',
            route: '/home/admin-profile',
          },
        ],
      },
    ],
    CLIENT: [
      {
        id: 10,
        active: true,
        activeMenu: false,
        icon: 'Group.svg',
        name: 'Consultar cliente o solicitud',
        route: '/home/query',
      },
    ],
  },
};

export const PARAMS_SEARCH = {
  NUMBER_ID: 'numero_id',
  NUMBER_REQUEST: 'solicitud_id',
};

export const MESSAGE = {
  ERROR_SERVICE: 'Lo sentimos, no hemos encontrado resultados',
};

export const URL_API_EXTERNAL = {
  URL_MICROSOFT_GRAPH_ME: 'https://graph.microsoft.com/v1.0/me',
  URL_MICROSOFT_GRAPH_ME_MEMBER_OF:
    'https://graph.microsoft.com/v1.0/me/memberOf',
};

export const ERROR_PROFILE = {
  REPEATED_CODE: {
    CODE: 'ERR0001',
    DESCRIPTION: 'El código ingresado ya se encuentra en uso',
  },
};
