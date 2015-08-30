"use strict";

var symbols = generateSymbols();
var rows = 15;
var cols = 75;
var counter = generateCounters();

window.onload = function() {
	var elm = document.getElementById('digital');
	elm.rows = rows;
	elm.cols = cols;

	window.setInterval(function() {
		elm.value = "";
		for(var x = 0; x < rand(10); x++) {
			elm.value += symbols[rand(symbols.length)];
		}
	}, 100);
	
}


function rand(arg) {
	return Math.floor(Math.random() * arg);
}




function generateSymbols() {
	var symb = new Array();
	var index = 0;
	for(; index < 10; index++) {
		symb[index] = index;
	}
	
	symb[index] = "@"; index++;
	symb[index] = "#"; index++;
	symb[index] = "$"; index++;
	symb[index] = "{"; index++;
	symb[index] = "}"; index++;
	symb[index] = "["; index++;
	symb[index] = "]"; index++;
	symb[index] = "="; index++;
	
	return symb;
}

function generateCounters() {
	var arr = new Array();
	for(var x = 0; x < cols; x++) {
		arr[x] = new Array();
		for(var y = 0; y < rows; y++) {
			arr[x][y] = 8;
		}
	}
}