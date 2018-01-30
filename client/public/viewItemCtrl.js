app.controller('viewItemCtrl', function($scope,performer) {


		var result= performer.getItem();
		
        $scope.image = result[0].image;
        $scope.description=result[0].description;
        $scope.features=result[0].feature;
        $scope.cost=result[0].cost;

        $scope.add= function(){
 		performer.postCart(result[0]);
		}
    
});