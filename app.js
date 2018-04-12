(function () {

    'use strict';
    angular.module('DIApp', [])
        .controller('DIController', DIController)
        .filter('lovesFilter', PintuFilter);

    DIController.$inject = ['$scope', 'lovesFilter'];

    function DIController($scope, lovesFilter) {

        $scope.sayMessage = function () {
            var name = 'Anand likes to eat chicken';
            return name;
        };

        $scope.sayLoveMessage = function () {
            var name = 'Anand likes to eat chicken';
            name = lovesFilter(name);
            return name;
        };

    }
    
    function PintuFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    }

})();
