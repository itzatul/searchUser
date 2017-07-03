
var searchUser = {
    templateUrl: 'pages/search/search.html',
    bindings: {
        onKeyPress: '&',
        users: '<'
    },
    controller: 'SearchUserController',
    controllerAs: 'va'
}

angular
    .module('search')
    .component('searchUser', searchUser);

function SearchUserController($scope) {
}

angular
    .module('search')
    .controller('SearchUserController', SearchUserController);