"use strict";

(function() {
	var lastet = function() {
		console.log("Dokumentet er ferdig lastet.");
	};

	window.addEventListener('load', lastet, true);
})();

//Oppgave 1
function oppgave1() {
	var promptType = typeof prompt;
	var read = prompt("Enter some data:");
	alert(read);
	alert("The type of the prompt function is: " + promptType);

}

//Oppgave 2
function oppgave2() {
	var first = document.getElementById('oppgave2first').value;
	var second = document.getElementById('oppgave2second').value;

	var setDocument = function(arga, argb) {
		document.getElementById(arga).innerHTML = argb;
	}

	var parse = function(arg) {
		return parseInt(arg, 2);
	}

	first = parse(first); second = parse(second);

	if(isNaN(first)) first = 0;
	if(isNaN(second)) second = 0;

	setDocument('and', "AND: " + (first & second).toString(2));
	setDocument('or', "OR:  " + (first | second).toString(2));
	setDocument('xor', "XOR: " + (first ^ second).toString(2));
}

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
function oppgave4() {
	var url = document.getElementById('url').value;
	url = encodeURI(url);
	document.getElementById('oppgave4result').innerHTML = url;
}


//Oppgave  5
//encodeURI(arg) koder spesialtegn
//encodeURIComponent(arg) koder i tilegg tegnene ', / ? : @ & = + $ #'

//Oppgave 6
function oppgave6() {
	var input = document.getElementById('six').value;
	eval(input);
}

//Oppgave 7
//this refereres av window objektet, og variablen navn ligger i skopet til window.
var navn = "Ole";
this.navn += " Olsen";
console.log(this);

function skriv() {
	window.alert(navn);
}

//Oppgave 8
//this refererer til objektet main
var main = {
		count: 0,
		endre: function(elm) {
			++this.count;
			elm.value = (this.count%2 == 0) ? "Jeg ble klikket" : "Slutt å trykke!!";
		}
};

//Oppgave 9
//Ved å kalle mainNine.visThis() gjennom onclick hendelsen 
//fra et input vil typen fortsatt være objektet mainNine
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
			setTimeout(this.visThis, 2000);
		},
		visThis: function() {
			console.log(this);
		}
};

//Oppgave 11
var eventdemo = {
		load: function() {
			window.addEventListener('load', this.visThis, false);
		},
		visThis: function() {
			console.log(this);
		}
};

//this refererer til objektet eventdemo
//eventdemo.load();
//this vil nå referere til window objektet
//eventdemo.visThis();

//Oppgave 12
var array = new Array();
var tmp = "";
for(var x = 0; x < 10; x++) {
//	array[x] = Math.random() * 100;
//	tmp += array[x] + " ";
	array[x] = new Date(2015, Math.floor(Math.random()*12), Math.floor(Math.random()*29));
	tmp += array[x].toString();
}

