( function ( window, $, Events, CONST ){
	"use strict";


	//---------------------------------------------------------------
	//---------------------- Constructor ----------------------------
	//---------------------------------------------------------------


	/**
	 * ChordSelect controller class
	 * @param {Object} model [Reference to the data model]
	 * @public
	 */
	var ChordSelectController = function ( model ) {
		this.model = model;

		// Event Subscriptions
		Events.subscribe ( CONST.UI_EVENT_NAME_1, $.proxy(this._onChordSelectUIEvent, this) );
	};


	//---------------------------------------------------------------
	//------------------------ Methods ------------------------------
	//---------------------------------------------------------------


	var p = ChordSelectController.prototype;


	//---------------------------------------------------------------
	//------------------------ Internal -----------------------------
	//---------------------------------------------------------------


	/**
	 * ChordSelect UI Event Handler
	 * @param {Event} e [UI event]
	 * @private
	 */
	p._onChordSelectUIEvent = function (e) {
		console.log ( 'ChordSelectController::onChordSelectUIEvent');
		model.sampleMethod();
	};


	window.ChordSelectController = ChordSelectController;

}(window, jQuery, Events, CONST));
