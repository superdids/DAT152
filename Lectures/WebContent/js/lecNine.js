//GET data er del av URLen.
//GET+DELETE -> xmlhttprequest.send(null);
//POST+PUT -> xmlhttprequest.send(DATA);

//husk å sette contentType (vha xmlhttprequest.setRequestHeader)
//f.eks JSON:
//xmlhttprequest.setRequestHeader("Content-Type", "application/json; charset=utf-8");
//{
//	"navn": "Åse Åsesen",
//	"adresse": "Øsebukten 32"
//}

//i AJAX: setTimeout > setInterval
//på denne måten unngår vi paralelle forbindelser (dersom f.eks. en request går sakte)

//getElementsByClassName kan være aktuelt for oblig 1.
//eller da getelementbyid(tabellnavn) for å så hente
//liste med noder

