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



function seedTheWorld(){
	for(j = 0; j < worldSize; j++){
		console.log('heeers');
		worldGrid.push(getRow());
	}
}

function getRandomeSeed(){
	var num = Math.random() * -2 + 2;
	return num > 1;
}

function getRow(){
	var row = new Array();
	for (i = 0; i < worldSize;i++){
		row.push(getRandomeSeed());
	}
	return row;
}

function circleOneTurn(state){
	var i = 0;
	var j = 0;
	while(i < worldSize){
		while(j < worldSize){
			var currenctCellState = whatIsTheStateOfCell(i,j);
			if (currenctCellState < 2 || currenctCellState > 3) {
				worldSize[i][j] = false;		
			}

			if (currenctCellState == 3 && worldSize[i][j] == false){
				worldSize[i][j] = true;
			}

			j++;
		}
		j = 0;
		i++;
	}	
}

seedTheWorld();
console.log(worldGrid);

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
				if (worldGrid[currentNeighborX][currentNeighborY]){
					aliveNeighbor++;
				}
				currentNeighborY++;
			}
			currentNeighborY = setRow(y);
			currentNeighborX++;
	 }
    }
	if (worldGrid[x][y]){
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

console.log(worldGrid[1][1]);
whatIsTheStateOfCell(4,4);


function onMouseDown(event){
	//on mouse down
}

var a = 0;
function onFrame(event){
	circleOneTurn(worldGrid);
}



console.log('here we go');
// very first pathe
var path = new Path.Circle({
    center: view.center,
    radius: 30,
    strokeColor: 'black'
});


var rect = new Rectangle(10, 20, 200, 100);
var path2 = new Path.Rectangle(rect);
path2.strokeColor = 'black';




// var path = new Path.Rectangle(rect);



// var paper = new PaperScope;
// console.log(paper);











