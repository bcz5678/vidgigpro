'use strict';

angular.module('vidgigproApp')
  .controller('MainCtrl', function($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if ($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  });

angular.module('vidgigproApp')
  .controller('Page2Ctrl', function($scope, $http, socket) {
        $scope.headline = "Page 2 Headline";
  });

angular.module('vidgigproApp')
  .controller('Page3Ctrl', function($scope, $http, socket) {
	$scope.headline = "Page 3 Headline";
  });

