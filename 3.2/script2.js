//Programmet använder den kombinerade jQuery-händelsen hover.
//Det använder även händelse-objektet event och dess egenskaper screenX och screenY.

$(document).ready(function() {
	
   $('#firstHeader').hover(function() {
        $(this).css('background-color', '#98C6DB')
			   .css('font-size', '40px');
        }, function(){
        $(this).css('background-color', '#2AAADB');
    });
	
	 $(document).mousemove(function(event) { 
        $('#spanEvent').text('X: ' + event.screenX + ', Y: ' + event.screenY); 
    });
   
});
