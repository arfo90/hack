var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '',
 { preload: preload, create: create});

var canvas;


function preload () {

    game.load.image('logo', 'phaser.png');

}

var canvasGrid;

var canvasZoom =15;
var spriteWidth = 10;
var spriteHeight = 10;

function create () {

  game.stage.backgroundColor = "#4488AA";

  canvasGrid = game.create.grid('canvasGrid',  36 * 5, 36, 12, 12, 'rgba(255,255,255,0.5)')
  game.add.sprite(game.world.centerX, game.world.centerY, 'canvasGrid')
    // rects = createGrid();
  console.log(canvasGrid);

  game.create.grid('drawingGrid', 16 * canvasZoom, 16 * canvasZoom, canvasZoom, canvasZoom, 'rgba(0,191,243,0.8)');

  canvas = game.make.bitmapData(spriteWidth * canvasZoom, spriteHeight * canvasZoom);
  canvasBG = game.make.bitmapData(canvas.width + 2, canvas.height + 2);

  canvasBG.rect(0, 0, canvasBG.width, canvasBG.height, '#fff');
  canvasBG.rect(1, 1, canvasBG.width - 2, canvasBG.height - 2, '#3f5c67');

  var x = 10;
  var y = 64;

  canvasBG.addToWorld(x, y);
  canvasSprite = canvas.addToWorld(x + 1, y + 1);
  canvasGrid = game.add.sprite(x + 1, y + 1, 'drawingGrid');
  canvasGrid.crop(new Phaser.Rectangle(0, 0, spriteWidth * canvasZoom, spriteHeight * canvasZoom));
}

function createGrid(){
  var rects = new Phaser.Rectangle(game.world.centerX, game.world.centerY, 100, 100);
  return rects;
}

function render () {

    game.debug.geom(rects,'#0fffff');

}
