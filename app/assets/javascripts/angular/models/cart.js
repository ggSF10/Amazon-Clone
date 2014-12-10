app.factory('Cart', ['$resource', function($resource) {
  var Order = $resource("/orders/:id", {id: "@id"});

  return {
    cart: {},
    overallTotal: 0,
    addToCart: function(item) {
      if(this.cart[item.id] === undefined) {
        this.cart[item.id] = {item: item, count: 1};
        item.quantity -= 1;
        this.overallTotal += item.price;
      } else {
        this.cart[item.id].count += 1;
        item.quantity -= 1; 
        this.overallTotal += item.price;
      }
    },

    getCartItems: function() {
      return cart;
    },

    purchaseItems: function(name) {
      for(item in this.cart) {
        var itemPurchased = this.cart[item];
      }

      var order = new Order({person: name, cost: this.grandTotal});
      order.$save();
      this.cart = {};
    }

  };

}]);