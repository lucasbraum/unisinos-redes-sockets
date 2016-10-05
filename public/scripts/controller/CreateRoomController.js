+function () {

  "use strict";

  angular.module('sockets-chat').controller('CreateRoomController', ['$scope', '$state', '$stateParams', 'SocketService',
    function ($scope, $state, $stateParams, SocketService) {

      $scope.joinRoom = function () {
        if (!$scope.adminName || !$scope.roomName) {
          return;
        }

        SocketService.joinRoom($scope.roomName, function () {
          $state.go("room", { isAdmin: true, user: $scope.adminName, name: $scope.roomName });
        });
      };

    }
  ]);
} ();