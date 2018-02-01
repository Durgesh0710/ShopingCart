app.controller('jewelleryCtrl', function($scope,$http,performer) {
$http({
        method : "GET",
        url : "http://localhost:5018/getJewellery/jewellery"
    }).then(function mySuccess(response) {
    	console.log(response.data);
        $scope.jewelleries = response.data;
    }, function myError(response) {
        $scope.jewelleries = response.statusText;
    });

    $scope.view= function(item){
 		performer.postItem(item);
		}
});