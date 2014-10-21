app.controller('ItemController', ['$scope', '$location', 'Item',
  function($scope, $location, Item) {
  
  $scope.items = Item.query();

}]);