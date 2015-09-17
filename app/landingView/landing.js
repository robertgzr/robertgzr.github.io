/******************************************************************************/
/* Landing JS for robertgz.app */
/******************************************************************************/

robertgzApp.controller('LandingCtrl', [
    '$scope',
    '$http',
    '$interval',
    'JSONFactory',
function($scope, $http, $timeout, JSONFactory)
{
    // $scope.mySocials = socialLinks;
    $scope.mySocials = [];

    JSONFactory.getStuff('socials.json')
            .then(function (response) {
                $scope.mySocials = response.data.components;
            }, function (error) {
            console.error(error);
            });


    $scope.name_visbl = false;

    $scope.toggle_visbl = function() {
        if ($scope.name_visbl==false) {
            $scope.name_visbl = true;
        } else{
            $scope.name_visbl = false;
        };
    };

    $scope.wait = function() {
        $timeout(function(){$scope.toggle_visbl()});
        $timeout(function(){$scope.toggle_visbl()}, 1000);
    }

}]);
