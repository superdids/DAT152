"use strict";

var logId = {
		value: "-1"
};

(function() {
	function lastet() {
		var url = config.servicesPath + "/endringer";
		var ajax = new AJAXConnection(url);
		ajax.onsuccess = createRows;
		ajax.get([logId.value]);
	}

	window.addEventListener("DOMContentLoaded", lastet);
})();


function createRows(m) {
	var table = document.getElementById("memberList");
	
	var members = {};
	members = JSON.parse(m);
	members = members.updates.newMembers;
	
	var rowCount = 0;
	for(var x = 0; x < members.length; x++) {
	
		var row = table.insertRow(++rowCount);
		
		
		row.id = "m" + members[x].memberId;
	
		
		addCells(row, members[x]);
	}
}

function updateRow(id, m) {
	var table = document.getElementById("memberList");
}

function appendRow(id, m) {
	var table = document.getElementById("memberList");
	var row = table.insertRow(-1);
	row.id = "m" + id;
	m.memberId = id;
	addCells(row, m);
}

function addCells(row, m) {

	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);
	var cell4 = row.insertCell(4);
	var cell5 = row.insertCell(5);
	
	cell0.innerHTML = m.firstname;
	cell1.innerHTML = m.lastname;
	cell2.innerHTML = m.address;
	cell3.innerHTML = m.phone;
	
	var button0 = document.createElement("input");
	button0.type = "button";
	button0.value = "Endre";
	button0.onclick = (function(arg) {
		return function() {
			edit(arg);
		}
	})(m.memberId);
	
	var button1 = document.createElement("input");
	button1.type = "button";
	button1.value = "Slett";
	button1.onclick = (function(arg) {
		return function() {
			deleteMember(arg);
		}
	})(m.memberId);
	
	cell4.appendChild(button0);
	cell5.appendChild(button1);
}

function edit(id) {
	var vindu = new Vindu("oppgave01member.html", window, id);
	var vindaug = vindu.open();

	var row = document.getElementById("m" + id);

	vindaug.onload = function() {
		this.document.getElementById("fName").value = row.cells[0].innerHTML;
		this.document.getElementById("lName").value = row.cells[1].innerHTML;
		this.document.getElementById("address").value = row.cells[2].innerHTML;
		this.document.getElementById("phone").value = row.cells[3].innerHTML;	
	}
}

function create() {
	var vindu = new Vindu("oppgave01member.html", window);
	var vindaug = vindu.open();
}



function put(id,data,ctx) {
	var url = config.servicesPath + "/medlem";
	var ajax = new AJAXConnection(url);
	
	ajax.onsuccess =  function(obj) {
		obj = JSON.parse(obj);
		if(obj.updatedMember.status) {
			updateTableRow(id, data);
			ctx.window.close();
		}
	}
	
	ajax.put([id],{"member": data});
}
function post(data, ctx) {
	var url = config.servicesPath + "/medlem";
	var ajax = new AJAXConnection(url);
	
	ajax.onsuccess =  function(obj) {
		obj = JSON.parse(obj);
		obj = obj.updatedMember;
		if(obj.status) {
			appendRow(obj.memberId, data);
			ctx.window.close();
		}
	}
//	alert(JSON.stringify(data));
//	data.memberId = null;
	ajax.post([], {"member": data});
}

function updateTableRow(id, data) {
	var row = document.getElementById("m"+id);
	row.cells[0].innerHTML = data.firstname;
	row.cells[1].innerHTML = data.lastname;
	row.cells[2].innerHTML = data.address;
	row.cells[3].innerHTML = data.phone;
}

function deleteMember(id) {
	var url = config.servicesPath + "/medlem";
	var ajax = new AJAXConnection(url);
	ajax.onsuccess = function(obj) {
		obj = JSON.parse(obj);
		if(obj.updatedMember.status) {
			var table = document.getElementById("memberList");
			var list = table.rows;
			
			for(var x = 1; x < list.length; x++) {
				if(list[x].id == "m"+id) {
					table.deleteRow(x);
					break;
				}
			}
		}
	}
	ajax.del([id]);
}

