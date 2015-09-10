"use strict";

var Person = function(a,b) {
	var name = a || "";
	
	return {
		comp: b || "",
		getName: function() {
			return name;
		},
		setName: function(n) {
			name = n;
		}
	}
	
};


var p1 = Person("a", "b");
var p2 = Person("c", "d");

//alert(p1.name); //"undefined", må bruke getName();
//alert(p1.getName()); //"a"
//alert(p2.comp); //"d"

//Observer pattern
//Komponent(er) reagerer når tilstand på et subjekt
//endres. Subjektet informerer om endret tilstand ved notify()
//Subjektet knyttes til komponent(er) vha add(Object)
//Subjekt - liste med observatører
//Ved et subjekts notify() utføres det update() over aktuelle komponenter

//blanding av JS+HTML, hvordan gjøres dette?:
//lage et (Concrete)Subject objekt i JS som refererer til f.eks
//en button i HTML

//Liste av observers bør være HTML objekter, da javascript kan oppdatere
//disse automatisk 

//Levende DOM datastruktur? Finn ut hva .call(args) og bind(Object) gjør

// func.call(Object) kjører med Object som kontekst/this
// func.bind(Object) utfører det samme som call UTEN å KJØRE func

//Events:
//* DOMContentLoaded: documentet er ferdig lastet, uten å vente på
//stylesheets, bilder mm.
//* load: dokument fullstendig ferdiglastet.


//Bruk av bind:
var x = 9;
var module = {
		x: 81,
		getX: function() {
			return this.x;
		}
};

//alert(this.module.getX());


var retX = module.getX;
//alert(this.retX());
alert(retX.call(this));

var get = retX.bind(module);

alert(get());

//Publisher-Subscriber ("desentralisert")
//Ligner på observer pattern - bruker en "eventchannel" mellom
//observatører av hendelse og objekt som trigger hendelse
//Hendelser her er ikke DOM-hendelser, men hendelser gitt av
//applikasjonen

//Mediator pattern ("sentralisert")
//Reduserer kommunikasjonskanaler fra mange-til-mange til mange-til-en
//I mediator pattern kommuniserer komponenter gjennom en sentral
//komponent. 

//Hvordan avkoble et "setInterval"?


