var app = angular.module('plunker', []);

app
.controller('MainCtrl', function($scope, $document) {
  $scope.lines = []
  $scope.enter = function(){
    $scope.lines.push(`guest@rosspc:~/$ ${$scope.gutter}`)
    $scope.lines.push(`Command ${$scope.gutter} not recognized. Please try again.`)
    delete $scope.gutter
  }
})