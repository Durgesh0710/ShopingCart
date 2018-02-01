app.controller('indexCtrl', function($scope,$http) {


$scope.sendData=function(){
    $http.get("./DataFile.json").then(function(response){
        $http({
            method : "POST",
            url : "http://localhost:5018/postItem",
            data: response.data 
        }).then(function mySuccess(resp) {
            console.log(resp.data);
            }, function myError(err) {
        });
    });

}

});
