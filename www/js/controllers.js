angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('sessionsCtrl', ['$scope', '$stateParams', '$ionicLoading', 'Sessions', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, Sessions) {

    $scope.slotId = $stateParams.slotId;
    $scope.dayNr = $stateParams.dayNr;
    $scope.slotType = $stateParams.slotType;
    $scope.title = $stateParams.title;
    $scope.description = $stateParams.description;
    //console.log('slotId = ' + $scope.slotId + ', dayNr = ' + $scope.dayNr + ', slotType = ' + $scope.slotType + ', title = ' + $scope.title);
    
    if ($scope.slotType === '0') {
        $scope.allSessions = [];
    
        // Setup the loader
        $ionicLoading.show();
                
        Sessions.all().then(function(sessions) { 
            $scope.allSessions = sessions; 
            $ionicLoading.hide();
        });
    }

    //Placeholder for later functionality
    $scope.doRefresh = function() {
    
        console.log('Refreshing!');
        $timeout( function() {
            Sessions.all().then(function(sessions) { $scope.allSessions = sessions; });
        
          //Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.refreshComplete');
        
        }, 1000);
      
    };
}])
   
.controller('sessionCtrl', ['$scope', '$stateParams', '$ionicLoading', 'Sessions', '$sce', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, Sessions, $sce) {

    $scope.sessionId = $stateParams.sessionId;

    $scope.session = {};

    // Setup the loader
    $ionicLoading.show();
    
    Sessions.one($scope.sessionId).then(function(session) { 
        $scope.session = session; 
        $ionicLoading.hide();
    });

    //Placeholder for later functionality
    $scope.doRefresh = function() {
    
        console.log('Refreshing!');
        $timeout( function() {
            Sessions.all().then(function(sessions) { $scope.allSessions = sessions; });
        
          //Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.refreshComplete');
        
        }, 1000);
      
    };
}])
   
.controller('speakersCtrl', ['$scope', '$stateParams', '$ionicLoading', 'Sessions', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, Sessions) {

    $scope.allSessions = [];

    // Setup the loader
    $ionicLoading.show();
    
    Sessions.all().then(function(sessions) { 
        $scope.allSessions = sessions; 
        $ionicLoading.hide();
    });

    //Placeholder for later functionality
    $scope.doRefresh = function() {
    
        console.log('Refreshing!');
        $timeout( function() {
            Sessions.all().then(function(sessions) { $scope.allSessions = sessions; });
        
          //Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.refreshComplete');
        
        }, 1000);
      
    };
}])
      
.controller('scheduleCtrl', ['$scope', '$stateParams', '$ionicLoading', 'Schedule', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, Schedule) {

    $scope.days = {};

    // Setup the loader
    $ionicLoading.show();
            
    Schedule.all().then(function(schedule) { 
        $scope.days = schedule.Days; 
        $ionicLoading.hide();
    });

    $scope.hasSessions = function(sessions, slotType) {
        var cnt = Object.keys(sessions).length;
        //console.log('count = ' + cnt + ', slotType = ' + slotType);
        if (slotType === 0 && cnt === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    
    //Placeholder for later functionality
    $scope.doRefresh = function() {
    
        console.log('Refreshing!');
        $timeout( function() {
            Schedule.all().then(function(schedule) { $scope.schedule = schedule; });
        
          //Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.refreshComplete');
        
        }, 1000);
      
    };
}])
   
.controller('homeCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $ionicHistory) {

    /*$scope.goToInfo = function() {
        $ionicHistory.nextViewOptions({
          disableAnimate: true,
          disableBack: true
        });
        $state.go('tabsController.info');
    }*/

}])
   
.controller('mapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('sponsorsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('infoCtrl', ['$scope', '$stateParams', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicHistory) {

}])
   
.controller('gettingToTheConferenceCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('hotelsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('carRentalCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 