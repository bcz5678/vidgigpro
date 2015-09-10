'use strict';

angular.module('vidgigproApp')
  .controller('MainCtrl', function($scope, $http) {
   
  });

angular.module('vidgigproApp')
  .controller('Page2Ctrl', function($scope, $http, socket) {
        $scope.headline = "Page 2 Headline";
  });

angular.module('vidgigproApp')
  .controller('Page3Ctrl', function($scope, $http, socket) {
	$scope.headline = "Page 3 Headline";
  });

