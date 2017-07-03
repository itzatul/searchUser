angular.module('search',['userService'])
.component('search', {
	templateUrl: "pages/search/home.html",
	controller: homeController,
	controllerAs: 'vm'
});
homeController.$inject = ['Users'];

function homeController (Users){
	var vm = this;
	vm.users = [];
	vm.onSearch = function(userKey) {
		vm.apiData = Users.getUser(userKey)
		vm.users = vm.apiData.searchedUsers;
	}
 };