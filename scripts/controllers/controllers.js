

angular.module('app')
/*UNIQUE PAGES CONTROLLERS========================================================================*/
	
	//homepage controller
	.controller('homeCtrl',['$scope','everyArticleServe',function($scope,everyArticleServe){
			$scope.data = everyArticleServe.get().then(function(data){
				$scope.latestArticles = data;
			});
			//console.log($scope.data);
		}])



	//CONTROLS A SINGLE ARTICLE CONTENT
	.controller('articlesCtrl',['$scope','$stateParams','articleServe',function($scope,$stateParams,articleServe){
			$scope.postNum = $stateParams.postNum;

			$scope.articleContent = articleServe.getArticleContent($stateParams.postNum).then(function(data){
				$scope.articleContent = data;
			}); 

		}])

	//mo knows
	.controller('moKnowsCtrl',['$scope','articleCategoryServe',function($scope,articleCategoryServe){
			$scope.category = "mo knows";

			$scope.articleContent = articleCategoryServe.get($scope.category).then(function(data){
				$scope.latestArticles = data;
			}); 

		}])


	//CONTACT PAGE CONTROLLER
	.controller('contactCtrl',['$scope',function($scope){
			$scope.title="Contact Page";
		}])

/*CONTENT PAGES CONTROLLERS================================*/

	//physical therapy
		.controller('ptCtrl',['$scope','articleCategoryServe',function($scope,articleCategoryServe){
				$scope.category = "physical therapy";
				$scope.bgUrl = ""
				$scope.intro = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud";


				$scope.articleContent = articleCategoryServe.get($scope.category).then(function(data){
					$scope.latestArticles = data;
				}); 

			}])

	//nutrition
		.controller('nutritionCtrl',['$scope','articleCategoryServe',function($scope,articleCategoryServe){
				$scope.category = "nutrition";

				$scope.articleContent = articleCategoryServe.get($scope.category).then(function(data){
					$scope.latestArticles = data;
				}); 

			}])

	//motivation
		.controller('motivationCtrl',['$scope','articleCategoryServe',function($scope,articleCategoryServe){
				$scope.category = "motivation";

				$scope.articleContent = articleCategoryServe.get($scope.category).then(function(data){
					$scope.latestArticles = data;
				}); 

			}])






	


