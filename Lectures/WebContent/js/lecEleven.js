"use strict";

function rand() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


(function() {
	var init = function() {
		window.setInterval(function() {
			var h = document.getElementsByTagName("h1")[0];
			h.style.color = rand();
		}, 10);
	}
	
	
	window.addEventListener("DOMContentLoaded", init);
})();


(function() {
	var arr = new Array(1);
	arr[0] = 2;
	var obj = {
		"arr": arr
	};
	
	alert(JSON.stringify(obj));
})();