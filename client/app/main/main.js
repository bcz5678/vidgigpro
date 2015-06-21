'use strict';

angular.module('vidgigproApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
	url: "/",
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
