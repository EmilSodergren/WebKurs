//Programmet använder jQuery för att implementera
//dynamisk grafik med HTML5-elementet canvas.
//OBS att filerna har laggts upp på DSV:s webbserver för
//att spara-funktionen ska fungera.
//Programmet nås på webben via 
//https://people.dsv.su.se/~ansa3634/3_4_2/Canvas.html.

var canvas;
var context;
var previousColorElement;
var previousThicknessElement;

$(document).ready(function() {
	$('#saveCanvasArea').hide();
	canvas = document.getElementById("drawingCanvas");
	context = canvas.getContext("2d");
	//context.lineWidth = 5;
	
	var isDrawing = false;
		
	// Börja rita
	function startDrawing(e) {
		isDrawing = true;
		context.beginPath();
		context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
	}
	
	// Rita
	function draw(e) {
		if (isDrawing) {
			var x = e.pageX - canvas.offsetLeft;
			var y = e.pageY - canvas.offsetTop;
			
			context.lineTo(x,y);
			context.stroke();
		}
	}
	
	// Sluta rita
	function stopDrawing() {
		isDrawing = false;
	}
	
	// Rensa bilden
	$('#clear').click(function(){
		context.clearRect(0, 0, canvas.width, canvas.height);
	});
	
	// Events som behövs för att rita
	canvas.onmousedown = startDrawing;
	canvas.onmouseup = stopDrawing;
	canvas.onmouseout = stopDrawing;
	canvas.onmousemove = draw;

	// Spara bilden
	$('#save').click(function(){
		var url = canvas.toDataURL("image/png");
		var canvasCopy = document.getElementById("saveCanvas");
		canvasCopy.src = url;
		$('#saveCanvasArea').show();
	});	
	
	// Byt penntjocklek
	$(function() {
		$('#thickness').selectmenu({
			change: function(event, data) {
				context.lineWidth = $('#thickness').val();
			}
		});
	});
	
});

// Byt färg
function changeColor(color, imageElement) {
	context.strokeStyle = color;
	imageElement.className = "selected";
		
	if (previousColorElement != null) {
		previousColorElement.className = "color";
	}
	previousColorElement = imageElement;
}
	
// Sudda - fungerar ej
function eraseDraw(){
canvas.onmousedown=erasedown;
canvas.onmouseup=eraseup;
canvas.onmousemove=erasemove;
var drag5 =false;

function erasedown(e){
  drag5=true;
}

function eraseup(e){
drag5=false;
}

function erasemove(e){
if(drag5){
x=e.x;
y=e.y;
context.clearRect(x,y,20,20);

}}}

