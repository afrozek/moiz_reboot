angular.module('app',['ui.router','app.directives.posts'])
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		//any route not provided routes to otherwise below
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home',{
			url:'/',
			templateUrl:'templates/home.html',
			controller:'homeCtrl'
		})//end state

		.state('articles',{
			url:'/articles/:postNum',
			templateUrl:'templates/articles.html',
			controller:'articlesCtrl'
		})//end state

		// .state('about',{
		// 	url:'/about',
		// 	templateUrl:'templates/about.html',
		// 	controller:'aboutCtrl'
		// })//end state

		// .state('contact',{
		// 	url:'/contact',
		// 	templateUrl:'templates/contact.html',
		// 	controller:'contactCtrl'
		// })//end state

		//CONTENT PAGES

		.state('physical-therapy',{
			url:'/physical-therapy',
			templateUrl:'templates/content_pages.html',
			controller:'ptCtrl'
		})//end state

		.state('nutrition',{
			url:'/nutrition',
			templateUrl:'templates/content_pages.html',
			controller:'nutritionCtrl'
		})//end state

		.state('motivation',{
			url:'/motivation',
			templateUrl:'templates/content_pages.html',
			controller:'motivationCtrl'
		})//end state

		// .state('mo-knows',{
		// 	url:'/mo-knows',
		// 	templateUrl:'templates/content_pages.html',
		// 	controller:'moKnowsCtrl'
		// })//end state

		// .state('blog',{
		// 	url:'/blog',
		// 	templateUrl:'templates/content_pages.html',
		// 	controller:'blog'
		// })//end state

	}])//end config 




