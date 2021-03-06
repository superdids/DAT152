"use strict";
var myDocuments = (function() {
	return {
		countElements : function(tagName) {
			var tags = document.getElementsByTagName(tagName);

			if(tags.length) return tags.length;
			else return null;
		}, getText: function() {
			var elements = document.getElementsByTagName("*");
			var toRet = new Array();

			for(var x = 0; x < elements.length; x++) {
				if(elements[x].innerHTML != "")
					toRet.push(elements[x].innerHTML);
			}
			return toRet;
		}, findText : function(searchString) {
			if(!(searchString instanceof RegExp)) {
				alert("You didnt pass a regular expression to this function.");
				return;
			}
			var nodes = this.getText();
			var count = 0, tmp;

			for(var x = 0; x < nodes.length; x++) {
//				console.log(123);
				while(tmp = searchString.exec(nodes[x])) ++count;
			}
			return count;
		}
	};
})();

function oppgave1() {
	var tag = window.prompt("Enter a tag", "li");
	if(typeof tag !== "string") {
		alert("Not a valid string!");
		return;
	} 
	tag = tag.toLowerCase();
	alert(myDocuments.countElements(tag));
}

function oppgave2() {
	var arr = myDocuments.getText();
	for(var x = 0; x < arr.length; x++) {
		console.log(arr[x]);
	}
}

function oppgave3() {
	alert(myDocuments.findText(/Hvor/g));
}




