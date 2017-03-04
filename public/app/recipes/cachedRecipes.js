angular.module('app').factory('cachedRecipes', function(Recipe){
    var recipesList;

    return{
        query:function(){
            if(!recipesList){
                recipesList = Recipe.query();
             }

             return recipesList;
             
        }
    }
});