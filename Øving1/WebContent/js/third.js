window.onload = function() {
	var canvas = document.createElement('canvas');
	canvas.id = "ide";
	canvas.width  = 2000;
	canvas.height = 2000;
	var ctx = canvas.getContext('2d');

	document.body.appendChild(canvas);
//	var c = new Pos(0,0); //c for current
//	var p = new Pos(2,2); //p for previous
	//starting off with diamond... from 0 to 5.

	var state = 1;
	
	var x=0,y=0,xx=0, yy=0;
	var high = 10, low = 0;
	//init draw
	ctx.fillStyle = getRandomColor();
	ctx.fillRect(0,0,50,50);
	window.setInterval(function() {
//		xx= (x* 50)+250; yy = y * 50;
//		ctx.clearRect(xx, yy, 50, 50);
		if(state == 1) { ++x; }
		else if(state == 2) { ++y; }
		else if(state == 3) { --x; }
		else { --y; }

		if((x == high && y == low) 
				|| (x == high && y == high) 
				|| (x == low && y == high ) 
				|| (x == low && y == low)) {
			state = (state + 1) % 4;
			if(state == 1) {
				high--;
				low++;
				x = y = low;
				if(low == high) {
					ctx.clearRect(0,0,2000,2000);
					high = 10; 
					low = x = y = 0;
				}
			}
		} 
//		console.log(3);
		ctx.fillStyle = getRandomColor();
//		xx = x*50; yy = y*50;
		ctx.fillRect(x*50, y*50,50,50);
	}, 15);

	//	ctx.fillStyle = getRandomColor();
	//	ctx.fillRect(0,0,50,50);


}

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}