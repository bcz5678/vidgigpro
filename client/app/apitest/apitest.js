'use strict';

angular.module('vidgigproApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('apitest', {
	url: "/apitest",
        templateUrl: 'app/apitest/apitest.html',
        controller: 'apiTestCtrl',
      })
   });

