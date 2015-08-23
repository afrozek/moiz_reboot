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