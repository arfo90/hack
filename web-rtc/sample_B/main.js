/*
** WebRTC example and refrence
**
*/

streaming = false;
currentFilter = 0;
canvas = document.querySelector('canvas')
var video = document.querySelector('video');
var btn = document.getElementById("capture");



function hasUserMedia(){
    return !! (navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.meGetUserMedia)
}

// Get Available device
MediaStreamTrack.getSources(function(sources){
    for (var i = 0; i < sources.lenght; i++){
        var source = sources[i];
        console.log(source.kind);
    }
});


if (hasUserMedia()){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.meGetUserMedia;
    // get the permission from browser
    p = navigator.mediaDevices.getUserMedia({video: true, audio:false});

    // Stream the data when permission guranted
    p.then(function(stream){
        video.src = window.URL.createObjectURL(stream);
        streaming = true;
    });

    // In Case permission declined
    p.catch(function(e){
       console.log(e);     
    });
} else {
    alert("Sorry, your browser does not support getUserMedia.");
}

// Register the event on button to take the pic (project stream data to canvas)
btn.addEventListener('click', function(e){
    if(streaming){
      var filters = ['', 'grayscale', 'sepia', 'invert']
      
      canvas.width = video.clientWidth;
      canvas.height = video.clientHeight;
      var context = canvas.getContext('2d');
      context.drawImage(video, 0, 0);

      currentFilter++;
      if(currentFilter > filters.length - 1) currentFilter = 0;
      canvas.className = filters[currentFilter];
    }
})