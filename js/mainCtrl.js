myApp.controller('mainCtrl', function($scope) {
  $scope.name = {
    name: 'Eric Leatham',
  };
})
.directive('menuBar', function() {
  return {
    template: '{{name.name}}'
  };
});
