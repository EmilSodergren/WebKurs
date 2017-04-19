//Programmet använder jQuery för att implementera
//dynamisk grafik med HTML5-elementet canvas.
//OBS att filerna har laggts upp på DSV:s webbserver för
//att spara-funktionen ska fungera.
//Programmet nås på webben via 
//https://people.dsv.su.se/~ansa3634/3_4_2/Canvas.html.

$(document).ready(function() {
	$('#saveCanvasArea').hide();
	var canvas = document.getElementById("drawingCanvas");
	var context = canvas.getContext("2d");
	context.lineWidth = 5;

	//straight lines
	context.moveTo(50,50);
	context.lineTo(200,70);
	context.lineTo(150,100);
	context.lineTo(90,100);
	context.closePath();
	context.stroke();
	
	//curved line
	var centerX = 300;
	var centerY = 200;
	var radius = 60;
	var startingAngle = 1.25 * Math.PI;
	var endingAngle = 1.75 * Math.PI;
	context.moveTo(300,200);
	context.arc(centerX, centerY, radius, startingAngle, endingAngle);
	context.closePath();
	context.stroke();
	
	//bezier curve
	context.moveTo(420,240);
	var control1_x = 144;
	var control1_y = 320;
	var control2_x = 478;
	var control2_y = 411;
	var endPoint_x = 296;
	var endPoint_y = 378;
	context.bezierCurveTo(control1_x, control1_y, control2_x, control2_y, endPoint_x, endPoint_y);
	context.stroke();
	
	//shapes
	context.beginPath();
	context.rect(450, 30, 100, 150);
	context.fillStyle = "green";
	context.fill();
	context.stroke();
	
	context.beginPath();
	var img = new Image();
	img.src = 'Bakgrund9.png';
	var pattern = context.createPattern(img, "repeat");
	context.fillStyle = pattern;
	context.arc(110,220,60,0,2*Math.PI);
	context.fill();
	context.stroke();
	
	var gradient = context.createLinearGradient(0,0,200,0);
	gradient.addColorStop(0,"red");
	gradient.addColorStop(0.5,"blue");
	gradient.addColorStop(1,"red");
	context.fillStyle = gradient;
	context.fillRect(20,310,150,80);

	//text
	var currentdate = new Date();
	var datetime = currentdate.getFullYear() + "/"+(currentdate.getMonth()+1) + "/" + currentdate.getDate();
	context.font = "30px Helvetica";
	context.lineWidth = "1";
	context.strokeStyle = "orange";
	context.strokeText(datetime, 250, 100);	
	
	//shadows
	context.beginPath();
	context.fillStyle = "yellow";
	context.shadowColor = "grey";
	context.shadowOffsetX = 20;
	context.shadowOffsetY = 20;
	context.shadowBlur = 5;
	context.rect(500, 230, 90, 120);
	context.fill();

	//transparency
	context.beginPath();
	context.fillStyle = "rgba(100,150,185,0.5)";
	context.moveTo(190,270);
	context.lineTo(270,220);
	context.lineTo(350,220);
	context.closePath();
	context.fill();
	context.stroke();
	
	//bitmap image
	context.beginPath();
	context.shadowColor = "transparent";
	context.shadowOffsetX = 0;
	context.shadowOffsetY = 0;
	var img2 = new Image();
	img2.src = 'Bakgrund10.png';
	context.drawImage(img2, 370,270,75,75);
	
	//save image
	$('#save').click(function(){
		var url = canvas.toDataURL("image/png");
		var canvasCopy = document.getElementById("saveCanvas");
		canvasCopy.src = url;
		$('#saveCanvasArea').show();
	});	
	
});

