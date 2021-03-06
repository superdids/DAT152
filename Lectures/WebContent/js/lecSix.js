"use strict";

//tre metoder som kan benyttes til å gi this mening
//* bind - lar oss kjøre ny metode og spesifisere hva som skal refereres av this

function f() {
	
}

var g = f.bind(/*kontekst*/);

g(); // kjøres ed "kontekst" som kontekst

(function() {
	
	function Medlem(fornavn, etternavn) {
		this._fornavn = fornavn;
		this._etternavn = etternavn;
	}
	
	Medlem.prototype.visData = function() {
		window.alert(this._fornavn + " " + this._etternavn);
		window.alert(this);
	}
	
	function lastet() {
		var m = new Medlem("Ole", "olsen");
		var btn = document.getElementById('btn');
		btn.addEventListener("click", m.visData.bind(m) ,false);
		//this refereres av Medlem
//		btn.addEventListener("click", m.visData ,false); 
		//undefined - this refereres av HTMLInputElement!
	}
	
	window.addEventListener("load", lastet, false);
})();


//eldre nettlesere støtter ikke bind, da må man gjøre følgende
//var thisObj = this;
//function f() { thisObj.visData(); };
//btn.addEventListener("click", f, false);


//* call kjører funksjon med en gitt kontekst

//* apply - f.apply(o, [argx,argy...])
//"kjør funksjonen x, med o som kontekst og argx,argy... som argumenter
//"argumenter" er altså ETT array argument.

//FORSKJELLEN på call og apply er at apply tar imot en array 
//med argumenter, mens call tar imot parametre..... Man trenger 
//i utaangspunktet ikke angi kontekst, men metodene må ta imot 
//minst ett argument.

//function theFunction(name, profession) {
//    alert("My name is " + name + " and I am a " + profession + ".");
//}
//theFunction("John", "fireman");
//theFunction.apply(undefined, ["Susan", "school teacher"]);
//theFunction.call(undefined, "Claude", "mathematician");


A(3,4,5,5,6);

function A() {
	//Dette funker også
//	var arr = new Array();
//	for(var x = 0; x < arguments.length; x++) {
//		arr[x] = arguments[x];
//	}
	
//	var arr = Array.prototype.slice.call(arguments, 0);
	arguments.slice = Array.prototype.slice;
	var arr = arguments.slice(0);

	B.apply(null, [arr]);
	
//	B(<alle argumenter i A sitt objekt arguemtns>);
}



function B(args) {
	for(var x = 0; x < args.length; x++) {
		console.log(args[x]);
	}
}


//Regulære uttrykk, syntaks
//enten:
//reg1 = /mønster/brytere
//reg2 = new RegExp("mønster", "brytere");
//Ex
//var reg1 = /(sin|cos)\s*\([.0-9]+\)/i //i = case insensitive
//var reg2 = new Regexp("(sin|cos)\\s*\\([.0.9]+\\)", "i");


var reg1 = /(sin|cos)\s*\([.0-9]+\)/i;
var res = reg1.exec("sin(1)");
alert(res);








