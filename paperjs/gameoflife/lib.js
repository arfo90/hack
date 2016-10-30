var worldGrid = [];
var worldSize = 9;

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

seedTheWorld();
console.log(worldGrid);

function ruleTheWorld(x, y){
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
ruleTheWorld(4,4);

function onFrame(event){


}


console.log('here we go');
// very first pathe
var path = new Path.Circle({
    center: view.center,
    radius: 30,
    strokeColor: 'black'
});











