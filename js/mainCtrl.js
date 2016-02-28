angular.module('myApp')

.controller('mainCtrl', ['$scope', function($scope) {
  $scope.name = {
    name: 'Eric Leatham',
  };
}])
.directive('homeName', function() {
  return {
    template: '{{name.name}} '
  };
});
