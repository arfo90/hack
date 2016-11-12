var screenWidth = myCanvas.width - 20;
var screenHeight = myCanvas.height - 20;
var maxPoint = new Point(screenHeight, screenWidth);

var globalStyle = {
  strokeColor: 'black',
  strokeWidth: 1,
  fill: true,
  fillColor: 'black',
};

var board = new Path.Rectangle(new Point(screenWidth / 2, screenHeight - 51), new Size(100, 50));
board.style = globalStyle;

var walls = new Path({
  segments: [[20, screenHeight], [20, 20], [screenWidth, 20], [screenWidth, screenHeight]]
});

walls.strokeColor = 'red';
walls.strokeWidth = 20;

var ball = new Path.Circle(view.center, 25);
ball.style = globalStyle;
ball.strokeColor = 'blue';
ball.fillColor = 'blue';

function onMouseMove(event) {
  board.position.x = event.point.x;
  if (board.intersects(walls)) {
    //debugger;
    // var impact =  
    // console.log(impact);
    console.log("board hit walls");
  }
}

var ballDestination;
var initialPos = ball.position;
var pathToGo;
var moveUnit;
BallHitWall(new Point(0,0), view.center);

function onFrame(event) {
  //debugger;
  ball.position += moveUnit;

  if (ball.intersects(walls) || ball.intersects(board)) {
    console.log("length :" + pathToGo.length + " angle :" + pathToGo.angle);
    BallHitWall(initialPos, ball.position);
  }
}

function BallHitWall(initialPos, currentPos){
  //debugger;
    ballDestination = GetNewBallDestination(initialPos, ball.position);
    pathToGo = ballDestination - ball.position;
    moveUnit = pathToGo.normalize(10);
    initialPos = ball.position;
}

function GetNewBallDestination(initialPos, currentPos) {
  //debugger;
  var movedVector = currentPos - initialPos;
  var newAngle;
  if (movedVector.angle > 0) {
    if (movedVector.angle > 90) {
      newAngle = -90
    } else {
      newAngle = 90
    }
  } else {
    if (movedVector.angle > -90) {
      newAngle = 90
    } else {
      newAngle = -90
    }
  }
   
  return new Point({
    angle: movedVector.angle + newAngle,
    length: 1000
  });
}


