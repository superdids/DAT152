"use strict";

(function() {

	function lastet() {
//		document.getElementById("newMember").addEventListener("click", newMember, false);

		var url = config.servicesPath + "/endringer";
		var ajax = new AJAXConnection(url);
		ajax.onsuccess = updatedMembers;
		ajax.get(-1);

	};

	function updatedMembers(m) {

		var members = {};
		members = JSON.parse(m);
		members = members.updates;
		
//		console.log(JSON.stringify(members));
		members = members.newMembers;

		myMembers.storeMembers(members);
		
		var table = document.getElementById("memberList");

		var pos = 0;
		for(var x = 0; x < members.length; x++) {
			var row = table.insertRow(++pos);
			row.id = members[x].memberId;

			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			var cell6 = row.insertCell(5);

			cell1.innerHTML = members[x].firstname;
			cell2.innerHTML = members[x].lastname;
			cell3.innerHTML = members[x].address;
			cell4.innerHTML = members[x].phone;

			var button = document.createElement("input");
			button.type = "button";
			button.value= "Endre";
			button.onclick = (function(arg) {
				return function() {
					showEdit(arg);
				}
			})(members[x].memberId);
			
			cell5.appendChild(button);

			var button1 = document.createElement("input");
			button1.type = "button";
			//husk å legge til id som assossieres til knappen..
			button1.value= "Slett";
			//og en lytter...
			cell6.appendChild(button1);
		}
	}

	window.addEventListener("DOMContentLoaded", lastet, false);
})();

function showCreate() {
	document.getElementById("newMember").style.display = "inline";
}

function showEdit(id) {
	document.getElementById("newMember").style.display = "inline";
	var member = myMembers.getMemberById(id);

	myFunctions.setFields([member.firstname, member.lastname, member.address, member.phone]);
}

function submitValues() {
	var values = myFunctions.updateValues();

	if(validator.validate(myFunctions.values))
		myFunctions.toJSON();
	else {
		myFunctions.json = {};
		return;
	}
	//husk å evt legge til feilmeldinger i HTML...

	document.getElementById("newMember").style.display = "none";
	myFunctions.clearFields();
	sendPost();
}

var myFunctions = (function() {
	return {
		json: {},
		values: new Array(4),
		inputId: ["fName", "lName", "address", "phone"],
		updateValues: function() {
			for(var x = 0; x < this.inputId.length; x++) {
				this.values[x] = document.getElementById(this.inputId[x]).value;
			}
		}, 
		clearFields: function() {
			for(var x = 0; x < this.inputId.length; x++) {
				document.getElementById(this.inputId[x]).value = "";
			}
		},
		setFields: function(arg) {
			for(var x = 0; x < this.inputId.length; x++) {
				document.getElementById(this.inputId[x]).value = arg[x];
			}
		},
		toJSON: function() {
			var obj = {};
			obj.member = {};
			obj.member.firstname = this.values[0];
			obj.member.lastname = this.values[1];
			obj.member.address = this.values[2];
			obj.member.phone = parseInt(this.values[3]);
			this.json = obj;
		}
	};
})();

var validator = (function() {
	return {
		validate: function(values) {
			return values[0] != "" && values[1] != ""
				&& values[2] != "" && values[3] != "";
		}
	}
})();

var config = (function() {
	return {
		servicesPath: 'http://localhost:8080/Mservices/data' 
	};
})();


function sendPost() {
	var url = config.servicesPath + "/medlem";
	var ajax = new AJAXConnection(url);
	ajax.onsuccess = postSuccess;
	ajax.post(myFunctions.json);
}

function postSuccess(data) {
	
	var table = document.getElementById("memberList");
	var member = myFunctions.json;
	member = member.member;
	var pos = table.rows.length;
	var row = table.insertRow(pos);
	data = JSON.parse(data);
	row.id = data.updatedMember.memberId;
	
	
	console.log("asd");

	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);

	cell1.innerHTML = member.firstname;
	cell2.innerHTML = member.lastname;
	cell3.innerHTML = member.address;
	cell4.innerHTML = member.phone;

	var button = document.createElement("input");
	button.type = "button";
	button.value= "Endre";

	cell5.appendChild(button);

	var button1 = document.createElement("input");
	button1.type = "button";
	//husk å legge til id som assossieres til knappen..
	button1.value= "Slett";
	//og en lytter...
	cell6.appendChild(button1);
}