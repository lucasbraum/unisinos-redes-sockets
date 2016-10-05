+function () {

  "use strict";

  angular.module('sockets-chat').controller('ViewerRoomController', ['$scope', '$timeout', '$stateParams', 'SocketService', 'UtilsService',
    function ($scope, $timeout, $stateParams, SocketService, UtilsService) {

      $scope.message = "";
      $scope.username = $stateParams.user;
      $scope.messages = [];

      $scope.userColor = UtilsService.getRandomColor();

      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

      if ($stateParams.isAdmin) {
        if (navigator.getUserMedia) {
          navigator.getUserMedia({ video: true, audio: true }, function (stream) {
            $("#videoPlayer").attr("src", URL.createObjectURL(stream));

            var recorder = new MediaStreamRecorder(stream);

            recorder.ondataavailable = function (blob) {
              SocketService.broadcast({
                room: $stateParams.name,
                data: blob
              });
            }

            recorder.start(1000);
          }, function (err) {
            console.error(err);
          });
        }
      } else {
        SocketService.registerCallbackToVideoInput(function (oData) {
          var videoPlayer = document.getElementById("videoPlayer");

          videoPlayer.src = URL.createObjectURL(new Blob([new Uint8Array(oData).buffer], { type: "video/webm" }));
        });
      }

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