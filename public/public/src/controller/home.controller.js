
(function (){
    angular.module('shoppingapp')
    .controller('HomeController',HomeController)
    .controller('ProductController',ProductController)
    .controller('ItemController',ItemController);

    HomeController.$inject = ['data'];
    function HomeController(data){
        var category = this;
        category.data = data;
    }

    ProductController.$inject = ['data','$stateParams'];
    function ProductController(data,params){
        var items = this;
        items.data = data.filter((obj) => obj.product === params.productName)[0];
        items.list = items.data.list;
        items.list.forEach(element => {
            element.dicountPrice = element.price-(element.price*element.discount/100);
            element.halfstar = 5-parseInt(element.rate);
            element.star = parseInt(element.rate);
        });
        
        // items.list.add('dicountPrice',items.list.price);
        items.range = function(min, max, step) {
            step = step || 1;
            var input = [];
            for (var i = min; i < max; i += step) {
                input.push(i);
            }
            return input;
        };
    }

    ItemController.$inject = ['data','$stateParams'];
    function ItemController(data,params){
        var item = this;
        var items = {};
        
        items.data = data.filter((obj) => obj.product === params.productName)[0];
        item.header = items.data.product;
        items.list = items.data.list;
        item.data = items.list.filter((obj)=> obj.name === params.itemName)[0];
        items.data.halfstar = parseFloat(item.data.rate) > parseInt(item.data.rate);
        items.data.star = parseInt(item.data.rate);
        console.log(item.data);

        item.range = function(min, max, step) {
            step = step || 1;
            var input = [];
            for (var i = min; i <= max; i += step) {
                input.push(i);
            }
            return input;
        };
    }
})();