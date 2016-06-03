'use strict';

angular.module('scdiffApp', ['scdiffApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'btford.socket-io', 'ui.router', 'ui.bootstrap'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
