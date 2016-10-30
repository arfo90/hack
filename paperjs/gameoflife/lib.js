var worldGrid = [];
var worldSize = 60;

function seedTheWorld(){
	for(j = 0; j < worldSize -1; j++){
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
	for (i = 0; i < worldSize-1;i++){
		row.push(getRandomeSeed());
	}
	return row;
}

seedTheWorld();
console.log(worldGrid);

function ruleTheWorld(x, y){
	var aliveNeighbor = 0;
	for (ix = 0; ix < 3; ix++){
		
	}
}

function onFrame(event){


}


console.log('here we go');
// very first pathe
var path = new Path.Circle({
    center: view.center,
    radius: 30,
    strokeColor: 'black'
});











