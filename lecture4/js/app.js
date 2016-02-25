(function(){

var app = angular.module('nmApp', ['ngRoute', 'appControllers']);

app.config(['$routeProvider', function($routeProvider){
    
    $routeProvider
    .when('/home',{
        templateUrl: 'templates/home.html'
    })
    .when('/profiles',{
        templateUrl: 'templates/profiles.html',
        controller: 'profileController'
    })
    .when('/plugins',{
        templateUrl: 'templates/plugins.html',
        controller: 'pluginsController'
    })
    .when('/orders',{
        templateUrl: 'templates/orders.html',
        controller: 'ordersController'
    })
    .when('/detail/:orderId',{
        templateUrl: 'templates/order-detail.html',
        controller: 'orderDetailController'
    })
    .when('/detail/:orderId/itemid/:itemId',{
        templateUrl: 'templates/item-detail.html',
        controller: 'itemDetailController'
    })
    .otherwise({
        redirectTo: '/home'
    })
}]);

})();   