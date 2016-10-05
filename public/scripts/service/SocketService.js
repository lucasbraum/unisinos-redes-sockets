+function () {

  "use strict";

  angular.module('sockets-chat').factory('SocketService', ['$timeout',
    function ($timeout) {

      var socket = io();
      var SocketService = {};


      SocketService.joinRoom = function (sRoomName, fnCallback) {
        socket.emit('join-room', sRoomName);

        if (fnCallback) {
          fnCallback();
        }
      };

      SocketService.sendMessage = function (oMsg) {
        socket.emit('send-message', oMsg);
      };

      SocketService.registerCallbackToNewMessages = function (fnCallback) {
        socket.on('new-message', fnCallback);
      };

      SocketService.broadcast = function(oMessage) {
        socket.emit('video-broadcast', oMessage);
      };

      SocketService.registerCallbackToVideoInput = function (fnCallback) {
        socket.on('video-input', fnCallback);
      };

      return SocketService;
    }
  ]);
} ();