console.log(tmp);
array.sort((function(a,b) {
	return a > b;
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

//Oppgave 14
function oppgave14() {

	var date = computeDate('oppgave14dd','oppgave14mm','oppgave14yyyy');
	var res = document.getElementById('oppgave14res');
	res.innerHTML = res.innerHTML.split(":")[0] + ":";
	if(date != undefined) {

		var dag = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"][date.getDay()];
		res.innerHTML += " " + dag;
	}
}

//Oppgave 15
function oppgave15() {
	var dateOne = computeDate('oppgave15dd1','oppgave15mm1','oppgave15yyyy1');
	var dateTwo = computeDate('oppgave15dd2','oppgave15mm2','oppgave15yyyy2');
	var res = document.getElementById('oppgave15res');
	res.innerHTML = res.innerHTML.split(":")[0] + ":";
	if(dateOne == undefined || dateTwo == undefined) return;

	var oneDay = 24*60*60*1000;
	var dayDiff = Math.round(Math.abs((dateOne.getTime() - dateTwo.getTime())/oneDay));

	res.innerHTML += " " + dayDiff;
}

function computeDate(d,m,y) {

	var dd = document.getElementById(d);
	var mm = document.getElementById(m);
	var yyyy = document.getElementById(y);

	var year = yyyy.value; 
	year = parseInt(year);
	var invalid = false;
	if(isNaN(year) || year < 0) {
		invalid = true;
		yyyy.style.color = "red";
	}

	var month = mm.value;
	month = parseInt(month);
	if(isNaN(month) || month < 1 || month > 12) {
		invalid = true;
		mm.style.color = "red";
	}

	var day = dd.value;
	day = parseInt(day);
	if(isNaN(day) || day < 1 || day > 31) {
		invalid = true;
		dd.style.color = "red";
	}

	var date = new Date(year, month-1, 0);
	if(day > date.getDate()) {
		invalid = true;
		dd.style.color = "red";
	}

	if(invalid) return undefined;

	date = new Date(year, month-1, day);

	yyyy.style.color = "black";
	mm.style.color = "black";
	dd.style.color = "black";

	return date
}

//Oppgave 16
function oppgave16() {
	var AA = new Array(1,2,3,4);
	demo(AA);
	alert(AA);

}

function demo(aa) {
	aa[aa.length] = "Hei";
	//aa er en referanse, direkte endring av objektets referanse
	//vil ikke påvirke objektet som ble sendt som referanseparameter. 
	//Endring av et av objektets properties, derimot, vil påvirke 
	//objektet som ble sendt som referanseparameter.

	aa = null; //AA fra oppgave16() vil ikke påvirkes
	//aa.length = 0; //AA fra oppgave16() vil påvirkes, og vil bli tømt
	//men holder dette til å "slette" ett objekt, kan et objekt i det hele
	//tatt slettes manuelt i kildekoden?
}

//Oppgave 17
(function() {
	var lastet = function() {
		document.getElementById('17a').addEventListener('click', (function() {
			return ob.func(1,2,3,4,7,6,5);
		}));
		document.getElementById('17b').addEventListener('click', (function() {
			return ob.func(1,2,3,4);
		}));
		document.getElementById('17c').addEventListener('click', (function() {
			return ob.func(1,2,3);
		}));
		document.getElementById('17d').addEventListener('click', (function() {
			return ob.func(1,2,3,4,7);
		}));
	};
	window.addEventListener('load', lastet, true);

})();

var ob = {
		func: function() {
			var list = document.getElementById('o17');
			while(list.firstChild) list.removeChild(list.firstChild);

			var toPush = document.createElement('li');
			toPush.textContent = document.getElementById('pushvalue').value;

			for(var index in arguments) {
				var toIns = document.createElement('li');
				toIns.textContent = arguments[index];
				list.appendChild(toIns);
			}
		}
};

//Oppgave 18
function oppgave18(a) {
	if(typeof a === "function")
		alert("iz funk!");
	else
		alert("newp, not a funk");
}

//window.addEventListener('load', lastet, true);

(function() {
	var lastet = function() {
		document.getElementById('18a').addEventListener('click', (function() {
			return oppgave18("parameter!!");
		}));

		document.getElementById('18b').addEventListener('click', (function() {
			return oppgave18(function() { return 3; });
		}));
	};
	window.addEventListener('load', lastet, true);
})();

//Oppgave 19
(function() {
	var lastet = function() {
		var resL = document.getElementById('19resL');
		resL.innerHTML += " " + Number.MAX_VALUE;
		var resB = document.getElementById('19resB');
		resB.innerHTML += " " + Number.MIN_VALUE;
	};
	window.addEventListener('load', lastet, true);
})();

//Oppgave 20
function oppgave20() {
	var primitivStreng = "abc";
	var objektStreng = new String("abc");
	var ret ="Primitive type: " + typeof primitivStreng + "\n"
	+ "Instance of String? " + (primitivStreng instanceof String) + "\n"
	+ "Object type: " + typeof objektStreng + "\n"
	+ "Instance of String? " + (objektStreng instanceof String);
	alert(ret);
}

//Oppgave 21
function oppgave21() {
	var stringMethods = new Array(); var pos = -1;
	stringMethods[++pos] = "\"abc\".charAt(1) == 'b' ? " + ("abc".charAt(1) == 'b');
	stringMethods[++pos] = "\"abc\".charCodeAt(1) == 98 ? " + ("abc".charCodeAt(1) == 98);
	stringMethods[++pos] = "\"abc\".concat(\"def\") == \"abcdef\" ? " + ("abc".concat("def") == "abcdef");
	stringMethods[++pos] = "\"carbag\".indexOf(\"car\") != -1 ? " + ("carbag".indexOf("car") != -1);
	stringMethods[++pos] = "\"carbag\".indexOf(\"car\", 1) == -1 ? " + ("carbag".indexOf("car", 1) == -1);
	stringMethods[++pos] = "... And the rest is to be considered on exams. HAHA fuckit";
	var tmp = "";

	for(var str in stringMethods) tmp += stringMethods[str] + "\n";

	alert(tmp);
}

//Oppgave 22
var minMatte = {
		summerInput: function(args) {
			var sum = 0;
			for(var x = 0; x < args.length; x++) {
				sum += args[x];
			}
			return sum;
		}
};

function oppgave22() {
	var inputFromUser = prompt("Enter numbers separated by semicolons.", "1;3;4");
	while((inputFromUser = validate(inputFromUser)) == "") 
		inputFromUser = prompt("Invalid, try again. remember to separate by semicolons. NO WHITE SPACES!", inputFromUser); 


	alert(minMatte.summerInput(inputFromUser));
}

function validate(input) {
	if(input == null) return "";
	input = input.split(";");

	if(!input[length-1]) input.pop();

	console.log(input[input.length-1]);

	for(var x = 0; x < input.length; x++) {
		if(isNaN((input[x] = parseInt(input[x])))) return "";

	}
	return input;
}

//Oppgave 23
var minNettleser = {
		nettlesere : ["Firefox", "Opera", "Internet Explorer",
		              "Safari", "Chrome", "Camino", "Konqueror",
		              "Arora", "Midori", "Edge"],
		              getAgent : function(agent) {
		            	  return navigator.userAgent.toLowerCase().indexOf(agent.toLowerCase());
		              },
		              getNettleser : function() {
		            	  var tmp = ""; // representing the server
		            	  // maybe use -1 instead
		            	  var y = -1; // representing the client
		            	  var receiverIndex = -1;
		            	  for(var x in this.nettlesere) {
		            		  tmp = this.getAgent(this.nettlesere[x]);
		            		  if(tmp > -1) {
		            			  if(receiverIndex < 0 || receiverIndex > tmp) { 
		            				  receiverIndex = tmp;
		            				  y = x;
		            			  }
		            		  }
		            	  }
		            	  if(y == -1) alert("not found");
		            	  else alert(this.nettlesere[y] + " " + tmp);
//		            	  var reg = //ig
//		            	  alert(navigator.userAgent);
		              }
};

//Oppgave 24
function Terning() {
	this.tall = null;
	this.trillTerning();
}

Terning.prototype.trillTerning = function() {
	this.tall = Math.floor(Math.random() * 6) + 1;
}

Terning.prototype.visTerning = function() {
	console.log(this.tall);
}

function oppgave24() {
	var t = new Terning();
	t.visTerning();
}
















