+function(){

  "use strict";

  angular.module('sockets-chat').controller('ViewerRoomController', ['$scope', '$timeout', '$stateParams', 'SocketService',
    function( $scope, $timeout, $stateParams, SocketService ) {
      
      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      
      $scope.message = "";
      $scope.username = "";
      $scope.messages = [];
      
      $scope.userColor = getRandomColor();
      
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