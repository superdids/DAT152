//3 måter å opprette en funksjon på
//1
function mixF() { return 0; }
//2
var maxF = function() { return 0; }

var os = new Object();
os.fname = "didrik";
//3
os.func = maxF;
os.func();


//JSON ekvivalente koder, a() <=> b()
function a() {
	var o = { 'fname': 'Didrik',
				'func' : maxF
	};
	return o;
}
function b() {
	var o = {};
	o['fname'] = 'Didrik';
	o['func'] = maxF;
	return o;
}

//Simulere klasse i JS
function F(fornavn, etternavn) {
	this._fornavn = fornavn;
	this._etternavn = etternavn;
	
}

//this benyttes i funksjoner som er ment for å lage objekter
//her vil ob betraktes som this i konstruktørfunksjonen F
var ob = new F('Didrik', 'Aubert');



function G() {
//	window.alert(this);
}

G.prototype.fun = function(x) {
	console.log("some fuction invoked from: " + x);
}

//ekvivalent til funksjonen over:
/*
Object.prototype.fun = function(x) {
	window.alert("some fuction invoked from: " + x);
}
 */


var u = new G();
var v = new G();
//dette ansees som "konsturktørfunksjon".prototype.fun()
u.fun('u');
v.fun('v');

//var us = new Object();
//us.fun('us');

//firkantparenteser gir oss instans av Array
var x = ['a', 'b'];
//krøllparenteser gir oss instans av Object, impliserer også JSON.
var y = { 
	'u' : 'a',
	'v' : 'b'
}

var frukt = "asd";
String.prototype.visForste = function() {
	return this.substr(0,1);
}
console.log(frukt.visForste());


function Person() {}
var student = new Person();

Person.prototype.setFornavn = function(fornavn) {
	this._fornavn = fornavn;
}

Person.prototype.getFornavn = function() {
	return this._fornavn;
}

student.setFornavn('Didrik');
console.log(student.getFornavn());


//===============================================
//JavaScript design patterns
//defineProperty/properties!!
var person = { };
Object.defineProperty(person, "fornavn", {
	value : "didrik",
	writable : false,
	enumerable : true,
	configurable : false
});
Object.defineProperties(
		person, {
			etternavn : {
				value : "aubert",
				writable : false,
				enumerable : true,
				configurable : false
			},
			alder : {
				value : 23,
				writable : false,
				enumerable : true,
				configurable : false
			}
		}
);

//hmm... ?
//var count = 0;
//for(var property in person) {
//	console.log(++count + " " person.property);
//}
//console.log(person.fornavn + " " + person.etternavn + " " + person.alder);
