"use strict";

function Vindu(path, parent, id) {
	this._width = 100;
	this._height = 100;
	this._path = path || null;
	this._parent = parent || null;
//	this._method = method;
	this._id = id || null;
	this._thisVin = null;

}

//this.document.getElementById("submitMember").onclick = function() {
//var data = do_me.call(thisObj, id);
//put(id,data, thisObj);
//}	

Vindu.prototype.open = function() {
	try {
		this._thisVin = parent.window.open(this._path, 
				"Vindu", 
				"width=" + this._width,
				"height=" + this._height);

		var submit = (function() {
			this._thisVin.document.getElementById("submitMember").onclick = (function() {
				
				if(this._id) this.update();
				else this.add();

//				this.close();
			}).bind(this);
		}).bind(this);

		this._thisVin.addEventListener("DOMContentLoaded", submit, true);


	} catch(e) {
		console.log(e);
	}
	return this._thisVin;
}



Vindu.prototype.close = function() {
	try {
//		this.window.close();
		this._thisVin.window.close();
	} catch(e) {
		console.log(e);
	}
}

Vindu.prototype.update = function() {
	this._parent.put(this._id, this.getValues(), this._thisVin);
}

Vindu.prototype.add = function() {
	this._parent.post(this.getValues(), this._thisVin);
}

Vindu.prototype.getValues = function() {
//	alert(document);
	var fName = this._thisVin.document.getElementById("fName").value;
	var lName = this._thisVin.document.getElementById("lName").value;
	var address = this._thisVin.document.getElementById("address").value;
	var phone = this._thisVin.document.getElementById("phone").value;

	return {
		"firstname": fName,
		"lastname": lName,
		"address": address,
		"phone": phone
	};
}