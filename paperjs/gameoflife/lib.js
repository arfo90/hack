
var screenWidth = myCanvas.width;
var screenHeight = myCanvas.height;

var globalStyle = {
  strokeColor: 'black',
  strokeWidth: 1,
  fill: true,
  fillColor: 'black',
};

var board = new Path.Rectangle(new Point(screenWidth / 2, screenHeight - 51), new Size(100, 50));
board.style = globalStyle;

var walls = new Path({
  segments: [[0, screenHeight], [0, 0], [screenWidth, 0], [screenWidth, screenHeight]]
});

walls.strokeColor = 'red';
walls.strokeWidth = 20;

var ball = new Path.Circle(view.center, 20);
ball.style = globalStyle;
ball.strokeColor = 'blue';
ball.fillColor = 'blue';

function onMouseMove(event) {
  board.position.x = event.point.x;
  if (board.intersects(walls) ){
    //debugger;
      // var impact =  
      // console.log(impact);
  }
}

var destination = Point.random() * view.size;
function onFrame(event){
var vector = destination - ball.position;
ball.position += vector / 30;
if (vector.length < 5) {
		destination = Point.random() * view.size;
	}
}
