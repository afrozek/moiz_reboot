angular.module('app')
	.factory('articleServe',function($http){
			return{
				getArticleContent:function(){
					return $http.get('api/articles.php?post_num=16').then(function(response){
						return response.data;

					})
				}
			}
		})

