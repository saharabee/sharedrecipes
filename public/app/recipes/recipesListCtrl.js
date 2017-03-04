angular.module('app').controller('recipesListCtrl', function($scope, cachedRecipes){
    $scope.title='My Recipes';
    $scope.recipes = cachedRecipes.query();
});
