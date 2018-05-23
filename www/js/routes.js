angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.sessions', {
    url: '/sessions',
	params: {
		slotId: "",
		dayNr: "",
		slotType: "",
		title: "",
		description: ""		
},
    views: {
      'tab2': {
        templateUrl: 'templates/sessions.html',
        controller: 'sessionsCtrl'
      }
    }
  })

  .state('tabsController.session', {
    url: '/session',
	params: {
		sessionId: ""		
},
    views: {
      'tab2': {
        templateUrl: 'templates/session.html',
        controller: 'sessionCtrl'
      }
    }
  })

  .state('speakers', {
    url: '/speakers',
    templateUrl: 'templates/speakers.html',
    controller: 'speakersCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.schedule', {
    url: '/schedule',
    views: {
      'tab2': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.map', {
    url: '/map',
    views: {
      'tab3': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('tabsController.sponsors', {
    url: '/sponsors',
    views: {
      'tab4': {
        templateUrl: 'templates/sponsors.html',
        controller: 'sponsorsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.info'
      2) Using $state.go programatically:
        $state.go('tabsController.info');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/info
      /page1/tab5/info
  */
  .state('tabsController.info', {
    url: '/info',
    views: {
      'tab1': {
        templateUrl: 'templates/info.html',
        controller: 'infoCtrl'
      },
      'tab5': {
        templateUrl: 'templates/info.html',
        controller: 'infoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.gettingToTheConference'
      2) Using $state.go programatically:
        $state.go('tabsController.gettingToTheConference');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/getting-to-the-conference
      /page1/tab5/getting-to-the-conference
  */
  .state('tabsController.gettingToTheConference', {
    url: '/getting-to-the-conference',
    views: {
      'tab1': {
        templateUrl: 'templates/gettingToTheConference.html',
        controller: 'gettingToTheConferenceCtrl'
      },
      'tab5': {
        templateUrl: 'templates/gettingToTheConference.html',
        controller: 'gettingToTheConferenceCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.hotels'
      2) Using $state.go programatically:
        $state.go('tabsController.hotels');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/hotels
      /page1/tab5/hotels
  */
  .state('tabsController.hotels', {
    url: '/hotels',
    views: {
      'tab1': {
        templateUrl: 'templates/hotels.html',
        controller: 'hotelsCtrl'
      },
      'tab5': {
        templateUrl: 'templates/hotels.html',
        controller: 'hotelsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.carRental'
      2) Using $state.go programatically:
        $state.go('tabsController.carRental');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/car-rental
      /page1/tab5/car-rental
  */
  .state('tabsController.carRental', {
    url: '/car-rental',
    views: {
      'tab1': {
        templateUrl: 'templates/carRental.html',
        controller: 'carRentalCtrl'
      },
      'tab5': {
        templateUrl: 'templates/carRental.html',
        controller: 'carRentalCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/home')


});