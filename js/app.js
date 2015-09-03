var angApp = angular.module('AngBlog',['ngRoute']);

angApp.config('$routeProvider', function($routeProvider){
	$routeProvider.when({
		controller 	: 'loginController',
		templateUrl : 'views/login.html'
	})
});