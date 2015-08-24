angular.module('app')
	.factory('dataServe',function($http){
			return{
				get:function(){
					//return[{"name":"afroze"}];
					return $http.get('api/articles.php').then(function(response){
						return response.data;

					})

				}
			}
		})

	.factory('articleServe',function($http){
			return{
				getArticleContent:function(postNum){
					return $http.get('api/articles.php?post_num=' + postNum).then(function(response){
						return response.data;

					})
				}
			}
		})

	