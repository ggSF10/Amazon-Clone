app.controller('ItemController', ['$scope', '$location', 'Item',
  function($scope, $location, Item) {
  
  $scope.items = Item.query();

  $scope.buyItem = function(item) {
  	if (item.quantity > 0) {
  		Cart.addItem(item);
  		item.quantity--;
  	}
  };


}]);
