app.controller('OrderController', ['$scope', '$location', 'Item', 'Cart',
  function($scope, $location, Item, Cart) {
    $scope.person = {};

    $scope.cartInfo = Cart.cart;

    $scope.grandTotal = Cart.grandTotal;

    $scope.placeOrder = function() {
      Cart.buyItems($scope.person.name);
      $location.path("/");
    };

  }
]);