debugger;
var screenWidth = myCanvas.width;
var screenHeight = myCanvas.height;

var globalStyle = {
  strokeColor: 'black',
  strokeWidth: 1,
  fill: true,
  fillColor: 'black',
};

 var board = new Path.Rectangle(new Point(screenWidth/2, screenHeight-51), new Size(100, 50));
 board.style = globalStyle;

// var leftWall = new Path.Rectangle(new Point(0,0), new Size(50, screenHeight));
// leftWall.style = globalStyle;

// var rightWall = new Path.Rectangle(new Point(screenWidth-50,0), new Size(50, screenHeight));
// rightWall.style = globalStyle;

// var topWall = new Path.Rectangle(new Point(0,0), new Size(screenWidth, 50));
// topWall.style = globalStyle;

var walls = new Path({
  segments: [[0, screenHeight], [0,0], [screenWidth, 0], [screenWidth, screenHeight]]
});

walls.strokeColor = 'red';
walls.strokeWidth = 20;

function onMouseMove(event){
    board.position.x = event.point.x;
}