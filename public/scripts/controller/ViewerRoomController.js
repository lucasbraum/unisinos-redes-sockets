+function () {

  "use strict";

  angular.module('sockets-chat').controller('ViewerRoomController', ['$scope', '$timeout', '$stateParams', 'SocketService', 'UtilsService',
    function ($scope, $timeout, $stateParams, SocketService, UtilsService) {

      $scope.message = "";
      $scope.username = $stateParams.user;
      $scope.messages = [];

      $scope.userColor = UtilsService.getRandomColor();

      SocketService.registerCallbackToNewMessages(function (oMsg) {
        $scope.messages.push(oMsg);
        $scope.$apply();
      });

      $scope.sendMessage = function (sContent) {
        if (!$scope.message && !sContent) {
          return;
        }

        var oMsg = {
          room: $stateParams.name,
          content: sContent || $scope.message,
          name: $scope.username,
          userColor: $scope.userColor,
          time: new Date()
        };

        SocketService.sendMessage(oMsg);
        $scope.message = "";
      };

      $scope.joinRoom = function (username) {
        if (!username) {
          return;
        }

        $scope.username = username;
        SocketService.joinRoom($stateParams.name);
        $scope.sendMessage("Joined the room.")
      };

    }
  ]);
} ();