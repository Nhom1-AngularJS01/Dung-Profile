(() => {
    angular.module("BlogApp")
        .controller("ProfileUser", function ($stateParams, $scope, $http, $rootScope) {
            $rootScope = {
                user: {
                    id: 42772,
                    email: "nguyenkimdung5336@gmail.com",
                    createdAt: "2018-11-21T06:21:17.176Z",
                    bio: null,
                    image: null,
                    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDI3NzIsInVzZXJuYW1lIjoiRHVuZyIsImV4cCI6MTU0ODQ3OTgzNX0.7L8SWXfF2-jqoXNo35yDWqlTunjUzqKNUmiHCkgZk20",
                    updatedAt: "2018-11-21T06:21:17.181Z",
                    username: "Dung"
                }
            }

            if ($stateParams.username == $rootScope.user.username) {
                $scope.showFollow = "Edit ";
            } else {
                $scope.showFollow = "Follow "
            }
            console.log($scope.showFollow);


            var request = {
                method: "GET",
                url: `https://conduit.productionready.io/api/profiles/${$stateParams.username}`
            }
            $http(request).then(data => {
                ({ data: { profile: $scope.profile } } = data);
            })

            var reques = function (offset) {
                var req = {
                    method: "GET",
                    url: `https://conduit.productionready.io/api/articles?author=${$stateParams.username}&limit=5&offset=${offset}`
                }
                $http(req).then(data => {
                    if ($scope.articles != []) {
                        ({ data: { articles: $scope.articles } } = data);
                        $scope.totalItems = data.data.articlesCount;
                        // console.log(data.data.articlesCount);
                        $scope.notMyArticle = false;
                        $scope.currentPage = 1;
                        $scope.itemsPerPage = 5;
                        if ($scope.totalItems === 0) {
                            $scope.paginationShow = false;
                            $scope.notArticle = true;
                        } else if ($scope.totalItems <= 5) {
                            $scope.paginationShow = false;
                            // $scope.notMyArticle = true;
                        } else {
                            $scope.paginationShow = true;
                        }
                    }
                })
            }
            reques(0);

            $scope.changePage = (currentPage) => {
                // console.log(currentPage)
                // console.log((currentPage - 1) * 5);
                reques((currentPage - 1) * 5);
            }
        });
})();