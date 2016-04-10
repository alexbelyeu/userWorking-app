(function(){
	var application = angular.module('webapp-directives', []);

	application.directive('usersListHeader', function(){
		return {
			restrict: 'E',
			templateUrl: 'users-list-header.html'
		}
	});
	application.directive('usersList', function(){
		return {
			restrict: 'E',
			templateUrl: 'users-list.html',
			controller: function() {
				this.userSelected={};
				this.selectUser = function(setUser){
					this.userSelected = setUser;
					//console.log(this.userSelected);
				};
				this.isSelected = function(checkUser){
					//console.log(this.userSelected, checkUser);
					//console.log(this.userSelected);
					return this.userSelected === checkUser;
				};
			},
			controllerAs: 'userCtrl'
		}
	});
	application.directive('userForm', function(){
		return {
			restrict: 'E',
			templateUrl: 'user-form.html',
			controller: function() {
				this.changeInfo = function(user) {
					user.name.first = this.user.name.first || user.name.first;
					user.name.last = this.user.name.last || user.name.last;
					user.email = this.user.email || user.email;
					user.cell = this.user.cell || user.cell;
				};
			},
			controllerAs: 'formCtrl'
		}
	});
	application.directive('userItem', function(){
		return {
			restrict: 'E',
			templateUrl: 'user-item.html'
		}
	});
})();