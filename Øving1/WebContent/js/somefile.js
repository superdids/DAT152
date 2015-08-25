window.onload = function() {
////	var get = document.createElement('div');
////	get.setAttribute('id', 'verdi');
//	document.createElement('div').setAttribute('id', 'verdi');
//	document.getElementById('verdi').style.color='red';
//	document.getElementById('verdi').style.width='50px';
//	document.getElementById('verdi').style.height='50px';
	var canvas = document.createElement('canvas');
	canvas.id     = "CursorLayer";
	canvas.width  = 2000;
	canvas.height = 2000;
//	canvas.style.zIndex   = 8;

//	canvas.style.backgroundColor = 'red';
	var ctx = canvas.getContext('2d');
//	ctx.fillStyle = 'red';
//	ctx.fillRect(0,0,50,50);
//	document.body.appendChild(canvas);

	var arr = new Array(12);
	for(var x = 0; x < 25; x++) {
		arr[x] = new Array(25);
	}

	document.body.appendChild(canvas);
	
	var xpos = 0; var ypos = 0;
	for(var x = 0; x < 12; x++) {
		for(var y = 0; y < 25; y++) {
//			
//			//notifies use of JSON object
//			arr[x][y] = {};
//			//applies xx attribute with corresponding value in the JSON object
//			arr[x][y]['xx'] = xpos;
//			//applies yy attribute with corresponding value in the JSON object
//			arr[x][y]['yy'] = ypos;
//			arr[x][y]['func'] = (function(a) { 
//				ctx.fillStyle = getRandomColor();
//				ctx.fillRect(a.xx, a.yy, 50, 50);
//				console.log(123);
//			})(arr[x][y]);
//			window.setInterval(arr[x][y]['func'], rand());

//			window.setInterval(function() {
//				ctx.fillStyle = getRandomColor();
//				ctx.fillRect(xpos, ypos, 50,50);
//			}, rand());

			interval(xpos,ypos,ctx);
			xpos += 50;
		}
		xpos = 0;
		ypos += 50;
	}
	ypos = 0;
}

function interval(a,b,ct) {
	window.setInterval(function() {
		ct.fillStyle = getRandomColor();
		ct.fillRect(a,b,50,50);
	}, rand());
}

function rand() {
	return Math.floor(50 + (Math.random()*2000));
}

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}