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

		// Directions
		this.direction = ui.find('#direction');
		this.draw = this.direction.find('#draw');
		this.push = this.direction.find('#push');

		// Chord input
		this.key = ui.find('#key');
		this.keyInput = this.key.find('input');

		// UI Bindings
		this.draw.on( CONST.UI_BIND_TYPE, $.proxy(this._onDrawClick, this));
		this.push.on( CONST.UI_BIND_TYPE, $.proxy(this._onPushClick, this));
		this.keyInput.on ( 'change', $.proxy(this._onChordChange, this));

		// Event Subscriptions
		Events.subscribe (CONST.DATA_DIR_SET, $.proxy(this._onDirectionSet, this));
		Events.subscribe (CONST.DATA_CHORD_SET, $.proxy(this._onChordSet, this));

	};


	//---------------------------------------------------------------
	//------------------------ Methods ------------------------------
	//---------------------------------------------------------------


	var p = ChordSelectView.prototype;


	//---------------------------------------------------------------
	//------------------------ Internal -----------------------------
	//---------------------------------------------------------------


	/**
	 * Handler on draw click
	 * @param {Event} e [UI Event]
	 * @private
	 */
	p._onDrawClick = function (e) {
		Events.trigger ( CONST.UI_DIR_SELECT, 'draw' );
	};

	/**
	 * Handler on draw click
	 * @param {Event} e [UI Event]
	 * @private
	 */
	p._onPushClick = function (e) {
		Events.trigger ( CONST.UI_DIR_SELECT, 'push' );
	};


	/**
	 * Handler when contents of key input changes
	 * @private
	 */
	p._onChordChange = function () {
		var keyval = this.keyInput.val();
		Events.trigger ( CONST.UI_CHORT_SELECT, keyval );
	};

	/**
	 * Handler when direction
	 * @param {String} dir [direction of the draw/push]
	 * @private
	 */
	p._onChordSet = function ( key ) {
		this.keyInput.val(key);
		this.keyInput.addClass ('active');
	};

	/**
	 * Handler when direction
	 * @param {String} dir [direction of the draw/push]
	 * @private
	 */
	p._onDirectionSet = function ( dir ) {
		if ( dir == CONST.DIR_DRAW ) {
			this.draw.addClass('active');
			this.push.removeClass('active');
		} else {
			this.push.addClass('active');
			this.draw.removeClass('active');
		}
	};


	window.ChordSelectView = ChordSelectView;

}(window, jQuery, Events, CONST));



