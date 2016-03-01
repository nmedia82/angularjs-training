moduleService = angular.module('appData', []);

moduleService.service('orderData1', function($http){
    
    this.orders = null;
    
    this.getOrders = function(){
        
       return $http.get('http://theproductionarea.net/wc-api/nm_wc_api');
    }
    
    this.getOrderDetail = function( orderId ){
        
    }
    
});

moduleService.factory('orderData', function($http){
    
    var factoryObj;
    
    factoryObj = {
        
        orders: {},
        
        getOrders: function(){
            
            return $http.get('http://theproductionarea.net/wc-api/nm_wc_api');
        }
        
    }
    
    return factoryObj;
    
});


