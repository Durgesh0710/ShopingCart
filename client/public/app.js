var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('all', {
            url: '/AllItems',
            templateUrl: 'AllItems.html',
            controller:'allItemCtrl'

        })

        
        .state('mobile', {
            url: '/Mobile',
            templateUrl: 'mobile.html',
            controller:'mobileCtrl'

        })


        .state('jewellery', {
            url: '/Jewellery',
            templateUrl: 'jewellery.html',
            controller:'jewelleryCtrl'

        })

        
        .state('tshirts', {
            url: '/T-shirts',
            templateUrl: 'tshirts.html',
            controller: 'tshirtsCtrl'      
        })


        .state('View', {
            url: '/ViewItem',
            templateUrl: 'viewItem.html',
            controller:'viewItemCtrl'

        })

        .state('cart', {
            url: '/Cart',
            templateUrl: 'addToCart.html',
            controller:'addToCartCtrl'

        });

});


app.service('performer',function(){
    var OBJk={
        jsonArr:[]
    };

    var CARt={
        jsonArr:[]
    };
    
    this.postItem=function(item){
        if(OBJk.jsonArr){
            OBJk.jsonArr=[];
        }
        OBJk.jsonArr.push(item);
    }

    this.getItem=function(){
        return OBJk.jsonArr;
    }


    this.postCart=function(item){
        if(!CARt.jsonArr){
            CARt.jsonArr=[];
        }
        CARt.jsonArr.push(item);
        console.log("1"+CARt.jsonArr);
    }
    this.getCart=function(){
        console.log("2"+CARt.jsonArr);
        return CARt.jsonArr;
    }
    this.deleteItem=function(id){
        var index = -1;     
        var comArr = eval( CARt.jsonArr );
        for( var i = 0; i < comArr.length; i++ ) {
            if( comArr[i].id === id ) {
                index = i;
                break;
            }
        }
        if( index === -1 ) {
            alert( "Something gone wrong" );
        }
        CARt.jsonArr.splice( index, 1 );
        return CARt.jsonArr; 

    }   

});







