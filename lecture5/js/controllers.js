var appControllers = angular.module('appControllers', []);

appControllers.controller('profileController', function($scope, $http){
    
    $http.get('data/data.json').success(function(data){
        
        $scope.profiles = data;     
    });
});

appControllers.controller('menuController', function($scope, $route){
   $scope.route = $route;
});

appControllers.controller('ordersController', function($scope, orderData){
    
   
    if( orderData.orders !== null ){
        $scope.orders = orderData.orders;
    }else{
        orderData.getOrders().success(function(data){
            
            orderData.orders =  data.orders;    
            $scope.orders = orderData.orders;
        });
    }
    

});

appControllers.controller('orderDetailController', function($scope, $routeParams, orderData){
   
   
   angular.forEach(orderData.orders, function(order, k){
    console.log(order.id);
    if(order.id == $routeParams.orderId )   
        $scope.order = order;
    });
   
   
});

appControllers.controller('itemDetailController', function($scope, $http, $routeParams){
   
   $scope.orderId = $routeParams.orderId; 
   $scope.itemId = $routeParams.itemId; 
   
});

appControllers.controller('pluginsController', function($scope){
    
    $scope.nmPlugins = 
    [{name: "PPPOM", url:'#ppom'},
   {name: "CFOM", url:'#cfom'},
   {name: "mailchimp", url:'#mailchimp'}];
   
});