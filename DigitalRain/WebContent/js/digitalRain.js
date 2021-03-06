"use strict";

var canvas, ctx, fontSize, cols;
//var symbols = generateSymbols();
//var symbols = "あかさたないきしちにうくすつぬえけせてねおこそとのはまやらわひみりをふむゆるんへめれ".split("");
var symbols = "可な およびそのマクセシビリティビリティセシビリへの切りえロジのため".split("");

var drops = [];
var toDim = [];
var len = 20;

function draw()
{
	for(var x = 0; x < drops.length; x++) {
		if(rand(200) > 198 || drops[x] > 0) {
			toDim[x][drops[x]]  = symbols[rand(symbols.length)];

			if(drops[x] - len >= 0) {
				ctx.fillStyle = "black";
				ctx.clearRect(x*fontSize, (drops[x]	-len)*fontSize, fontSize, fontSize);
			} 
			
			ctx.fillStyle = "#01DF3A";
			for(var y = 1; y < len; y++) {
				ctx.fillText(toDim[x][drops[x]-y], x*fontSize, (drops[x]-y)*fontSize);
			}
			
			ctx.fillStyle = "#071907";
			for(var y = len; y < drops[x]; y++) {
				ctx.fillText(toDim[x][drops[x]-y], x*fontSize, (drops[x]-y)*fontSize);
			}
			
			ctx.fillStyle = "#FFFFFF";
			ctx.fillText(toDim[x][drops[x]] , x*fontSize, drops[x]*fontSize);
			
			if(drops[x]*fontSize > canvas.height && rand(1000) > 975) {
//				bools[x] = true;
				drops[x] = 0;
			}
		
			drops[x]++;
		}
	}
}

//window.onresize = function() {
//canvas = document.getElementById('c');
//canvas.width = screen.width;
//canvas.height= screen.height;
//ctx = canvas.getContext("2d");
//fontSize = 20;
//cols = canvas.width/fontSize;
//}

window.onload = function() {
	canvas = document.getElementById('c');
	canvas.width = screen.width;
	canvas.height= screen.height;

	ctx = canvas.getContext("2d"); 
	fontSize = 30;
	cols = canvas.width/fontSize;
	for(var x = 0; x < cols; x++) {
//		bools[x] = false;
		drops[x] = 0; 
		toDim[x] = new Array();
//		count[x] = 0;
	}
	ctx.font = fontSize + "px arial";
	window.setInterval(draw, 75);
}





function rand(arg) {
	return Math.floor(Math.random() * arg);
}

function generateSymbols() {
	var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "@", "#", "$", "%", "&", "{", "}", "[", "]", "="];
	return arr;
}