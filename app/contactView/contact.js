/******************************************************************************/
/* Contact JS for robertgz.app */
/******************************************************************************/

robertgzApp.controller('ContactCtrl', [
    '$scope',
    '$http',
    'JSONFactory',
function($scope, $http, JSONFactory)
{
    $scope.mySocials = [];

    JSONFactory.getStuff('socials.json')
            .then(function (response) {
                $scope.mySocials = response.data.components;
            }, function (error) {
            console.error(error);
            });
}]);