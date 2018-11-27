(() => {
    angular.module("BlogApp")
        .controller("PaginationDemoCtrl", function ($scope, ) {
            $scope.currentPage = 1;
            $scope.totalItems = $scope.articles.articlesCount;
            
        })
})();


