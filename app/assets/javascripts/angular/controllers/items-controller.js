app.controller('ItemController', ['$scope', '$location', 'Item', 'Cart',
  function($scope, $location, Item, Cart){

  $scope.items = Item.query();
  $scope.totalInCart = 0;

  $scope.purchaseItem = function(item){
    if(item.quantity > 0)
      Cart.updateCart(item);
    	$scope.totalInCart += 1;
    	item.quantity --;
  };

  $scope.checkout = function(){
    $location.path('/checkout');
  };

}]);
