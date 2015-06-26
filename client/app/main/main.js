'use strict';

angular.module('vidgigproApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
	url: "/",
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('page2', {
	url: "/page2",
	templateUrl: 'app/main/page2.html',
	controller: 'Page2Ctrl'
      })
      .state('page3', {
        url: "/page3",
        templateUrl: 'app/main/page3.html',
        controller: 'Page3Ctrl'
      });
  });
