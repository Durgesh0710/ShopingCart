app.controller('allItemCtrl', function($scope,$http,performer) {
	$http({
        method : "GET",
        url : "http://localhost:5018/getAllItem"
    }).then(function mySuccess(response) {
    	console.log(response.data);
        $scope.Items = response.data;
    }, function myError(response) {
        $scope.Items = response.statusText;
    });

 	$scope.view= function(item){
 		performer.postItem(item);

}



});