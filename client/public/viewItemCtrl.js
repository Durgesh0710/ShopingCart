app.controller('viewItemCtrl', function($scope,$http,performer) {


		var result= performer.getItem();
        console.log(result[0]);
		$http({
        method : "GET",
        url : "http://localhost:5018/getView/"+result[0].id
    	}).then(function mySuccess(response) {
    	console.log(response.data);
        // $scope.image = response.data[0].image;
        // $scope.description=response.data[0].description;
        // $scope.features=response.data[0].feature;
        // $scope.cost=response.data[0].cost;
    	}, function myError(response) {
        $scope.Items = response.statusText;
    	});
		
        



        $scope.add= function(){
 		performer.postCart(result[0]);
		}
    
});