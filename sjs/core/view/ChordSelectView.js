( function ( window, $, Events, CONST ){
	"use strict";


	//---------------------------------------------------------------
	//---------------------- Constructor ----------------------------
	//---------------------------------------------------------------


	/**
	 * ChordSelect view class
	 * @param {jQuery DOM Object} ui
	 * @public
	 */
	var ChordSelectView = function ( ui ) {
		this.ui = ui;

		// UI Bindings
		this.ui.on( CONST.UI_BIND_TYPE, '.btn', $.proxy(this._onUIClick, this));

		// Event Subscriptions
		Events.subscribe (CONST.DATA_EVENT_NAME_1, $.proxy(this._onChordSelectDataEvent, this));
	};


	//---------------------------------------------------------------
	//------------------------ Methods ------------------------------
	//---------------------------------------------------------------


	var p = ChordSelectView.prototype;


	//---------------------------------------------------------------
	//------------------------ Internal -----------------------------
	//---------------------------------------------------------------


	/**
	 * Handler on UI interaction
	 * @param {Event} e [UI Event]
	 * @private
	 */
	p.onUIClick = function (e) {
		console.log ( 'ChordSelectView::onChordSelectDataEvent -', data );
		Events.trigger ( CONST.UI_EVENT_NAME_1 );
	};

	/**
	 * Handler when sample data event
	 * @param {String} data [ChordSelect data from model]
	 * @private
	 */
	p.onChordSelectDataEvent = function ( data ) {
		console.log ( 'ChordSelectView::onChordSelectDataEvent -', data );
	};


	window.ChordSelectView = ChordSelectView;

}(window, jQuery, Events, CONST));



