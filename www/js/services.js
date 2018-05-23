angular.module('app.services', [])

.service('Sessions', ['$q', '$http', function($q, $http){
    
    var ret = {
        all: function(){
            //https://cors-anywhere.herokuapp.com
            return $http.get('https://www.dnn-connect.org/DesktopModules/Connect/Conference/API/Conference/5/Sessions/Agenda?moduleid=1845&tabid=287').then(function(response) {
                return response.data;
            }, function(err){
                alert('An error has occurred in contacting the server');
            });
        },
        one: function(id){
            //https://cors-anywhere.herokuapp.com
            return $http.get('https://www.dnn-connect.org/DesktopModules/Connect/Conference/API/Conference/5/Sessions/Get?moduleid=1845&tabid=287&sessionId=' + id).then(function(response) {
                return response.data;
            }, function(err){
                alert('An error has occurred in contacting the server');
            });
        }
    }
    
    return ret;

}])

.service('Schedule', ['$q', '$http', function($q, $http){
    
    var ret = {
        all: function(){
            //https://cors-anywhere.herokuapp.com/
            return $http.get('https://www.dnn-connect.org/DesktopModules/Connect/Conference/API/Conference/5/Sessions/Schedule?moduleid=1845&tabid=287').then(function(response) {
                return response.data;
            }, function(err){
                alert('An error has occurred in contacting the server');
            });
        }
    }
    
    return ret;

}])