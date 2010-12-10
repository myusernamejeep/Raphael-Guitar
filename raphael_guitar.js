window.onload = function () {
	//--------------Editable Stuff-------------------------------
	
	// ID of containing Div
	var div_id = 'guitar';
	
	var neck_length = 700;
	var neck_height = 100;
	
	//------------------------------------------------------------

	// Creates canvas 700 x 200 in above defined div
	var paper = Raphael(div_id, 2000, 200);

	var scale_length = neck_length;
	var multiplier = 17.817;
	
	// Neck
	var neck = paper.rect(0,0,neck_length,neck_height);
	
	var last_fret = 0;
	var frets = [];
	for (i=1;i<=22;i++) {
		// formula for determining the next fret
		var scale_formula = ((scale_length-last_fret)/multiplier)+last_fret;
		
		// add the fret in the proper location
		frets[i] = paper.rect(scale_formula,0,3,neck_height);
		
		// get some position markers in there
		if (i==3 || i ==5 || i ==7 || i==9) {
			var fret_markers = paper.circle(scale_formula, neck_height/2, 8);
			
		}
		
		// define the last fret distance for the next go around
		last_fret = ((scale_length-scale_formula)/multiplier)+scale_formula;
	}
	
	//strings
	for (i=1;i<=6;i++) {
		// string paths here
		//

	}
	
	// highlight fret example
	frets[1].attr("fill", "yellow");


};
