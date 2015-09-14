"use strict";
//document.documentElement peker på HTML-taggen
//i aktuelt HTML dokument.

function demo0() {
	document.documentElement.style.background = "red";
}

function loop() {

}

function pdf() {
	var xmlhttp = new XMLHttpRequest();
	var url = "http://www.scatecsolar.com/Investor";
	xmlhttp.open("GET", url, true);
	xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
//			console.log(this.responseText);
			getStuff(this.responseText);
		}
	}
	xmlhttp.send(null);
}

function getStuff(values) {
//	console.log(typeof values);
	var parser = new DOMParser();
	values = parser.parseFromString(values, "text/html");
//	alert(values);
	var a = values.getElementsByClassName("col-sm-9 reports")[0];
	a = a.getElementsByClassName("pdf")[0];
//	console.log(a.href);
//	window.open(a.href);
	funk(a.href);
}

function funk(valueStuff){
	var pdf = PDFJS.getDocument(valueStuff);
//	var pdf = PDFJS.getDocument('http://www.pacer.gov/documents/pacermanual.pdf');
	pdf.then(function(pdf) {
		var maxPages = pdf.pdfInfo.numPages;
		for (var j = 1; j <= maxPages; j++) {
			var page = pdf.getPage(j);

			// the callback function - we create one per page
			var processPageText = function processPageText(pageIndex) {
				return function(pageData, content) {
					return function(text) {
						// bidiTexts has a property identifying whether this
						// text is left-to-right or right-to-left
						if(text.bidiTexts) {
						for (var i = 0; i < text.bidiTexts.length; i++) {
							str += text.bidiTexts[i].str;
						}

						if (pageData.pageInfo.pageIndex === 
							maxPages - 1) {
							// later this will insert into an index
							console.log(str);
						}
						} else {
//							var stringSuff = text.str;
//							console.log("asd: "+ JSON.stringify(text));
							for(var z = 0; z < text.items.length; z++) {
//								console.log(text.items[z].str);
//								if(text.items[z].str.indexOf())
								document.getElementById('ta').innerHTML += text.items[z].str; 
							}
						}
					}
				}
			}(j);

			var processPage = function processPage(pageData) {
				var content = pageData.getTextContent();

				content.then(processPageText(pageData, content));
			}

			page.then(processPage);
		}
	});
}