"use strict";

(function() {
	var lastet = function() {
		console.log("Dokumentet er ferdig lastet.");
	};
	
	window.addEventListener('load', lastet, true);
})();

//Oppgave 1
var promptType = typeof prompt;
console.log("The type of the prompt function is: " + promptType);
//var read = prompt("Skriv inn data");
//alert(read);

//Oppgave 2
function a() {
	return parseInt("1000", 2);
}

function b() {
	return parseInt("100", 2);
}

//AND
console.log(a() & b());

//OR
console.log(a() | b());

//XOR
console.log(a() ^ b());

//Oppgave 3
function compute() {
	var first = document.getElementById("first").value;
	var second = document.getElementById("second").value;
	
	function num(input) { return parseInt(input); };
	function set(arg, val) {
		document.getElementById(arg).innerHTML = val;
	}
	
	first = num(first);
	second = num(second);
	
	var error = false;
	if(isNaN(first)) {
		error = true;
		set("erra", "Not a number");
	} else {
		set("erra", "");
	}
	if(isNaN(second)) {
		error = true;
		set("errb", "Not a number");
	} else {
		set("errb", "");
	}
	
	if(error) {
		set("result", "");
	} else {
		set("erra", "");
		set("errb", "");
		set("result", (first+second));
	}
	
}

//Oppgave 4
//Vet ikke om jeg gidder å lage regex for dette...


//Oppgave  5
//encodeURI(arg) koder spesialtegn
//encodeURIComponent(arg) koder i tilegg tegnene ', / ? : @ & = + $ #'

//Oppgave 6
function oppgave6() {
	var input = document.getElementById('six').value;
	eval(input);
}

//Oppgave 7
//this refereres av window objektet, men er ikke definert i skriv() funksjonen
var navn = "Ole";
this.navn += " Olsen";
console.log(this);

function skriv() {
	window.alert(navn);
}

//Oppgave 8
//this refererer til HTMLInputElement objektet, dette kan verifiseres
//ved å putte en id i input tagget (f.eks a) og sjekke at typene 
//samsvarer, se linjen under.
//alert(elm === document.getElementById('a'));
var main = {
	endre: function(elm) {
		elm.value = "Jeg ble klikket";
	}
};

//Oppgave 9
//Ved å kalle mainNine.visThis() gjennom onclick hendelsen 
//fra et input vil typen fortsatt være objektet til mainNine, dette
//fordi this ikke sendes som et argument fra HTML taggen.
var mainNine = {
	visThis: function() {
		console.log(this);
	}
};

//Ved å ikke sende et argument vil this refereres objektet mainNine
mainNine.visThis();

//Oppgave 10
var timerDemo = {
	timer: function() {
		setTimeout(this.visThis(), 2000);
	},
	visThis: function() {
		console.log(this);
	}
};
//Begge tilfellene vil resultere i at this refereres til et JSON objekt.
//MEn timeren funker ikke..?
timerDemo.visThis();
timerDemo.timer();

//Oppgave 11
//this refererer fortsatt til et JSON objekt
var eventdemo = {
	load: function() {
		window.addEventListener('load', this.visThis(), false);
	},
	visThis: function() {
		console.log(this);
	}
};

eventdemo.load();
eventdemo.visThis();

//Oppgave 12
var array = new Array();
var tmp = "";
for(var x = 0; x < 10; x++) {
	array[x] = Math.random() * 100;
	tmp += array[x] + " ";
}

console.log(tmp);
array.sort((function(a,b) {
	return a-b;
})); 
//Hvorfor opprette et predikat når det bare kan sendes direkte
//som en anonymfunksjon... Eller jo, det finnes tilfeller når 
//det må utføres, når jeg tenker meg om!
tmp = "";
for(var x = 0; x < 10; x++) {
	tmp += array[x] + " ";
}

console.log(tmp);

//Oppgave 13 er easymode, så forsøker å simulere en stabel på HTML side
var array;
var current;
window.onload = function() {
	var list = document.getElementById('stack').children;
	current = list.length;
	for(var x = 0; x < current; x++) {
		array[x] = list[x].textContent;
	}
}

function pop() {
	if(current > 0) {
		document.getElementById('stack').removeChild(document.getElementById('stack').children[0]);
		--current;
		array.pop();
	}
}

function push() {
	var toPush = document.createElement('li');
	toPush.textContent = document.getElementById('pushvalue').value;
	array.push(toPush); 
	++current;
	var list = document.getElementById('stack');
	
	list.insertBefore(toPush, list.childNodes[0]);
}









