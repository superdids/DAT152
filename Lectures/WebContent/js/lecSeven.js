//Regex

//\( \) - match TEGNENE parentes
//(sin|cos) - gruppering, match forekomsten sin eller cos
//[] - finn forekomsten av ett tegn her


// /^$/ -> en tom linje i et søk.
// \b representerer ordgrense. Funker ikke for norske tegn, styr unna.
// Dette gjelder forøvrig kun ved bruk av UTF-8 encoding. FUCK ISO


(function() {
	var reg = /(sin|cos)\s*\([.0-9]+\)/i;
	//inne i [] kontruksjonen betraktes spesialtegnene som
	//vanlige tegn -> 
	//	. representerer ikke lenger et vilkårlig tegn
	// \ representerer ikke lenger "escape" for et tegn
	// ^ annoterer IKKE om det kommer først i konstruksjonen,
	// TEGNET ^ ellers.
	console.log(reg.test("sin(0.9)"));
})();


(function() {
	//matcher 3 tegn, første og tredje tegn er SAMME siffer
	var reg = /(\d).\1/; 


	console.log(reg.test("999"));
	console.log(reg.test("1a1"));
})();

(function() {
	var reg = /(\s|^)([a-zæøå])[a-zæøå]*\2(\s|$)/i;
	// ^ gir treff på at punkt er starten av teksten
	// $ gir treff på at punkt er slutten av teksten
	// (\s|$) gir treff på et enkelt white-space eller et punkt som er slutten av teksten
	// må ha minst 2 tegn, første tegn må tilsvare siste.

	var res = reg.exec("Dfsdfsd abba kjkjlkl");
	console.log(res);
})();

// /a{3,5}/ 3-5 a-er, så mange som mulig
// /a{3,5}?/ 3-5 a-er, så få som mulig
// /a{n,} / n eller flere a-er, så mange som mulig



(function() {
	var reg = /[a-zøæå]+/g;
	var tekst = "Alle fugler små de er";
//	while(true) {
//		var res = reg.exec(tekst);
//		if(! res) break;
//		alert("Fant: <<" + res[0] + ">>");
//	}
	var tmp;
	while(tmp = reg.exec(tekst)) console.log("Fant: <<" + tmp[0] + ">>"); //js syntactic sugar
//	while((tmp = reg.exec(tekst)) != null) alert("Fant: <<" + tmp[0] + ">>"); //java syntaks
	
})();

//exec retrnerer et json objekt med følgende properties/egenskaper
// * index: indeks til første plasseringen til aktuell match
// * input: søketreffet
// * (Array index) 0: hele treffet
// * (Array index) n : del av treffet, i n-te parentes



(function() {
	var o = {
			'm': function() { return this; }
	};
	
	function f() {
		alert(o.m());
	}
	
//	f();
//	f.call(o);
	
})();