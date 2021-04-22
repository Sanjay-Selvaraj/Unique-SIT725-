(function () {
    angular.module('shoppingapp')
        .config(routeConfig);

    console.log(routeConfig)
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routeConfig($stateProvider, urp) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'src/template/home.template.html',
                controller:'HomeController as category',
                resolve:{
                    data:['ProductService',function(service){
                        return service.getCategories();
                    }]
                }
            })
            .state('home.product', {
                url: '/{productName}',
                templateUrl: 'src/template/product.template.html',
                controller:'ProductController as items',
            })
            .state('home.product.item', {
                url: '/{itemName}',
                templateUrl: 'src/template/viewItem.template.html',
                controller:'ItemController as item',
            })
            ;
        urp.otherwise('/home');
    }
})();