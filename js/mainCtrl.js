angular.module('myApp').controller('mainCtrl', function($scope) {
  
  $scope.name = {
    name: 'Eric Leatham',
  };
})
angular.module('myApp').directive('myName', function() {
  return {
    template: '{{name.name}}'
   };
});
