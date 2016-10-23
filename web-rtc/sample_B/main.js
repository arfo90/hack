var video = document.querySelector('video');
canvas = document.querySelector('canvas')
var btn = document.getElementById("capture");
streaming = false;

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
    p = navigator.mediaDevices.getUserMedia({video: true, audio:false});

    p.then(function(stream){
        video.src = window.URL.createObjectURL(stream);
        streaming = true;
    });

    p.catch(function(e){
       console.log(e);     
    });
} else {
    alert("Sorry, your browser does not support getUserMedia.");
}


btn.addEventListener('click', function(e){
    if(streaming){
      canvas.width = video.clientWidth;
      canvas.height = video.clientHeight;
      var context = canvas.getContext('2d');
      context.drawImage(video, 0, 0);
    }
})