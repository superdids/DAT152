"use strict";

/**
 * Konstruktørfunksjon som henter statistikk om brukeren.
 * 
 * OPR og Edge utelates da navigator.userAgent for disse 
 * nettleserene vil returnere en streng der både Chrome 
 * og Safari forekommer først. 
 */
function BrowserStatistics() {
	this._data = {};
	this._nettlesere = ["Firefox", "Internet Explorer",
	                    "Safari", "Chrome", "Camino", "Konqueror",
	                    "Arora", "Midori"];

}

/**
 * Data som skal sendes vha ajax.
 * @returns {___anonymous2089_2098}
 */
BrowserStatistics.prototype.getData = function() {
	return this._data;
}

/**
 * Sjekker om navigator sin egenskap userAgent inneholder
 * parameteren sendt via funksjonen.
 * @param agent Parameteren som søkes etter
 * @returns -1 om parameteren ikke eksisterer, > -1 ellers.
 */
BrowserStatistics.prototype.getAgent = function(agent) {
	return navigator.userAgent.toLowerCase().indexOf(agent.toLowerCase());
}

/**
 * Prototypefunksjon som finner nettleseren som benyttes
 * av brukeren, for å så sette dette inn i egenskapen _data.nettleser
 * 
 * Avhengig av nettlesertype, varierer det hvor i navigator.userAgent
 * returstrengen den befinner seg.
 */
BrowserStatistics.prototype.setNettleser = function() {
	var tmp = -1;
	var y = -1; 
	var receiverIndex = -1;
	for(var x in this._nettlesere) {
		tmp = this.getAgent(this._nettlesere[x]);
		if(tmp > -1) {
			if(receiverIndex < 0 || receiverIndex > tmp) { 
				receiverIndex = tmp;
				y = x;
			}
		}
	}
	if(y == -1) {
		alert("not found");
		this._data.nettleser = "";
	}
	else {
		//Siden Opera og Edge forekommer sist i returstrengen,
		//foretas de separate sjekker for disse.
		if(this.getAgent("OPR") > -1) {
			this._data.nettleser = "OPR";
			return;
		}
		else if(this.getAgent("Edge") > -1) {
			this._data.nettleser = "Edge";
			return;
		}
		this._data.nettleser = this._nettlesere[y];
	}
}

/**
 * Prototypefunksjon som henter nettleserens versjon (gitt at
 * setNettleser er foretatt først). Versjonen ligger etter 
 * nettlesertypen, separert med '/'. På denne måten kan vi 
 * benytte String sin prototypefunksjon split.
 */
BrowserStatistics.prototype.setVersion = function() {
	if(this._data.nettleser && this._data.nettleser != "") {
		var version = navigator.userAgent;
		var splitDelimiter = this._data.nettleser + "/";
		version = version.split(splitDelimiter);
		version = version[1].split(" ")[0];
		if(version) this._data.version = version;
		else this._data.version = "";
	}
}

/**
 * Henter resten av påkrevde data fra oppgaven.
 */
BrowserStatistics.prototype.setRest = function() {
	this._data.operativsystem = navigator.platform;
	this._data.vidde = screen.width;
	this._data.hoyde = screen.height;
	this._data.pxdybde = screen.pixelDepth;
	this._data.nettleserVidde = window.outerWidth;
	this._data.nettleserHoyde = window.outerHeight;
	this._data.xPos = window.screenX;
	this._data.yPos = window.screenY;	
}
