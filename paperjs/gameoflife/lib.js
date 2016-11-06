/*
** rules:
** Any live cell with fewer than two live neighbours dies, as if caused by under-population.
** Any live cell with two or three live neighbours lives on to the next generation.
** Any live cell with more than three live neighbours dies, as if by over-population.
** Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
**
*/

if (worldGrid == undefined){
  var worldGrid = [];
}
var worldSize = 8;

var scale = 30;
var sizeScale = worldSize * scale;

var size = new Size(sizeScale);
var pageCenter = new Point(view.center.x, view.center.y); 

var mainFrame = new Rectangle(size);
var path2 = new Path.Rectangle(mainFrame);
path2.strokeColor = 'black';
path2.position = pageCenter;
var mainPoint = new Point(path2.bounds.topLeft);
// console.log(pageCenter);


function seedTheWorld(){
	for(j = 0; j < worldSize; j++){
		worldGrid.push(getRow(j));
	}
}

function getRandomeSeed(currenctRow, currenctCol){
	var num = Math.random() * -2 + 2;
	num = num > 1;
	var cell = {path: getPath(num, currenctRow, currenctCol), state: num};
	return cell;
}

function getRow(currenctRow){
	var row = new Array();
	for (i = 0; i < worldSize;i++){
		row.push(getRandomeSeed(currenctRow, i));
	}
	return row;
}

function getPath(state, currenctRow, currenctCol){
	var size = new Size(scale); 
	var point = new Point(mainPoint);
	point.x += currenctRow * scale;
	point.y += currenctCol * scale;
	var rect = new Rectangle(point, size);
	var path = new Path.Rectangle(rect);
	path.strokeColor = 'black';
	if (state){
		path.fillColor = 'black';
	}
	// path.bounds.topLeft = mainFrameTopLeftPoint;
	return path;
}

function circleOneTurn(){
	var i = 0;
	var j = 0;
	while(i < worldSize){
		while(j < worldSize){
			var currenctCellState = whatIsTheStateOfCell(i,j);
			if (currenctCellState < 2 || currenctCellState > 3) {
				worldGrid[i][j].state = false;		
			}

			if (worldGrid[i][j].state == false && currenctCellState == 3){
				worldGrid[i][j].state = true;
			}
		    
		    // console.log(worldGrid[i][j].path);

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
	return aliveNeighbor;
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
	console.log(worldGrid);
	console.log(whatIsTheStateOfCell(5,5));
}

function onFrame(event){
	circleOneTurn(worldGrid);

			// if (worldGrid[4][2].state){
			// 	path = new Path(worldGrid[4][2].path);
			// 	path.fillColor = 'black';
			// } else {
			// 	path = new Path(worldGrid[4][2].path);
			// 	path.fillColor = 'red';
			// }
}

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











