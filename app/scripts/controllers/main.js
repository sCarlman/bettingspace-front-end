'use strict';

/**
 * @ngdoc function
 * @name bettingSpaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bettingSpaceApp
 */
angular.module('bettingSpaceApp')
  .controller('MainCtrl', function ($scope,$location) {
    $scope.changeView = function(view){
        $location.path(view); // path not hash
    }
  });
