//= require_tree ./model/
//= require_tree ./view/
//= require_tree ./controller/

var model = new Model();
var chordSelectController = new ChordSelectController ( model );
var chordSelectView = new ChordSelectView( $('#chord_select') );
var concertinaView = new ConcertinaView ( $('#concertina') );

$(function () {
	model.applicationStart();
});
