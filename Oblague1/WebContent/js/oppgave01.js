"use strict";
/**
 * Konstruktørfunksjonen Controller blir startet opp når DOMStrukturen
 * i HTML-dokumentet er ferdig lastet.
 */
(function() {
	function lastet() {
		var mainController = new Controller(window);
		mainController.start();
	}

	window.addEventListener("DOMContentLoaded", lastet);
})();

