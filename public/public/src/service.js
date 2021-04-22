angular.module('shoppingapp')
.service('ProductService', ProductService);

ProductService.$inject = ['$http', 'ApiPath'];

function ProductService($http, ApiPath) {
    var service = this;

    service.getCategories = function () {
        return [
          {
              "product": "Lipstick",
              "img": "assets/2.jpg",
              "short_description": "upto 10% on branded Lipsticks",
              "list": [
                  {
                      "name": "Berry Shy",
                      "img": "assets/lipstick/berry%20shy.jpg",
                      "discount": 5,
                      "saleSate": "sold",
                      "price": 10,
                      "rate":4,
                      "long_description": "The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance",
                      "color": "#5d1b1d",
                      "features": [
                          "Smudge Free",
                          "Water Proof",
                          "Long Last"
                      ]
                  },
                  {
                      "name": "Go For Peach",
                      "img": "assets/lipstick/berry%20shy.jpg",
                      "discount": 20,
                      "saleSate": "sold",
                      "price": 10,
                      "rate":3,
                      "long_description": "The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance",
                      "color": "black",
                      "features": [
                          "Smudge Free",
                          "Water Proof",
                          "Long Last"
                      ]
                  }
              ]
          }
      ];

      }
    }