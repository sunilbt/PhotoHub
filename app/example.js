angular.module('plunker', ['ui.bootstrap']);
var PaginationDemoCtrl = function ($scope, $http) {
    
    
    $scope.data = [];

    $http.get('photographers/photographers.json').then(function(response){
        $scope.data = response.data;
        $scope.totalItems = $scope.data.length;
    });

    $scope.viewby = 10;
    $scope.currentPage = 4;
    $scope.itemsPerPage = $scope.viewby;
    $scope.maxSize = 5; //Number of pager buttons to show

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        console.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.setItemsPerPage = function(num) {
    $scope.itemsPerPage = num;
    $scope.currentPage = 1; //reset to first paghe
    }
};