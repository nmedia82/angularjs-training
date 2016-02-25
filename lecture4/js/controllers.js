var appControllers = angular.module('appControllers', []);

appControllers.controller('profileController', function($scope, $http){
    
    $http.get('data/data.json').success(function(data){
        
        $scope.profiles = data;     
    });
    
});

appControllers.controller('ordersController', function($scope, $http){
    
    $http.get('http://theproductionarea.net/wc-api/nm_wc_api').success(function(data){
        
        $scope.orders = data.orders;     
    });
});

appControllers.controller('orderDetailController', function($scope, $http, $routeParams){
   
   $scope.theId = $routeParams.orderId; 
   
});

appControllers.controller('itemDetailController', function($scope, $http, $routeParams){
   
   $scope.orderId = $routeParams.orderId; 
   $scope.itemId = $routeParams.itemId; 
   
});

appControllers.controller('pluginsController', function($scope, $http){
    
    $scope.nmPlugins = 
    [{name: "PPPOM", url:'#ppom'},
   {name: "CFOM", url:'#cfom'},
   {name: "mailchimp", url:'#mailchimp'}];
   
});