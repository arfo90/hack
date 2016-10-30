  console.log('amirs addition');
  // very first path
  // var path1 = new Path.Circle({
  //     center: view.center,
  //     radius: 30,
  //     strokeColor: 'black'
  // });

console.log("masouds addition");
// Create a Paper.js Path to draw a line into it:
	// var path = new Path();
	// // Give the stroke a color
	// path.strokeColor = 'black';
	// var start = new Point(100, 100);
	// // Move to start and draw a line from there
	// path.moveTo(start);
	// // Note the plus operator on Point objects.
	// // PaperScript does that for us, and much more!
	// path.lineTo(start + [ 100, -50 ]);

var path = new Path();
path.strokeColor = 'black';
path.add(new Point(30, 75)); 
path.add(new Point(30, 25)); 
path.add(new Point(80, 25));
path.add(new Point(80, 75));
path.closed = true;

// Select the path, so we can see its handles:
path.fullySelected = true;

// Create a copy of the path and move it 100pt to the right:
var copy = path.clone();
copy.fullySelected = true;
copy.position.x += 100;

// Smooth the segments of the copy:
copy.smooth();