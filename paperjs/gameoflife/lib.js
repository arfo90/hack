debugger;
var screenWidth = myCanvas.width;
var screenHeight = myCanvas.height;
var board = new Path.Rectangle(new Point(screenWidth/2, screenHeight-51), new Size(100, 50));
board.strokeColor = 'black';
board.strokeWidth = 1;
board.fill = true;
board.fillColor = 'black';

function onMouseMove(event){
    board.position.x += event.delta.x;
}