//Programmet använder ett antal olika JavaScript-metoder 
//för webbläsar-objektet Window.

$(document).ready(function() {
  var name = prompt('Skriv in ditt namn nedan:', '');
  var correctName = confirm('Skrev du rätt: ' + name + '?');
  
  if(!correctName) {
	  name = prompt('Skriv in ditt namn på nytt:', '');
  }
    alert('Du har angivit att du heter ' + name);
    $('#name').text(name);

    var newWindow;
	$('#openWindow').click(function() {
		newWindow = window.open('', 'newWindow', 'width=300,height=200');
		newWindow.document.write('<p>Det här är ett nytt fönster!</p>');
	});
	
	$('#closeWindow').click(function() {
		newWindow.close();
	});
	
	 var timeout = setTimeout(function() {
		 newWindow = window.open('', 'newWindow', 'width=300,height=200');
		 newWindow.document.write('<p>Det här fönstret öppnades automatiskt!</p>'); 
		 }, 30000);
		 
	$('#clearTimeout').click(function() {
		clearTimeout(timeout);
	});
	
	var interval = setInterval(function() { 
		var color =  '#'+Math.floor(Math.random()*16777215).toString(16);
		$('body').css('backgroundColor' , color);
		}, 10000);
		
	$('#clearInterval').click(function() {
		clearInterval(interval);
	});
  
});
