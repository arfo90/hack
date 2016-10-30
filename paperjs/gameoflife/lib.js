var worldGrid = [];
var worldSize = 3;

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
	var aliveNeighbor = 0;
	var currentNeighborX = setRow(x);
	var currentNeighborY = setRow(y);

	for (ix = 0; ix < 3; ix++){
		console.log('this is x ..'+ currentNeighborX + '  this is y ..'+ currentNeighborY);
		if (currentNeighborX = worldSize){
			console.log(aliveNeighbor);
			return;
		}
		for (iy = 0; iy < 3; iy++){
			if (worldGrid[currentNeighborX][currentNeighborY]){
				aliveNeighbor++;
			}
			currentNeighborY++;
		}
		currentNeighborX++;
		currentNeighborY = setRow(y);
	}
	if (worldGrid[x][y]){
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

console.log(worldGrid[1][1]);
ruleTheWorld(1,2);

function onFrame(event){


}


console.log('here we go');
// very first pathe
var path = new Path.Circle({
    center: view.center,
    radius: 30,
    strokeColor: 'black'
});











