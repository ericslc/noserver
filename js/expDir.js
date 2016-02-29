myApp.controller('expCtrl',['$scope', function($scope){
  $scope.exp = {
    exp: 'Experience',
  };
}])
.directive('expDir', function(){
  return{
    restrict: 'E',
	template: {{exp.exp}},
};
});
