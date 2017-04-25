//Programmet använder jQuery-pluginet jQueryUI för att 
//implementera tabbade paneler och tooltips.

$(document).ready(function() {
	$('#tabbedPanel').tabs({
		heightStyle: 'auto',
		show: 'slideDown',
		hide: 'slideUp'
	});
	
	$('[title]').tooltip({
		track: true
	});

});
