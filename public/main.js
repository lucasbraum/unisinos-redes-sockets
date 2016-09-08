+function(){

  function fnGetWebcamVideoAndAudio(){
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

  fnGetWebcamVideoAndAudio();
  
}();