angular.module('myApp')
.controller('expCtrl', function($scope){
  $scope.toggle=function(){
    $scope.showing = !$scope.showing;
  };
  $scope.showing = true;
});
  angular.module('myApp').directive('hideList', function(){
    function link ($scope, element, attributes){
      var expression = attributes.hideList;
      if ( ! $scope.$eval( expression)){
        element.hide();
      }
    $scope.$watch(expression, function(newValue, oldValue){
      if (newValue === oldValue) {
        return;
      } if ( newValue){
        element.stop(true, true).slideDown();
      }else{
        element.stop(true, true).slideUp();
      }

    });
  };
    return ({
      link:link,
      restrict: 'A'

    });
  });
