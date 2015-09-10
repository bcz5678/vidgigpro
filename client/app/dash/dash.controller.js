'use strict';

angular.module('vidgigproApp')
  .controller('DashCtrl', function($scope, $location, Auth) {

    if (Auth.isLoggedIn() == true) {
    	  $scope.UserInfo = Auth.getCurrentUser();
    } else {
  	    $location.path('/');		
    }
  });

angular.module('vidgigproApp')
  .controller('profileCtrl', function($scope) {
      $scope.profile = "Profile Placeholder";
  });

angular.module('vidgigproApp')
  .controller('accountCtrl', function($scope) {
      $scope.account = "account Placeholder";
  });

angular.module('vidgigproApp')
  .controller('gigsCtrl', function($scope) {
      $scope.gigs = "Gigs Placeholder";
  });

angular.module('vidgigproApp')
  .controller('mediaCtrl', function($scope) {
      $scope.media = "Media Placeholder";
  });

angular.module('vidgigproApp')
  .controller('reviewsCtrl', function($scope) {
      $scope.reviews = "Reviews Placeholder";
  });

angular.module('vidgigproApp')
  .controller('wizardCtrl', function($scope) {
      $scope.formData = {};
});
