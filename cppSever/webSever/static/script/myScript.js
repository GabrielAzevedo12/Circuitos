/*
window.onload = function() {
	paper.setup('myCanvas');
    with (paper) {
		var path = new Path();
		path.strokeColor = 'pink';
		var start = new Point(100, 100);
		path.moveTo(start);
		path.lineTo(start.add([ 200, -50 ]));
        view.draw();
        // Create a circle shaped path with its center at the center
        // of the view and a radius of 30:
        //------------------------------------------------------------    
var path = new Path.Circle({
	center: view.center,
	radius: 30,
	strokeColor: 'pink'
});

function onResize(event) {
	// Whenever the window is resized, recenter the path:
	path.position = view.center;
}
	}
}
    */
