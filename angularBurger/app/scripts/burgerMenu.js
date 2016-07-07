'use strict';
angular.module('burgerMenu', [])
.controller('burgerController', function($scope) {


    $scope.ingredient = [

    {name:'Bread', extrainfo:'Delicious bread', price:0.20, img:'images/paotop.png',type:'food-6.png'},
    {name:'Bottom Bread', extrainfo:'Delicious bread', price:0.20, img:'images/paobottom.png',type:'food-6.png'},
    {name:'Angus Burger', extrainfo:'180g', price:2.00, img:'images/burgerangus.png',type:'food-5.png'},
    {name:'Mushrooms', extrainfo:'Fresh Mushrooms', price:0.50, img:'images/cogumelos.png',type:'food.png'},
    {name:'Swiss Cheese', extrainfo:'2 Slices', price:1.50, img:'images/queijosuico.png',type:'cheese.png'}
     ]

    $scope.choosenArray = [];
    $scope.pagartotal = 0;
    $scope.addIngredientToList = function(item){

        $scope.choosenArray.push(item);
        $scope.updatePeopleSelection();
    }
    
    $scope.updatePeopleSelection = function () {
         var total = 0; 
      for (var i = 0; i < $scope.choosenArray.length; i++)
      { 
         total += $scope.choosenArray[i].price;
    }
    return total;
};

});
