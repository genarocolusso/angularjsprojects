'use strict';
angular.module('burgerMenu', [])
  .controller('burgerController', function($scope) {
    var ingredientList = this; 

    $scope.ingredient = [

        {name:'Bread', extrainfo:'Delicious bread', price:'2.00', img:'images/paotop.png',type:'food-6.png'},
    	{name:'Angus Burger', extrainfo:'180g', price:'5.00', img:'images/burgerangus.png',type:'food-2.png'},
        {name:'Mushrooms', extrainfo:'Fresh Mushrooms', price:'3.00', img:'images/cogumelos.png',type:'food.png'},
        {name:'Swiss Cheese', extrainfo:'2 Slices', price:'3.50', img:'images/queijosuico.png',type:'cheese.png'}
    ]


     
  });
 