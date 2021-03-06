
var ip = "127.0.0.1";
var port = 8080;
var address = "http://" + ip + ":" + port + "/service/rest/hello";
var total = 0;
var nameId = "iname";
var ageId = "iage";

window.onload = function() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4) {
			var res = JSON.parse(xmlhttp.responseText);
			console.log(JSON.stringify(res));
			var table = document.getElementById("tabell");

			for(var x = 0; x < res.length; x++) {
				var row = table.insertRow(++total);

				row.id = res[x].id;

				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);

				cell1.innerHTML = res[x].id;
				cell2.innerHTML = res[x].name;
				cell3.innerHTML = res[x].age;

				var button = createButton(res[x].id);

				cell4.appendChild(button);
			}
		}
	}
	xmlhttp.open("GET", address+"/requestList", true);
	xmlhttp.send();



}

function createButton(id) {
	var button = document.createElement("input");
	button.type = "button";

	button.value = "Delete";
	button.onclick = (function(arg) {
		return function() {
			return deletePressed(arg);
		}
	})(id);

	return button;
}

function deletePressed(id) {
	alert("Requested to delete id: " + id + ". However, I have not implemented such functionality yet...");
}

function buttonPressed() {
	var form = document.forms[0];
	var elem = form.elements;
	if(validate(elem)) {
		update(elem[0].value, elem[1].value);
	} 
}

function validate(input) {
	var name = input[0].value;
	var age = input[1].value;
	var validName = false;
	if(name.length == 0) {
		setMsg(nameId, "You didnt specify a name", "red");
	} else {
		validName = true;
		setMsg(nameId, "Success", "green");
	}

	if(isNaN(age) || age == "") {
		setMsg(ageId, "You didnt specify any number", "red");
	} else if(age < 0) {
		setMsg(ageId, "You cant be younger than zero years.", "red");
	} else if(age > 120) {
		setMsg(ageId, "I doubt you are older than 120...", "red");
	} else {
		setMsg(ageId, "Success!", "green");
		if(validName) { return true; }
	}
	return false;
}

function setMsg(a,b,c) {
	document.getElementById(a).innerHTML = b;
	document.getElementById(a).style.color = c;
}

function update(name, age) {
	var data = {};
	data.id = null;
	data.name = name;
	data.age = parseInt(age);
	
//	alert(JSON.stringify(data));
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4) {
			var res = JSON.parse(xmlhttp.responseText);
			var table = document.getElementById("tabell");

			var row = table.insertRow(++total);

			row.id = res.id;

			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);

			cell1.innerHTML = res.id;
			cell2.innerHTML = res.name;
			cell3.innerHTML = res.age;

			var button = createButton(res.id);

			cell4.appendChild(button);

		}
	}
	
	xmlhttp.open("POST", address+"/createPerson", true);
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify(data));
}

