+function(){

  "use strict";

  angular.module('sockets-chat').factory('SocketService', ['$timeout',
	function( $timeout ){

        var socket = io();
		var SocketService = {};
      
      
        SocketService.joinRoom = function(sRoomName){
          socket.emit('join-room', sRoomName);
        };
      
        SocketService.sendMessage = function(oMsg){
          socket.emit('send-message', oMsg);
        };
      
        SocketService.registerCallbackToNewMessages = function(fnCallback){
          socket.on('new-message', fnCallback);
        };
      
        

		return SocketService;
	}
]);
}();