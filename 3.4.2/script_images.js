//Programmet använder jQuery för att implementera
//bildbyte och bildbyte med rollover-effekt.

$(document).ready(function() {
	var newFirstImage = new Image();
	newFirstImage.src = '../3.4.1/Bakgrund7.png';
	var newSecondImage = new Image();
	newSecondImage.src = 'Bakgrund8.png';
	var image = $('#secondImage');
	var oldSrc = $('#secondImage').attr('src');
	
	$('#firstImage').attr('src', newFirstImage.src);
	
	$('#secondImage').hover(
	function() {
		$(this).attr('src', newSecondImage.src);
	},
	function() {
		$(this).attr('src', oldSrc);
	});

});
