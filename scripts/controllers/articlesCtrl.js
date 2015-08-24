

angular.module('app')
	.controller('articlesCtrl',['$scope','$stateParams','articleServe',function($scope,$stateParams,articleServe){
			$scope.postNum = $stateParams.postNum;
			// $scope.articleContent = articleServe.getArticleContent($stateParams.postNum).then(function(data){
			// 	$scope.articleContent = data;
			// })
			$scope.articleContent = articleServe.getArticleContent().then(function(data){
				$scope.articleContent = data;
			}); 

		}])