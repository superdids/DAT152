"use strict";

function AJAXConnection(url){
	this._url = url || null;
	this.onsuccess = function() {console.log("Suksess")};
	this.onerror = function() {window.alert("fail");};
}

AJAXConnection.prototype.get = function(logId) {
	var httprequest = new XMLHttpRequest();

	var url = this._url + "/" + logId;

	httprequest.open("GET", url, true);

	var thisObj = this;

	httprequest.onreadystatechange = function() {
		thisObj._dataReceived(httprequest);
	};

	httprequest.send(null);

}


AJAXConnection.prototype._dataReceived = function(httprequest) {
	try {
		if (httprequest.readyState == 4) { // Et dokument er ferdig lastet
			if (httprequest.status == 200) { // Henting OK
				if (this.onsuccess) this.onsuccess(httprequest.responseText);
//				alert(httprequest.responseText);
			} else {
				if (this.onerror) this.onerror(httprequest);
			}
		}
	} catch(e) {
		if (this.onerror) this.onerror();
	}
};