
'use strict';

angular.module('myApp.services', [])

.factory('serviceId', ['$http','$q',function($http,$q) {

    this.getContent = function(data){
        var deff = $q.defer();
        var req = {
        method: 'GET',
    url: ' https://x2-server.herokuapp.com/api/contexts',
    top: data.top,
    left:  data.left
    /*Parameter: {top: 'Eva', left:  'write mail to Eva'}*/
};
             $http(req).then(function mySucces(response) {
        deff.resolve(response.data.content);
    }, function myError(response) {
        console.log(response.statusText);
    });
return deff.promise;
    };

	return this;

}]);
