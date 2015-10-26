"use strict";

//XSS sikerhetshull:
// * Session hijacking
// Session id sendes kun mellom webtjener og klient (offer for angrepet)
//angriper må få klient til å videresende sin session-id til seg
//Problem:
//Hvis offer oppdager at noe er feil vil applikasjoenn bli stoppet og ordnet
//Løsning:
//Skript for å stjele session-id må få nettesere til å navigere tilbake 
//til websiden fra tjener når session er stjålet
//Problem:
//Nytt problem: vi må unngå en løkke der webside fra tjener og webside
//til angriper redirigerer til hverandre. 
//Løsning:
//Benytte en cookie-parameter for å angi at session er stjålet

//Stjele passord

//Tekstmodifisering
window.onload = function() {
	document.getElementById("stuff").value = "&lt;";
}