+function(){

  "use strict";

  angular.module("sockets-chat", [
    'ui.router', 'ngAvatar'
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
        .state('room', {
          url: "/:name",
          views: {
            '' : {
              templateUrl : '/views/viewerRoom.html',
              controller : 'ViewerRoomController'
            }
          },
          params: {
            isAdmin : false,
            user : ""
          }
        });

      $urlRouterProvider.otherwise('/');
    }
  ]);
  
}();