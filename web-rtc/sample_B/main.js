function hasUserMedia(){
    return !! (navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.meGetUserMedia)
}

if (hasUserMedia()){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.meGetUserMedia;
    p = navigator.mediaDevices.getUserMedia({video: true, audio:false});

    p.then(function(stream){
        var video = document.querySelector('video');
        video.src = window.URL.createObjectURL(stream);
    });

    p.catch(function(e){
       console.log(e);     
    });
} else {
    alert("Sorry, your browser does not support getUserMedia.");
}