/*
** rules:
** Any live cell with fewer than two live neighbours dies, as if caused by under-population.
** Any live cell with two or three live neighbours lives on to the next generation.
** Any live cell with more than three live neighbours dies, as if by over-population.
** Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
**
*/

var worldGrid = [];
var worldSize = 9;
var slSize = new Size();
slSize.width = 10;
slSize.height = 10;

var sizeScale = worldSize * 30;

var size = new Size(sizeScale);
var pageCenter = new Point(view.center.x, view.center.y); 

var rect = new Rectangle(size);
var path2 = new Path.Rectangle(rect);
path2.strokeColor = 'black';
path2.position = pageCenter;
// console.log(pageCenter);


function seedTheWorld(){
	for(j = 0; j < worldSize; j++){
		console.log('heeers');
		worldGrid.push(getRow());
	}
}

function getRandomeSeed(){
	var num = Math.random() * -2 + 2;
	var cell = {path: new Path(), state: num > 1};
	return cell;
}

function getRow(){
	var row = new Array();
	for (i = 0; i < worldSize;i++){
		row.push(getRandomeSeed());
	}
	return row;
}

function circleOneTurn(world){
	var i = 0;
	var j = 0;
	while(i < worldSize){
		while(j < worldSize){
			var cell = world[i][j];
			var currenctCellState = whatIsTheStateOfCell(i,j);
			if (currenctCellState < 2 || currenctCellState > 3) {
				cell.state = false;		
			}

			if (cell.state == false && currenctCellState == 3){
				cell.state = true;
			}

			j++;
		}
		j = 0;
		i++;
	}	
}



seedTheWorld();

function whatIsTheStateOfCell(x, y){
	aliveNeighbor = 0;
	currentNeighborX = setRow(x);
	currentNeighborY = setRow(y);
	maxX = setMax(x);
	maxY = setMax(y);
	// Bascially check all srounding!
	for (ix = 0; ix < maxX; ix++){
		if (currentNeighborX < worldSize){
			for (iy = 0; iy < maxY; iy++){
				var cell = worldGrid[currentNeighborX][currentNeighborY];
				if (cell != undefined && cell.state){
					aliveNeighbor++;
				}
				currentNeighborY++;
			}
			currentNeighborY = setRow(y);
			currentNeighborX++;
	 }
    }
    var cell = worldGrid[x][y];
	if (cell.state){
		// Shoudn't count itself
		aliveNeighbor--;
	}
	console.log(aliveNeighbor);
 }

function setRow(val){
	if (val == 0){
		val = 0;
	} else {
		val = val - 1;
	}
	return val;
}

function setMax(val){
	if (val == 0 || val >= worldSize){
		val = 2;
	} else {
		val = 3;
	}
	return val;
}

whatIsTheStateOfCell(4,4);


function onMouseDown(event){
	//on mouse down
}

function onFrame(event){
	circleOneTurn(worldGrid);
}

circleOneTurn(worldGrid);

// console.log('here we go');
// // very first pathe
// var path = new Path.Circle({
//     center: view.center,
//     radius: 30,
//     strokeColor: 'black'
// });


// var rect = new Rectangle(10, 20, 200, 100);
// var path2 = new Path.Rectangle(rect);
// path2.strokeColor = 'black';




// var path = new Path.Rectangle(rect);



// var paper = new PaperScope;
console.log(worldGrid);











