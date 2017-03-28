//Programmet använder jQuery-funktionen preventDefault() för att stoppa en händelses normala beteende.
//Det tar även bort en händelse med jQuery-funktionen off().

$(document).ready(function() {
	
   $('#evaluationForm').submit(function(event) {
	event.preventDefault();
   });
   
    $('input[type="reset"]').mouseover(function() {
        alert('Skriv först in en text i fältet!');
    });
	
	$('#evaluation').click(function() {
        $('input[type="reset"]').off('mouseover');
    });
   
});
