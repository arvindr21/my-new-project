'use strict';

/**
 * @ngdoc function
 * @name myFirstAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myFirstAppApp
 */
angular.module('myFirstAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
