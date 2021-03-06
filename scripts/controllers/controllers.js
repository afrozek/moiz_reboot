

angular.module('app')
/*UNIQUE PAGES CONTROLLERS========================================================================*/
	// main controller
	.controller('mainCtrl',['$scope',function($scope){
		$scope.message = "test";

		//toggle nav
		$scope.navToggle = function(){
			$('#main_nav ul').slideToggle();
		}
	}])

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
				$scope.bgUrl = "images/moiz_pt_gym_wide.png"
				$scope.intro = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud";


				$scope.latestArticles = articleCategoryServe.get($scope.category).then(function(data){
					$scope.latestArticles = data;
				}); 



			}])

	//nutrition
		.controller('nutritionCtrl',['$scope','articleCategoryServe',function($scope,articleCategoryServe){
				$scope.category = "nutrition";
				$scope.bgUrl = "images/nutrition.png"
				$scope.intro = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud";

				$scope.latestArticles = articleCategoryServe.get($scope.category).then(function(data){
					$scope.latestArticles = data;
				}); 



			}])

	//motivation
		.controller('motivationCtrl',['$scope','articleCategoryServe',function($scope,articleCategoryServe){
				$scope.category = "motivation";
				$scope.bgUrl = "images/motivation_landing.png"
				$scope.intro = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud";

				$scope.latestArticles = articleCategoryServe.get($scope.category).then(function(data){
					$scope.latestArticles = data;
				}); 

			}])






	


