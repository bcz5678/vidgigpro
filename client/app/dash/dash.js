'use strict';


angular.module('vidgigproApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dash', {
        url: '/dash',
        templateUrl: 'app/dash/dash.html',
        controller: 'DashCtrl'
      })

 	});
