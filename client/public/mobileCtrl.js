app.controller('mobileCtrl', function($scope,$http,performer) {
$http({
        method : "GET",
        url : "http://localhost:5018/getMobiles/mobile"
    }).then(function mySuccess(response) {
    	console.log(response.data);
        $scope.mobiles = response.data;
    }, function myError(response) {
        $scope.mobiles = response.statusText;
    });


    $scope.view= function(item){
 		performer.postItem(item);
		}
});