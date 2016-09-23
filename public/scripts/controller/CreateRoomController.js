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
        SocketService.joinRoom($scope.roomName, function(){
          $state.go("adminRoom", { name : $scope.roomName });
        })
      };
  
    }
  ]);
}();