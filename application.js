(function(){
	var application = angular.module('webapp', ['webapp-directives']);
	application.controller('WebappController', ['$http', function($http){

		var webapp = this;
		webapp.users = [];


		$http.get('https://randomuser.me/api/?results=15').success(function(data){
			webapp.users= data.results;
		});
	}]);

})();