(function(){
  'use strict';

  angular.module("LunchCheck", [])

  .controller('LunchCheckController', init);

  init.$inject = ['$scope'];
  function init($scope){

    $scope.checkIfToomuch = function () {
      var items = $scope.string.split(',');
      if (items.length==1 && items[0]==""){
        $scope.message = "Please enter data first";
      } else if (items.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();
