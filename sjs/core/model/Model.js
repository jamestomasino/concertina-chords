( function ( window, $, Events, CONST ){
	"use strict";

	//---------------------------------------------------------------
	//---------------------- Constructor ----------------------------
	//---------------------------------------------------------------

	/**
	 *  data model
	 * @public
	 */
	var Model = function () {

		// To be used to calculate notes in chord
		this._notes = [ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ];
		this._majorInterval = [ 0, 4, 7 ];
		this._minorInterval = [ 0, 3, 7 ];
		this._keyRegExp = /([A-G](#)?)/;

		this._key = "C";
		this._direction = CONST.DIR_PUSH;

		// Configuration of the notes on my concertina
		this._drawNotes = [ "F", "A#", "D#", "G", "A#", "G", "B",  "D",  "F", "A", "A", "F#", "A",  "C", "E" ];
		this._pushNotes = [ "E", "A", "C#", "A", "G#", "C", "G", "C",  "E", "G", "B", "D", "G",  "B", "D"];

	};


	//---------------------------------------------------------------
	//------------------------ Methods ------------------------------
	//---------------------------------------------------------------


	var p = Model.prototype;

	/**
	 * Start the application precessing
	 * @public
	 */
	p.applicationStart = function () {
		Events.trigger (CONST.APPLICATION_READY);
		Events.trigger (CONST.DATA_DIR_SET, this._direction);
		Events.trigger (CONST.DATA_KEY_SET, this._key);
		this._calculateNotes();
	};


	//---------------------------------------------------------------
	//------------------------ GET/SET ------------------------------
	//---------------------------------------------------------------

	/**
	 * Set the direction of the concertina
	 * @param {String} dir [direction of concertina (draw or push)]
	 * @public
	 */
	p.setDirection = function ( dir ) {
		switch (dir){
			case CONST.DIR_DRAW:
			case CONST.DIR_PUSH:
				this._direction = dir;
				Events.trigger ( CONST.DATA_DIR_SET, this._direction );
				break;
			case 'draw':
				this._direction = CONST.DIR_DRAW;
				Events.trigger ( CONST.DATA_DIR_SET, this._direction );
				break;
			case 'push':
				this._direction = CONST.DIR_PUSH;
				Events.trigger ( CONST.DATA_DIR_SET, this._direction );
				break;
		}
	};

	//---------------------------------------------------------------
	//------------------------ Internal -----------------------------
	//---------------------------------------------------------------

	/**
	 * Calculate which notes are active
	 * @private
	 */
	p._calculateNotes = function () {
		var interval = (this._key.charAt(this._key.length - 1).toLowerCase() == 'm') ? this._minorInterval : this._majorInterval;
		var notes = (this._direction == CONST.DIR_DRAW) ? this._drawNotes : this._pushNotes;
		var root = this._key.match(this._keyRegExp)[1];
		var matches = [root];
		if (root) {
			var startIndex = this._notes.indexOf(root);
			if (startIndex != -1){
				for (var i = 1; i < interval.length; ++i) {
					var sumIndex = startIndex + interval[i];
					if ( sumIndex > this._notes.length - 1 ) {
						var diff = this._notes.length - startIndex;
						sumIndex = interval[i] - diff;
					}
					matches.push ( this._notes[sumIndex] );
				}
				var keys = [];

				for ( i = 0; i < notes.length; ++i ) {
					if ( notes[i] === matches[0] ) {
						keys.push ('root');
					} else if ( matches.indexOf(notes[i]) !== -1 ) {
						keys.push ('closed');
					} else {
						keys.push ('open');
					}
				}
				Events.trigger (CONST.DATA_NOTES_SET, [keys]);
			}
		}
	};

	window.Model = Model;

}(window, jQuery, Events, CONST ));
