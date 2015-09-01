"use strict";

(function() {
	function init() {
		document.getElementsByTagName('div')[0].textContent = "Loaded.";
	}
	
	window.addEventListener("load", init, false);
})();



(function() {

	function init() {
		document.getElementsByTagName('div')[1].textContent = "Some stuff.";
	}
	window.addEventListener("load", init, false);
})();



//this - ting i objektet

var person = (function() {
	//firstname er en variabel i en funksjon
	var firstname = "Ole";
	
	return {
		//company er en variabel i et objekt
		company: "hib",
		getNameAndComp: function() {
			return firstname + " " + this.company;
		}
	};
})();

console.log(person.getNameAndComp())


var obj = { "firstname": "dids", "lastname": "aubert" };

for(var a in obj) {
	console.log(a + ": " + obj[a]);
}