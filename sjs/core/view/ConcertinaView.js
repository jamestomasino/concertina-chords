( function ( window, $, Events, CONST ){
	"use strict";


	//---------------------------------------------------------------
	//---------------------- Constructor ----------------------------
	//---------------------------------------------------------------


	/**
	 * Concertina view class
	 * @param {jQuery DOM Object} ui
	 * @public
	 */
	var ConcertinaView = function ( ui ) {
		this.ui = ui;
		this.notes = this.ui.find('.buttons').find('li');

		// Event Subscriptions
		Events.subscribe (CONST.DATA_NOTES_SET, $.proxy(this._onNotesSet, this));
	};


	//---------------------------------------------------------------
	//------------------------ Methods ------------------------------
	//---------------------------------------------------------------


	var p = ConcertinaView.prototype;


	//---------------------------------------------------------------
	//------------------------ Internal -----------------------------
	//---------------------------------------------------------------


	/**
	 * Highlight proper notes for notes set
	 * @param {Array} notes [array of notes to highlight]
	 * @private
	 */
	p._onNotesSet = function ( keys ) {
		this._resetNotes();
		var i = keys.length; while (i--) {
			switch (keys[i]) {
				case 'root':
					this.notes.eq(i).addClass('root');
					break;
				case 'closed':
					this.notes.eq(i).addClass('closed');
					break;
				default:
					break;
			}
		}
	};

	/**
	 * Reset all classes on notes to clear display
	 * @private
	 */
	p._resetNotes = function () {
		this.notes.removeClass();
	};

	window.ConcertinaView = ConcertinaView;

}(window, jQuery, Events, CONST));



