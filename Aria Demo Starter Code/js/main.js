'use strict';

var aria = angular.module('AriaApp', ['ngMessages']);

aria.controller('AriaCtrl', ['$scope' function($scope) {
   // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid) {

      // check to make sure the form is completely valid
      if (isValid) {
          alert('You have successfully submitted your name.');
      }

  };
   

}]);