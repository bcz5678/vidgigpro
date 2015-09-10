'use strict';

angular.module('vidgigproApp')
  .controller('apiTestCtrl', function($scope, $http, Auth) {
	$scope.UserInfo = Auth.getCurrentUser();
	$http.get("api/userprofiles/$scope.UserInfo._id", function(userprofile){
		$scope.userprofiles = userprofile; 	
	});
  });
