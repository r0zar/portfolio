angular
.module('plunker', [])
.controller('MainCtrl', function($scope, $document) {
  $scope.lines = []
  $scope.enter = function(){
    $scope.lines.push(`guest@rosspc:~/$ ${$scope.gutter}`)
    switch($scope.gutter) {
      case 'ls':
        $scope.lines.push(`README.txt`)
        break;
      case 'pwd':
        $scope.lines.push(`/Users/guest`)
        break;
      default:
        $scope.lines.push(`command not found: ${$scope.gutter}`)
    }
    delete $scope.gutter
  }
})
