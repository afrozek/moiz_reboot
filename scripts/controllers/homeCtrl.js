

angular.module('app')
	.controller('homeCtrl',['$scope','dataServe',function($scope,dataServe){
			$scope.data = dataServe.get().then(function(data){
				$scope.latestArticles = data;
			});
			//console.log($scope.data);
		}])



	.controller('articlesCtrl',['$scope','$stateParams','articleServe',function($scope,$stateParams,articleServe){
			$scope.postNum = $stateParams.postNum;
			// $scope.articleContent = articleServe.getArticleContent($stateParams.postNum).then(function(data){
			// 	$scope.articleContent = data;
			// })
			$scope.articleContent = articleServe.getArticleContent($stateParams.postNum).then(function(data){
				$scope.articleContent = data;
			}); 

		}])


