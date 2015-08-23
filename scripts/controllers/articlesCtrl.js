

angular.module('app')
	.controller('articlesCtrl',['$scope','dataServe',function($scope,dataServe){
			$scope.data = dataServe.get().then(function(data){
				$scope.latestArticles = data;
			});
			//console.log($scope.data);
		}])