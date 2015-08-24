

angular.module('app')
	.controller('aboutCtrl',['$scope','dataServe',function($scope,dataServe){
			$scope.title="About Page";
			$scope.data = dataServe.get().then(function(data){
				$scope.latestArticles = data;
			});
			//console.log($scope.data);
		}])