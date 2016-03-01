moduleService = angular.module('appData', []);

moduleService.service('orderData', function($http){
    
    this.orders = null;
    
    this.getOrders = function(){
        
       return $http.get('http://theproductionarea.net/wc-api/nm_wc_api');
    }
    
    
    this.getOrderDetail = function( orderId ){
        
        
    }
    
    
});