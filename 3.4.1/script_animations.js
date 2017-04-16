//Programmet introducerar till jQuery-animationer, och 
//visar även exempel på easing och callback-funktion.

$(document).ready(function() {
	var fontsize = 16;
	$('#secondParagraph').hide();
	
	$('#animate').click(function(){
        $('#firstParagraph').animate(
		{
			width: '-=50px',
			fontSize: '+=1px'
		},
		2000,
		'swing',
		function() {
			fontsize += 1;
			$('#paragraphSize').text(fontsize);
			$('#secondParagraph').show();
		}
		);
	});

});
