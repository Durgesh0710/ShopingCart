app.controller('tshirtsCtrl', function($scope,$http,performer) {
$http({
        method : "GET",
        url : "http://localhost:5018/getTshirts/tshirt"
    }).then(function mySuccess(response) {
    	console.log(response.data);
        $scope.tshirts = response.data;
    }, function myError(response) {
        $scope.tshirts = response.statusText;
    });

    $scope.view= function(item){
 		performer.postItem(item);
		}
});