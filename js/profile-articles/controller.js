(() => {
    angular.module("BlogApp")
        .controller("FavoritedAticles", function ($stateParams, $scope, $http) {
            console.log($stateParams.username);
            var request = function (offset) {
                var req = {
                    method: 'GET',
                    url: `https://conduit.productionready.io/api/articles?favorited=${$stateParams.username}&limit=5&offset=${offset}`
                }
                $http(req).then(data => {
                    if ($scope.articles != []) {
                        ({ data: { articles: $scope.articles } } = data);
                        $scope.totalItems = data.data.articlesCount;
                        // console.log(data.data.articlesCount);
                        $scope.notArticle = false;
                        $scope.currentPage = 1;
                        $scope.itemsPerPage = 5;
                        if ($scope.totalItems === 0) {
                            $scope.paginationShow = false;
                            $scope.notArticle = true;
                        } else if ($scope.totalItems <= 5) {
                            $scope.paginationShow = false;
                            // $scope.notArticle = true;
                        } else {
                            $scope.paginationShow = true;
                        }
                    }
                })
            }
            request(0);
            $scope.changePage = (currentPage) => {
                // console.log(currentPage)
                // console.log((currentPage - 1) * 5);
                request((currentPage - 1) * 5);
            }
        })
})();