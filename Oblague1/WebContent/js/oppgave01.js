"use strict";
//
//
//

(function() {
	function lastet() {
		var mainController = new Controller(window);
		mainController.start();
	}

	window.addEventListener("DOMContentLoaded", lastet);
})();


//(function() {
//	function lastet() {
//		var gui = new GUIManager(window, -1);
//		refresh(gui);
//	}
//
//	window.addEventListener("DOMContentLoaded", lastet);
//})();
//
//function refresh(gui) {
//	window.setTimeout(function() {
//		var http = new HTTPOperations("/endringer", gui.updateMemberList.bind(gui));
//		http.getMembersByLogId(gui.getLogId());
//		refresh(gui);
//	}, 2000);	
//}
//
//function buttonDelete(id) {
//	return function() {
//		var http = new HTTPOperations("/medlem", removeMember);
//		http.deleteMemberById(id);
//	}
//}
//
//function buttonEdit(id) {
//	return function() {
//		editMemberDialog(id);
//	}
//}
//
//function removeMember(responseText) {
//	var obj = JSON.parse(responseText);
//	obj = obj.updatedMember;
//	if(obj.status) {
////		var table = document.getElementById("memberList");
////		var gui = new GUIManager(/*table*/);
////		gui.deleteMemberById(obj.memberId);
//	}
//}
//
//function updateMember(responseText) {
//	var obj = JSON.parse(responseText);
//	obj = obj.updatedMember;
//	var p = document.getElementById("fail");
//	if(obj.status) {
//		document.getElementById("manageMember").style.display = "none";
//		p.innerHTML = "";
//	} else {
//		p.innerHTML = "woops! something went wrong!";
//	}
//}
//
//function createMember(responseText) {
//	var obj = JSON.parse(responseText);
//	obj = obj.updatedMember;
//	var p = document.getElementById("fail");
//	if(obj.status) {
//		document.getElementById("manageMember").style.display = "none";
//		p.innerHTML = "";
//	} else {
//		p.innerHTML = "woops! something went wrong!";
//	}
//}
//
//function editMemberDialog(id) {
//	document.getElementById("manageMember").style.display = "inline";
//
//	var row = document.getElementById("m"+id);
//
//	function el(val) { return document.getElementById(val); };
//
//	var fields = inputs();
//	for(var x = 0; x < fields.length; x++) {
//		fields[x].value = row.cells[x].innerHTML;
//	}
//
//	document.getElementById("submitMember").onclick = function() {
//		var http = new HTTPOperations("/medlem", updateMember);
//		var member = arrayToJSON(fields); //JSON OBJECT
//
//		http.updateMember(id, member);
//		var gui = new GUIManager();
//		member.memberId = id;
//		gui.updateMember(member);
//	
//	}
//}
//
//function newMemberDialog() {
//	document.getElementById("manageMember").style.display = "inline";
//
//	var fields = inputs();
//	for(var x = 0; x < fields.length; x++) {
//		fields[x].value = "";
//	}
//
//	document.getElementById("submitMember").onclick = function() {
//		var http = new HTTPOperations("/medlem", createMember);
//		var member = arrayToJSON(fields); //JSON OBJECT
//		http.createMember(member);
//	}
//}
//
//
//function inputs() {
//	function el(val) { return document.getElementById(val); };
//
//	//see oppgave01.html under the div id="manageMember"
//	return [el("fName"), el("lName"), el("address"), el("phone")];
//}
//
//function arrayToJSON(member) {
//	return {
//		"firstname": member[0].value,
//		"lastname": member[1].value,
//		"address": member[2].value,
//		"phone": member[3].value
//	}
//}
//
