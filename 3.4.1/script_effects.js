//Programmet använder olika jQuery-effekter för att  
//visa, gömma, fada in och fada ut HTML-element.

$(document).ready(function() {
	$('#show').click(function(){
        $('#secondHeader').show();
	});
	
   $('#hide').click(function(){
        $('#secondHeader').hide();
    });
	
	 $('#toggle').click(function(){
        $('#firstParagraph').toggle();
    });
	
	 $('h1').click(function(){
		$('#firstImage').fadeToggle();
    });
	
	 $('h2').click(function(){
        $('#secondImage').fadeTo('normal', 0.5);
    });
	
	 $('#firstImage').click(function(){
        $('#thirdParagraph').fadeOut()
    });
	
    $('#secondImage').click(function(){
        $('#thirdParagraph').fadeIn();
    });


});
