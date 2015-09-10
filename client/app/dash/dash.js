'use strict';

angular.module('vidgigproApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dash', {
      	abstract:true,
        url: '/dash',
        templateUrl: 'app/dash/dash.html',
        controller: 'DashCtrl'
      })
   	  .state('dash.home', {
   	  	url: '',
   	  	templateUrl: 'app/dash/views/home.html',
   	  })
   	  .state('dash.profile', {
   	  	url:'/profile',
   	  	templateUrl: 'app/dash/views/profile.html',
   	  	controller: 'profileCtrl'
   	  })
   	  .state('dash.account', {
   	  	url: '/account',
   	  	templateUrl: 'app/dash/views/account.html',
   	  	controller: 'accountCtrl'
   	  })
   	  .state('dash.gigs', {
   	  	url: '/gigs',
   	  	templateUrl: 'app/dash/views/gigs.html',
   	  	controller: 'gigsCtrl'
   	  })
   	  .state('dash.media', {
   	  	url: '/media',
   	  	templateUrl: 'app/dash/views/media.html',
   	  	controller : 'mediaCtrl'
   	  })
   	  .state('dash.reviews', {
   	  	url: '/reviews',
   	  	templateUrl: 'app/dash/views/reviews.html',
   	  	controller: 'reviewsCtrl'
   	  })
   	  .state('dash.wizard', {
   	  	abstract:true,
   	  	url: '/wizard',
   	  	templateUrl: 'app/dash/views/wizard/wizard.html',
   	  	controller: 'wizardCtrl'
   	  })
   	  .state('dash.wizard.step_one', {
   	  	url: '/step_one',
   	  	templateUrl: 'app/dash/views/wizard/step_one.html'
   	  })
   	  .state('dash.wizard.step_two', {
   	  	url: '/step_two',
   	  	templateUrl: 'app/dash/views/wizard/step_two.html'
   	  })
   	  .state('dash.wizard.step_three', {
   	  	url: '/step_three',
   	  	templateUrl: 'app/dash/views/wizard/step_three.html'
   	  })
   	  .state('dash.wizard.step_four', {
   	  	url: '/step_four',
   	  	templateUrl: 'app/dash/views/wizard/step_four.html'
   	  })
   	  .state('dash.wizard.step_five', {
   	  	url: '/step_five',
   	  	templateUrl: 'app/dash/views/wizard/step_five.html'
   	  })
   	  .state('dash.wizard.step_six', {
   	  	url: '/step_six',
   	  	templateUrl: 'app/dash/views/wizard/step_six.html'
   	  })
	});
