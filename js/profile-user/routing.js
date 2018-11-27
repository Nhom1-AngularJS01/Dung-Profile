(() => {
    angular.module('BlogApp')
        .config(function ($stateProvider) {
            const profileState = [{
                name: "profileUser",
                url: "/@:username",
                templateUrl: "template/profileUser.html",
                controller: "ProfileUser"
            }];
            const myAticlesState = [{
                name: "profileUser.myAticle",
                url: "/favorites",
                templateUrl: "template/profileAticles.html",
                controller: "FavoritedAticles"
            }];
            profileState.forEach(state => {
                $stateProvider.state(state);
            });
            myAticlesState.forEach(state => {
                $stateProvider.state(state);
            })
        })
})();