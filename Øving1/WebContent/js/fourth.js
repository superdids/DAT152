window.onload = function() {
	var canvas = document.createElement('canvas');
	canvas.id = "ide";
	canvas.width  = 2000;
	canvas.height = 2000;
	var ctx = canvas.getContext('2d');
	var ctxx = canvas.getContext('2d');

	document.body.appendChild(canvas);



	var inwards = false;
	//init draw
//	ctx.fillStyle = getRandomColor();
//	ctx.fillRect(250,250,25,25);
	var step = 1;
	window.setInterval(function() {

		step += inwards ? -1 : 1;
		if(step == 10) {
			inwards = true;
		} else if(step == 0){
			inwards = false;
		}

		//1,1
		//-1,1
		//1,-1
		//-1,-1
		
		if(!inwards) {
			ctx.fillStyle = getRandomColor();
			ctx.fillRect((step*25)+250,(step*25)+250,25,25);
			
			ctx.fillStyle = getRandomColor();
			ctx.fillRect(-(step*25)+250,(step*25)+250,25,25);
			
			ctx.fillStyle = getRandomColor();
			ctx.fillRect((step*25)+250,-(step*25)+250,25,25);
			
			ctx.fillStyle = getRandomColor();
			ctx.fillRect(-(step*25)+250,-(step*25)+250,25,25);
		} else {
			ctx.clearRect((step*25)+250,(step*25)+250,25,25);
			ctx.clearRect(-(step*25)+250,(step*25)+250,25,25);
			ctx.clearRect((step*25)+250,-(step*25)+250,25,25);
			ctx.clearRect(-(step*25)+250,-(step*25)+250,25,25);
		}
	}, 25);

//		ctx.fillStyle = getRandomColor();
//		ctx.fillRect(0,0,50,50);
//		
//		ctx.fillRect(50,75,50,50);


}





function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}