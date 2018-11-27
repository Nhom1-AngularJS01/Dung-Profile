(() => {
        angular.module("BlogApp")
                .controller("ListArticle", function ($scope, $http) {
                        var req = {
                                method: 'GET',
                                url: 'https://conduit.productionready.io/api/articles?limit=10&offset=0'
                        }
                        $http(req).then(data => {
                                ({ data: { articles: $scope.articles } } = data);
                                console.log($scope.articles);
                                // if (data.data.tagList == []) {
                                //         $scope.tagShow = false;
                                // } else {
                                //         $scope.tagShow = true;
                                // }
                                // console.log(data.data.articles.tagList)

                        })
                        $scope.isFeed = true;
                        $scope.load = (select) => {
                                if (select === 'My' && $scope.isFeed === false) {
                                        $scope.isFeed = true;
                                }
                                if (select === 'Favorited' && $scope.isFeed === true) {
                                        $scope.isFeed = false;
                                }
                        }
                })
})();