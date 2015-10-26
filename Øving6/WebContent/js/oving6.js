"use strict";

(function() {
	var load = function() {
		var btn = document.getElementById("knapp");
		btn.onclick = lastModifiedd;
	}
	
	window.addEventListener("DOMContentLoaded", load);
})();

function lastModifiedd() {
	var lm = document.lastModified;
	alert(lm);
}