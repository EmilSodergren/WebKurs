//Programmet använder jQuery för att använda DOM-objektet 
//för att utföra olika operationer på HTML-element på en webbsida 
//och reagera på olika händelser.

$(document).ready(function() {
  var header = $('#firstHeader');
  var content = $('#content');
  var removeParagraph = $('#paragraphToRemove');
  var classParagraph = $('#paragraphChangeClass');
  var informationParagraph = $('#paragraphInformation');
  
  header.css('fontSize', '250%');
  content.append('<p>Den här paragrafen har lagts till via jQuery.</p>');
  removeParagraph.remove();
  classParagraph.addClass('new').removeClass('old');
  var newParagraph = informationParagraph.clone();
  newParagraph.attr('id', 'paragraphNew');
  content.append(newParagraph);
  
  $('body').dblclick(function() {
	  header.css('backgroundColor', 'yellow');
  });
  
  $(window).resize(function() {
	  content.css('border', 'solid')
			.css('padding', '10px');
  });
  
  $('#helpText').hide();
  $('#link').focus(function() {
        $('#helpText').css('display', 'inline').fadeOut(3000);
    });
	
  $('#textbox').keypress(function() {
        $('#secondHeader').text($('#textbox').val());
    });	
  
});
