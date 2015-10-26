"use strict";
/**
 * Konstruktørfunksjon med tilhørende prototype funksjoner for å
 * kjøre AJAX-forespørsler.
 */

/**
 * Selve konstruktørfunksjonen utfører følgende:
 * - Instansiering av referanse til konstruktørfunksjonen AJAXConnection
 * - Overskriver AJAXConnection-egenskapen onsuccess til andre parameter
 *   av denne konstruktørfunksjonen.
 */
function HTTPOperations(dynamic, onsuccess) {
	this._ajax = new AJAXConnection(config.servicesPath + dynamic);
	this._ajax.onsuccess = onsuccess;
}

/**
 * Sender forespørsel om å opprette et medlem, vha HTTP POST
 * @param member JSON objektet som skal opprettes.
 */
HTTPOperations.prototype.createMember = function(member) {
	this._ajax.post([], {"member": member});
}

/**
 * Sender forespørsel om å motta endringer basert på logId,
 * vha HTTP GET
 * @param logId med verdi > -2
 */
HTTPOperations.prototype.getMembersByLogId = function(logId) {	
	this._ajax.get([logId]);
}

/**
 * Sender forespørsel om å oppdatere et medlem, vha HTTP PUT
 * @param id Unik identifikasjon til medlemmet
 * @param member Medlemmet som skal oppdateres
 */
HTTPOperations.prototype.updateMember = function(id, member) {
	this._ajax.put([id], {"member": member});
}

/**
 * Sender forespørsel om å slette et medlem, vha HTTP DELETE
 * @param id Unik identifikasjon av medlemmet
 */
HTTPOperations.prototype.deleteMemberById = function(id) {
	this._ajax.del([id]);
}