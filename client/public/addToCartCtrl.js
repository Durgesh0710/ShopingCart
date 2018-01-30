app.controller('addToCartCtrl', function($scope,$q,performer) {
	
	$scope.records=performer.getCart();	
	$scope.removeRow=function(id){
		$scope.records=performer.deleteItem(id);		
	};

	

});