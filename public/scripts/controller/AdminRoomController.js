+function(){

  "use strict";

  angular.module('sockets-chat').controller('AdminRoomController', ['$scope',
    function( $scope ) {
      
      angular.element(document).ready(function () {
//        $scope.fnGetWebcamVideoAndAudio();
      });
  
      $scope.fnGetWebcamVideoAndAudio = function(){
        var video = document.querySelector('video');

        function fnErrorCallback(){
          console.log("browser don't support video api");
        }

        if (navigator.getUserMedia) {
          navigator.getUserMedia({audio: true, video: true}, function(stream) {
            video.src = stream;
          }, fnErrorCallback);
        } else if (navigator.webkitGetUserMedia) {
          navigator.webkitGetUserMedia({video: true, audio: true}, function(stream) {
            video.src = window.webkitURL.createObjectURL(stream);
          }, fnErrorCallback);
        }
      }
      
      var socket = io();

      $scope.messages = [
        {
          message: 'Brunch this weekend?',
          name: 'Min Li Chan'
        },
        {
          name: 'Min Li Chan',
          message: " I'll be in your neighborhood doing errands"
        },
        {
          message: 'Brunch this weekend?',
          name: 'Min Li Chan'
        },
        {
          name: 'Min Li Chan',
          message: " I'll be in your neighborhood doing errands"
        },
        {
          message: 'Brunch this weekend?',
          name: 'Min Li Chan'
        },
        {
          name: 'Min Li Chan',
          message: " I'll be in your neighborhood doing errands"
        },
        {
          message: 'Brunch this weekend?',
          name: 'Min Li Chan'
        },
        {
          name: 'Min Li Chan',
          message: " I'll be in your neighborhood doing errands"
        },
        {
          message: 'Brunch this weekend?',
          name: 'Min Li Chan'
        },
        {
          name: 'Min Li Chan',
          message: " I'll be in your neighborhood doing errands"
        },
        {
          message: 'Brunch this weekend?',
          name: 'Min Li Chan'
        },
        {
          name: 'Min Li Chan',
          message: " I'll be in your neighborhood doing errands"
        }
      ];
  
    }
  ]);
}();