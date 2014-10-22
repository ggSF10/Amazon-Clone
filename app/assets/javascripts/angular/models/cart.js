app.factory('Cart', ['$resource', function($resource) {
	var Order = $resource("/orders/:id", {id: "@id"});

	return {
		items: {},
		addItem: function(item) {
			if (this.items[item.id]) {
				this.items[item.id].count++;
				
			}
		}
	}
    

}]);