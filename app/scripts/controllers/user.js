'use strict';

/**
 * @ngdoc function
 * @name myFirstAppApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the myFirstAppApp
 */
angular.module('myFirstAppApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
