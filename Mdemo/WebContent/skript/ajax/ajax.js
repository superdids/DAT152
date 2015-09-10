"use strict";

function AJAXConnection(url){
  this._url = url || null;
  this.onsuccess = function() {window.alert("Suksess")};
  this.onerror = function() {this.response;};
}

AJAXConnection.prototype.get = function(pathArray,data) {
  // Kan kaste unntak hvis ajaxforbindelse ikke kan settes opp
    var httprequest = this._getHTTPObjekt();

    // Legger til evt. path til URL.
    var url = this._url + this._convertToPath(pathArray);
    
    // Legger til evt. GET-parametre.
    if (data) url += "?" + this._formatData(data);
    
    httprequest.open('GET', url, true);

    // Trenger å få gitt httprequest til hendelseshåndterer
    var thisObjekt = this;
    httprequest.onreadystatechange = function(){thisObjekt._dataReceived(httprequest)};
    if (this.onerror) httprequest.onerror = function(){thisObjekt.onerror(httprequest)};

    // Sender forespørsel
    httprequest.send(null);
};

AJAXConnection.prototype.del = function(pathArray) {
  // Kan kaste unntak hvis ajaxforbindelse ikke kan settes opp
    var httprequest = this._getHTTPObjekt();
    
    // Legger til evt. path til URL.
    var url = this._url + this._convertToPath(pathArray);
    httprequest.open('DELETE', url, true);

    // Trenger å få gitt httprequest til hendelseshåndterer
    var thisObjekt = this;
    httprequest.onreadystatechange = function(){thisObjekt._dataReceived(httprequest)};
    if (this.onerror) httprequest.onerror = function(){thisObjekt.onerror(httprequest)};

    // Sender forespørsel
    httprequest.send(null);
};

AJAXConnection.prototype.put = function(pathArray,data) {
  // Kan kaste unntak hvis ajaxforbindelse ikke kan settes opp
    var httprequest = this._getHTTPObjekt();
    
    // Legger til evt. path til URL.
    var url = this._url + this._convertToPath(pathArray);

    httprequest.open('PUT', url, true);

    // Trenger å få gitt httprequest til hendelseshåndterer
    var thisObjekt = this;
    httprequest.onreadystatechange = function(){thisObjekt._dataReceived(httprequest)};
    if (this.onerror) httprequest.onerror = function(){thisObjekt.onerror(httprequest)};

    // Må ved POST angi mime-type for form-data
    httprequest.setRequestHeader("Content-Type","application/json; charset=utf-8");
    // Sender forespørsel
    httprequest.send(JSON.stringify(data));
};

AJAXConnection.prototype.post = function(pathArray,data) {
  // Kan kaste unntak hvis ajaxforbindelse ikke kan settes opp
    var httprequest = this._getHTTPObjekt();
    
    // Legger til evt. path til URL.
    var url = this._url + this._convertToPath(pathArray);
    
    httprequest.open('POST', url, true);

    // Trenger å få gitt httprequest til hendelseshåndterer
    var thisObjekt = this;
    httprequest.onreadystatechange = function(){thisObjekt._dataReceived(httprequest)};
    if (this.onerror) httprequest.onerror = function(){thisObjekt.onerror(httprequest)};

    // Må ved POST angi mime-type for form-data
    httprequest.setRequestHeader("Content-Type","application/json; charset=utf-8");

    // Sender forespørsel
    httprequest.send(JSON.stringify(data));
};

AJAXConnection.prototype._getHTTPObjekt = function() {
  if (typeof window.XMLHttpRequest != "undefined") { // Firefox, Opera, Safari, etc
    return new XMLHttpRequest();
  }

  if (typeof window.ActiveXObject == "function") { // IE5 og IE6
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }
  return false;
};

AJAXConnection.prototype._dataReceived = function(httprequest) {
  try {
    if (httprequest.readyState == 4) { // Et dokument er ferdig lastet
      if (httprequest.status == 200) { // Henting OK
        if (this.onsuccess) this.onsuccess(httprequest.responseText);
      } else {
        if (this.onerror) this.onerror(httprequest);
      }
    }
  } catch(e) {
    if (this.onerror) this.onerror();
  }
};

AJAXConnection.prototype._formatData = function(data) {
  var dataString="";
  for (var key in data) {
    dataString += encodeURIComponent(key) + "=" + encodeURIComponent(data[key]) + "&";
  }
  dataString = dataString.substring(0,dataString.length-1);
  return dataString;
};

AJAXConnection.prototype._convertToPath = function(pathArray) {
  var path = "";
  if (pathArray instanceof Array) {
    if (pathArray.length > 0) {
      for (var i=0;i<pathArray.length;++i) {
        path += "/" + pathArray[i]
      }
    }
  }
  return path;
};
