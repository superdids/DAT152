//Forarbeid oppgave 1
var forarbeid = function() {
	var fornavn = 'Ole';
	var etternavn = new String('Olsen');
	var like = typeof fornavn == typeof etternavn;

	var finalString = fornavn + ' (implisitt kall på funksjonskonstruktør) ' 
	+ etternavn + ' (eksplisitt kall på funksjonskonstruktør) '
	+ (like ? 'like' : 'ikke like');

	document.getElementById('forarbeid').innerHTML = finalString;
}

var started = false;
var start = function() {
	if(!started) {
		window.setInterval(function(){
			stuff();
		}, 25);
		started = true;
	}
}

var stuff = function() {

	txt = document.getElementById('circular').value;

	console.log(typeof txt);
	String.prototype.rotate = function () {
		var iChar = this.charAt(0);
		return this.slice(1) + iChar;
	}
	var varr = txt.rotate();
	console.log(varr);
	document.getElementById('circular').value = varr;

	document.getElementById('append').innerHTML += varr + '<br />';
}

//====================================================================================================
//Oppgave 1
//første anonyme funksjon skriver ut tittelen på HTML dokumentet
//hva som skrives ut i andre anonyme funksjon er kommentert der.
//ved å følgende inn i aktuelt HTML dokument: '<button onclick="this.vis()">Klikk </button>',
//vil HTMLButtonElement objektet skrives ut, typen vil være object. Dette tillates, da window.onload
//funksjonen begynner når HTML dokumentet er fullstendig innlastet.
window.onload = function() {
	(function() {
		console.log(document.getElementsByTagName("title")[0].textContent);
	})();

	(function(){
		Object.vis(); //konstruktørfunksjonen til Object, typen er function
		"god dag".vis(); //verdien til objektet som kaller vis(), som er "god dag", typen er object
		(57).vis(); //verdien til objektet som kaller vis(), som er 57, typen er object
		document.vis(); //HTMLDocument, typen er object
		window.vis(); //Window, typen er object
		document.getElementsByTagName('p')[0].vis(); //HTMLParagraphElement, typen er object
		HTMLHeadingElement.vis(); //konstruktørfunksjonen til HTMLReadingElement, typen er function
	})();

};

Object.prototype.vis = function () {
	console.log("" + this + "\n==============\n" + typeof this);
};

//====================================================================================================
//Forarbeid oppgave 2
function Person(fornavn, etternavn) {
	// <<_>> benyttes for å ANNOTERE private feltvariabler, JavaScript vil dog ikke hindre global tilgang.
	this._fornavn = fornavn	|| 'Didrik';
	this._etternavn = etternavn || 'Aubert';
	this._id = Person.prototype.antallPersoner;

	++Person.prototype.antallPersoner;
	/* kan også aksesseres på følgende måte
	 ++this.constructor.prototype.antallPersoner;
	 */
	
	Person.prototype.getFornavn = function() { return this._fornavn; }
	Person.prototype.getEtternavn = function() { return this._etternavn; }
	Person.prototype.getId = function() { return this._id; }
	Person.prototype.toString = function() { 
		return this.getId() + ' ' + this.getFornavn() + ' ' + this.getEtternavn() + '\n'; 
	}
}

//Initialiserer id.
Person.prototype.antallPersoner = 0;
var enBabe = new Person("Anne");
var toBabe = new Person(null,"Trebua");
window.alert(enBabe.toString() + toBabe.toString());
enBabe.vis();

var tekstElm = '{"merke": "Ford", "modell": "Transit", "pris": 40000 }';
var bil = JSON.parse(tekstElm);
window.alert(bil.merke + ' ' + bil.modell + ' ' + bil.pris);

