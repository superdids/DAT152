"use strict";

function Person() {
	this._fornavn = null;
	this._etternavn = null;
	this._telefonnummer = new Array();
	this._epost = new Array();
}

Person.prototype.getFornavn = function() {
	return this._fornavn;
}

Person.prototype.getEtternavn = function() {
	return this._etternavn;
}

Person.prototype.getTelefonnummer = function() {
	return this._telefonnummer;
}

Person.prototype.getEpost = function() {
	return this._epost;
}

Person.prototype.setData = function(data) {
	this._fornavn = data.fornavn;
	this._etternavn = data.etternavn;
	this._telefonnummer = data.telefonnummer;
	this._epost = data.epost;
}

Person.prototype.printData = function() {
	console.log(this._fornavn);
	console.log(this._etternavn);
	console.log(this._telefonnummer);
	console.log(this._epost);
}

function validate(data) {
	
	var regNavn = /[a-zæøå]+\s[a-zæøå]+/i;
	var regTlf = /(\d\s*\d){4,}(,|;|)/g;
	var regEpost = /[a-z][a-z._]+@[a-z]+\.[a-z]+(,|;|\s+)/ig;
	
	var tmp, navn, 
	telefonnummer = new Array(), 
	epost = new Array();
	if (tmp = regNavn.exec(data)) navn = tmp[0];
	else {
		var pTag = document.getElementById("o6res");
		pTag.style.color = "red";
		pTag.innerHTML = "You didn't specify the name correctly!";
		return {};
	}
	
	while(tmp = regTlf.exec(data)) {
		tmp = tmp[0];
		tmp = tmp.replace(/[\s;,]/g, "");
		telefonnummer.push(tmp);
	}
	
	while(tmp = regEpost.exec(data)) {
		tmp = tmp[0];
		tmp = tmp.replace(/[\s,;]/g, "");
		epost.push(tmp);
	}
	
	navn = navn.split(" ");
	return (function(f, l, p, e) {
		return {
			fornavn: f,
			etternavn: l,
			telefonnummer: p,
			epost: e
		};
	})(navn[0], navn[1], telefonnummer, epost);
}