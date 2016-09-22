+function(){

  "use strict";

  angular.module("sockets-chat", [
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('createRoom', {
          url: "/",
          views: {
            '' : {
              templateUrl : '/views/createRoom.html',
              controller : 'CreateRoomController'
            }
          }
        })
        .state('adminRoom', {
          url: "/:name/admin",
          views: {
            '' : {
              templateUrl : '/views/adminRoom.html',
              controller : 'AdminRoomController'
            }
          }
        })
        .state('viewerRoom', {
          url: "/:name",
          views: {
            '' : {
              templateUrl : '/views/viewerRoom.html',
              controller : 'ViewerRoomController'
            }
          }
        });

      $urlRouterProvider.otherwise('/');
    }
  ]);
  
}();