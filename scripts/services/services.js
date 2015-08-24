angular.module('app')

	//serves all articles from every category
	.factory('everyArticleServe',function($http){
			return{
				get:function(){
					//return[{"name":"afroze"}];
					return $http.get('api/articles.php').then(function(response){
						return response.data;

					})

				}
			}
		})

	//serves 1 article by post num
	.factory('articleServe',function($http){
			return{
				getArticleContent:function(postNum){
					return $http.get('api/articles.php?post_num=' + postNum).then(function(response){
						return response.data;

					})
				}
			}
		})

	//serves all articles from a specific category
	.factory('articleCategoryServe',function($http){
			return{
				get:function(postCat){
					return $http.get('api/articles.php?category=' + postCat).then(function(response){
						return response.data;

					})
				}
			}
		})

	