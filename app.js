(function(){
  'use strict'; //to avoid globalscope
angular.module('myFirstApp',[])
/*.controller('MyFirstController', function($scope){
  $scope.name="Kiya";
  $scope.hello=function(){
    alert('Heloow');
  };
});*/
.controller('NameCalulator', function($scope){
  $scope.name="";
  $scope.totVal = 0;
  $scope.displayNumeric=function(){
      $scope.totVal = findtotVal($scope.name)
  };
  function findtotVal(string){
    var stringVal = 0;
    for(var i=0; i<string.length;i++){
      stringVal += string.charCodeAt(i);
    }
    return stringVal;
  };
});

})();
