+function(){

  "use strict";

  angular.module("sockets-chat", [
    'ui.router', 'ngMaterial'
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
        });

      $urlRouterProvider.otherwise('/');
    }
  ]);

  angular.module("sockets-chat").directive('afterRender', ['$timeout', function ($timeout) {
    var def = {
      restrict: 'A',
      terminal: true,
      transclude: false,
      link: function (scope, element, attrs) {
        $timeout(scope.$eval(attrs.afterRender), 0);  //Calling a scoped method
      }
    };
    return def;
  }]);
  
}();