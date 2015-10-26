"use strict";

(function() {
	var lastet = function() {
		document.getElementById("knapp").onclick = function() {

			var stats = new BrowserStatistics();
			stats.setNettleser();
			stats.setVersion();
			stats.setRest();
			
			var ajax = new AJAXConnection("Statistics");
			var p = document.getElementById("res");
			ajax.onsuccess = function(resp) {
				p.style.color = "green";
				p.innerHTML = "Success!";
			}
			ajax.onerror = function(error) {
				p.style.color = "red";
				p.innerHTML = "Failure!";
			}
			ajax.post([], stats.getData());
		}
	}
	
	window.addEventListener("DOMContentLoaded", lastet);
})();











