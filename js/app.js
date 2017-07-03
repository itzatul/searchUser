var searchApp = angular.module('searchApp', [
	"ngRoute",
	"search"
]); 

searchApp.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $routeProvider.
        when('/', {
          template: '<search></search>'
        }).
        otherwise('/');
    }
]);
