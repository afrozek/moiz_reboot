angular.module('app',['ui.router',])
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		//any route not provided routes to otherwise below
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home',{
			url:'/',
			templateUrl:'templates/home.html',
			controller:'homeCtrl'
		})//end state

		.state('about',{
			url:'/about',
			templateUrl:'templates/about.html',
			controller:'aboutCtrl'
		})//end state

		.state('articles',{
			url:'/articles',
			templateUrl:'templates/articles.html',
			controller:'articlesCtrl'
		})//end state

		.state('contact',{
			url:'/contact',
			templateUrl:'templates/contact.html',
			controller:'contactCtrl'
		})//end state
	}])//end config 