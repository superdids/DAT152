"use strict";

function Controller(parent) {
	this._parent = parent;
	this._gui = new GUIManager(this, -1);
	this._http = new HTTPOperations("/endringer", this._gui.show.bind(this._gui));
}

Controller.prototype.start = function() {
	this._http.getMembersByLogId(this._gui.getLogId());
//	this.refresh(this._gui);
	this.refresh();
}

//Controller.prototype.refresh = function(gui) {
Controller.prototype.refresh = function() {
	this._parent.setTimeout((function() {
		this._http.getMembersByLogId(this._gui.getLogId());
		this.refresh();
	}).bind(this), 2000);
}

Controller.prototype.buttonEdit = function(memberId) {
	return (function() {
		this._gui.editMemberDialog(memberId);
	}).bind(this);
}

Controller.prototype.buttonDelete = function(id) {
	return function() {
		var http = new HTTPOperations("/medlem", removeMember);
		http.deleteMemberById(id);
	}
}

Controller.prototype.put = function() {
//	var http = new HTTPOperations("/medlem", this._gui.hideInputs.bind(this._gui));
	alert(this._gui);
	var http = new HTTPOperations("/medlem", this._gui.hideInputs);
	var fields = this.inputs();
	var member = arrayToJSON(fields); //JSON OBJECT

	http.updateMember(id, member);
	var gui = new GUIManager();
	member.memberId = id;
	gui.updateMember(member);
}

Controller.prototype.inputs = function() {
	function el(val) { return document.getElementById(val); };

//	see oppgave01.html under the div id="manageMember"
	return [el("fName"), el("lName"), el("address"), el("phone")];
}

Controller.prototype.arrayToJSON = function(member) {
	return {
		"firstname": member[0].value,
		"lastname": member[1].value,
		"address": member[2].value,
		"phone": member[3].value
	}
}