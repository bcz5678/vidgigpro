'use strict';

angular.module('vidgigproApp')
  .controller('DashCtrl', function($scope, $location, Auth) {

    console.log(Auth.getCurrentUser());
    if (Auth.isLoggedIn() == true) {
	
	$scope.UserInfo = Auth.getCurrentUser();
    } else {
	$location.path('/');		
    }
   	

  });
