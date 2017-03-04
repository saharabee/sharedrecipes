angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
$locationProvider.html5Mode(true);

$routeProvider.when(' /views', {
    templateUrl: 'views/index',
    controller: 'recipesListCtrl'

})
.when('/recipes/:id',{
    templateUrl: 'views/recipe',
    controller: 'recipeCtrl'

})

});
