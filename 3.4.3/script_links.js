//Programmet använder jQuery för att implementera
//att alla externa länkar ska öppnas i ett nytt fönster.

$(document).ready(function() {
	$('a[href^="http://"], a[href^="https://"]').attr('target', '_blank');

});
