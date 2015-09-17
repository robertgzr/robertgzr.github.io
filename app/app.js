/******************************************************************************/
/* Global angularJS for robertgz.app */
/******************************************************************************/

var robertgzApp = angular.module('robertgzApp', [
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
]);

/******************************************************************************/
/* RUN ROUTINE */
/******************************************************************************/
robertgzApp.run([
    '$rootScope',
    '$state',
    '$stateParams',
function($rootScope, $state, $stateParams)
{
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);

/******************************************************************************/
/* ROUTING */
/******************************************************************************/
robertgzApp.config([
    '$stateProvider',
    '$urlRouterProvider',
function($stateProvider, $urlRouterProvider)
{
    // plangularConfigProvider.clientId = '7c35578dc9473d7693a9afb9f897afeb';
    $urlRouterProvider
        .otherwise('/');

    $stateProvider

        .state('home', {
          url: "/",
          templateUrl: "app/landingView/landing.html"
        })

        // .state('projects', {
        //   url: "/projects",
        //   templateUrl: "app/projectsView/projects.html"
        // })

        .state('music', {
          url: "/music",
          templateUrl: "app/musicView/music.html"
        })

        .state('contact', {
          url: "/contact",
          templateUrl: "app/contactView/contact.html"
        })

        .state('soundcloud', {
          url: "/soundcloud",
          templateUrl: "app/partials/soundcloud.html"
        })

        .state('404', {
          url: "/404",
          templateUrl: "app/partials/404.html"
        });

}]);

/******************************************************************************/
/* FACTORYS */
/******************************************************************************/

/* JSON Loading Factory */
robertgzApp.factory('JSONFactory', function ($q, $http) {
    return {
      getStuff: function (file) {
        var deferred = $q.defer(),
          httpPromise = $http.get('data/'+file);

        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });

        return deferred.promise;
      }
    };
  });

/******************************************************************************/
/* CONTROLLERS */
/******************************************************************************/
robertgzApp.controller('HeaderCtrl', [
    '$scope',
    '$http',
    'JSONFactory',
function($scope, $http, JSONFactory)
{
    // $scope.myViews = [];
    // JSONFactory.getStuff('views.json')
    //         .then(function (response) {
    //             $scope.myViews = response.data.components;
    //         }, function (error) {
    //         console.error(error);
    //         });

    $scope.navCollapsed = true;

    var hov=false;
    var click=false;
}]);
