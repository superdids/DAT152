"use strict";

(function() {
	function lastet() {
		var regUttrykk = /\s+\w+\s+/;
		console.log(regUttrykk.exec(" 1 "));
		console.log(regUttrykk.exec("    b "));
		console.log(regUttrykk.exec(" aaaa "));
		console.log(regUttrykk.exec("a "));
		console.log(regUttrykk.exec(" c"));
	}
	
	window.addEventListener("load", lastet, false);
})();

function oppgave2() {
	var input = document.getElementById("opg2");
	var tekst = input.value.trim();
//	var uttrykk = /\w+\s+/ig;
	var uttrykk = /(\w+\s*)+\./g;
	var punctuations = 0;
	
	while (true) {
		var res = uttrykk.exec(tekst);
		if (! res) break;
		punctuations++;
	}
	
	alert(punctuations);
}

function retrieveName() {
	oppgave4(document.getElementById("opg4").value);
}

function oppgave4(input) {
	var reg = /\w*$/i;
	var first = reg.exec(input).toString();
	
	var second = input.substring(0, input.length-first.length);
	alert(first + ", " + second);
}


(function() {
	function lastet() {
		var btn = document.getElementById("ordbehandler");
		btn.addEventListener("click", function() {
			frequency();
		}, false);
	}
	
	window.addEventListener("load", lastet, false);
})();


function frequency() {
	var ref = document.getElementById("referat").value;
//	var reg = /([^\s\.,;:!][a-zæøå]+[\s\.,;:!]{1})/ig;
	var reg = /[a-zæøå]+[\s,.;:\n]?/ig
	var replaceString = new RegExp("[\.,;:'!]");
	
	var words = {};
//	var words = new Array();
	
	while(true) {
		var res = reg.exec(ref);

		if(! res) break;
		res = res[0];
//		res = res.replace(/[,\.:;!\s\n]/ig,"");
		res = res.replace(/[\s,.;:\n]/ig,"");

		if(res in words) {
			words[res]++;
		} else {
			words[res] = 1;
		}
	}
	
	var tmp = new Array();
	var item;
	
	for(var x in words) {
		item = {};
		item.k = x; //k for key
		item.v = words[x]; //v for value
		tmp.push(item);
	}
	
	function predicate(a,b) {

		return b.v - a.v;
	}
	
	tmp.sort(predicate);
	
	for(var x = 0; x < tmp.length; x++) {
		console.log(tmp[x].k + ": " + tmp[x].v);
	}
	fillTable(tmp);
}

function fillTable(arr) {
	var table = document.getElementById("frekvenstabell");
	while(table.rows.length > 1) table.deleteRow(1);
	
	var row;
	for(var x = 0; x < arr.length; x++) {
		row = table.insertRow(x+1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = arr[x].k;
		cell2.innerHTML = arr[x].v;
	}
}

function testFunc() {
	var val = document.getElementById("testVal").value;
	var reg = /[\s,]/g;
	
	console.log(val + " <<<=>>>  " + val.length);
	var res = val.replace(reg, "");
	console.log(res + " <<<=>>> " + res.length);
}

//Konstruktørfunksjonen Person ligger i person.js.
function oppgave6() {
	var person = new Person();
	var readVal = document.getElementById("o6in").value;
	
	var res = validate(readVal);
	if(!Object.keys(res).length) return;
	var pTag = document.getElementById("o6res");
	pTag.style.color = "black";
	
	pTag.innerHTML = "Fornavn: " + res.fornavn + "\n";
	pTag.innerHTML += "Etternavn: " + res.etternavn + "\n";
	
	pTag.innerHtml += "Telefonnummer: \n";
	for(var x in res.telefonnummer) {
		pTag.innerHTML += "\t" + res.telefonnummer[x] + "\n";
	}
	
	pTag.innerHTML += "Epost: \n";
	for(var x in res.epost) {
		pTag.innerHTML += "\t" + res.epost[x] + "\n";
	}
	person.setData(res);
	person.printData();
}

//Anonym funksjon inne i en anonym funksjon? og den ytre kalles?

(function() {
	return (function() {
		return (function() {
			console.log(3);
		});
	});
})()()(); //!!!


