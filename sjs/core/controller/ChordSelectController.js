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
		Events.subscribe ( CONST.UI_DIR_SELECT, $.proxy( this._onDirSelect, this ) );
		Events.subscribe ( CONST.UI_CHORT_SELECT, $.proxy( this._onChordChange, this ) );

	};


	//---------------------------------------------------------------
	//------------------------ Methods ------------------------------
	//---------------------------------------------------------------


	var p = ChordSelectController.prototype;


	//---------------------------------------------------------------
	//------------------------ Internal -----------------------------
	//---------------------------------------------------------------


	/**
	 * Direction Selected
	 * @param {Event} e [UI event]
	 * @private
	 */
	p._onDirSelect = function (dir) {
		model.setDirection ( dir );
	};

	/**
	 * Chord Changed
	 * @param {String} chord [new chord value]
	 * @private
	 */
	p._onChordChange = function (chord) {
		model.setChord (chord);
	};



	window.ChordSelectController = ChordSelectController;

}(window, jQuery, Events, CONST));
