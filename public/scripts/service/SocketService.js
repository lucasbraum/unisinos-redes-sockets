+function(){

  "use strict";

  angular.module('sockets-chat').factory('SocketService', ['$timeout',
	function( $timeout ){

        var socket = io();
		var SocketService = {};
      
        SocketService.createRoom = function(sRoomName, sAdminName, fnCallback){
          socket.emit('create-room', { room : sRoomName, admin : sAdminName });
          fnCallback();
        };

		return SocketService;
	}
]);
}();