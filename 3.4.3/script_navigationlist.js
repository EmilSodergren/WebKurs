//Programmet använder jQuery-pluginet SmartMenus för att skapa
//en animerad navigationslist.

$(document).ready(function() {
	$('.sm').smartmenus({
		showFunction: function($ul, complete) { 
			$ul.fadeIn(350, complete); 
		},
		hideFunction: function($ul, complete) { 
			$ul.fadeOut(350, complete); 
		}
	});
});
