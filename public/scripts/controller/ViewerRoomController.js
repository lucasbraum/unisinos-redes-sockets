+function(){

  "use strict";

  angular.module('sockets-chat').controller('ViewerRoomController', ['$scope', '$timeout', '$stateParams', 'SocketService', 'UtilsService',
    function( $scope, $timeout, $stateParams, SocketService, UtilsService ) {
      
      $scope.message = "";
      $scope.username = $stateParams.user;
      $scope.messages = [];
      
      $scope.userColor = UtilsService.getRandomColor();
      
      SocketService.registerCallbackToNewMessages(function(oMsg){
        $scope.messages.push(oMsg);
        $scope.$apply();
      });
      
      $scope.sendMessage = function(){
        if (!$scope.message){
          return;
        }
        
        var oMsg = {
          room : $stateParams.name,
          content : $scope.message,
          name : $scope.username,
          userColor : $scope.userColor,
          time : new Date()
        };
        
        SocketService.sendMessage(oMsg);
        $scope.message = "";
      };
      
      $scope.joinRoom = function(username){
        if (!username){
          return;
        }
        
        SocketService.joinRoom($stateParams.name);
        $scope.username = username;
      };
  
    }
  ]);
}();