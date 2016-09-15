+function(){

  "use strict";

  angular.module('sockets-chat').controller('CreateRoomController', ['$scope', '$state', 'SocketService',
    function( $scope, $state, SocketService ) {
  
      $scope.roomName = "";
      $scope.adminName = "";
      
      $scope.createRoom = function(){
        if (!$scope.roomName && !$scope.adminName) {
          return;
        }
        SocketService.createRoom($scope.roomName, $scope.adminName, function(){
          $state.go("adminRoom", { name : $scope.roomName });
        })
      };
  
    }
  ]);
}();