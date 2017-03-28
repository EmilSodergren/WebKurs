//Programmet introducerar grunderna i JavaScript, genom att använda följande JavaScript-objekt:
//Array, Boolean, Date, Math, Number, String, RegExp, Global

var days = [ 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag', 'söndag' ];		  
var today = new Date();		
var hour = today.getHours();
var hoursDay = 24;
var minutesHour = '60 minuter';
var minutes = today.getMinutes();
var minutesLeft = parseInt(minutesHour) - minutes;
var percentageHoursPassed = Math.round((hour/hoursDay) * 100);
var halfDayLeft = false;
var lastDay = '2017/12/31';
var changeDayCharacter = /\//g;
lastDay = lastDay.replace(changeDayCharacter, '-');

document.write('<p>Veckans första dag är <strong>');			  
document.write(days[0] + '</strong>.</p>');	

if(today.getDay() == 1) {
	document.write('<p>Det är <strong>måndag</strong> idag.</p>');	
}
else {
	document.write('<p>Det är inte <strong>måndag</strong> idag.</p>');	
}	

document.write('<p>Dagen är inne på den <strong>' + hour + 'e</strong> timmen av dygnets ' + hoursDay + ' timmar.</p>');

document.write('<p>Det är <strong>' + minutesLeft + '</strong> minuter kvar innan klockan slår ' + Number(hour + 1) + '.</p>');

if(percentageHoursPassed > 50) {
	document.write('<p><strong>Mer än halva</strong> dygnet har passerat.</p>');	
}
else {
	document.write('<p><strong>Minst halva</strong> dygnet återstår.</p>');	
	halfDayLeft = true;
}

if (!halfDayLeft) {
	document.write('<p><strong>Snart</strong> är det en ny dag.</p>');	
}

document.write('<p>Den sista dagen på året är <strong>' + lastDay + '</strong>.</p>');




