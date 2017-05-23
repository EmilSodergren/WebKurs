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
var previousEraseElement;

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
		
		if ($(window).width() >= 480) {
			context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
		}
		else  {
			// Vid mindre fönster (scrollning)
			 var rect = canvas.getBoundingClientRect();
			 context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
		}
	}
	
	// Rita
	function draw(e) {
		var x;
		var y;
		if (isDrawing) {
			
			if ($(window).width() >= 480) {
				x = e.pageX - canvas.offsetLeft;
				y = e.pageY - canvas.offsetTop;
			}
			else {
				// Vid mindre fönster (scrollning)
				var rect = canvas.getBoundingClientRect();
				x = e.clientX - rect.left;
				y = e.clientY - rect.top;
			}
			
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
	
	// Ändra storlek på canvas
   /*  var canvasJquery = $('#drawingCanvas');
    var contextJquery = canvasJquery.get(0).getContext('2d');
    var container = $(canvasJquery).parent();

    $(window).resize(responsiveCanvas);

    function responsiveCanvas(){
		// save the canvas content as imageURL
        var data=canvas.toDataURL();

		//var scaleHeight = canvas.height/canvas.width;
		
		
        canvasJquery.attr('width', $(container).width() ); //max width
        canvasJquery.attr('height', $(container).height() ); //max height

        //Call a function to redraw other content (texts, images etc)
		// scale and redraw the canvas content
		
		
        var img=new Image();
        img.onload=function(){
            context.drawImage(img,0,0,img.width,img.height,0,0,$(container).width(),$(container).height());
        }
        img.src=data;
		
		context.restore();

    }

    // Initialt anrop
    responsiveCanvas(); */

});

// Byt färg
function changeColor(color, imageElement) {
	context.globalCompositeOperation = "source-over";
	context.strokeStyle = color;
	imageElement.className = "selected";
		
	if (previousColorElement != null) {
		previousColorElement.className = "color";
	}
	previousColorElement = imageElement;
	
	if (previousEraseElement != null) {
		previousEraseElement.className = "color";
	}
	context.save();
}
	
// Sudda 
function eraser(eraseElement){                              
    context.strokeStyle = "rgb(255, 255, 255)";
    context.globalCompositeOperation = "destination-out";  
    context.strokeStyle = ("rgba(255,255,255,255)");
    /* or */
    //context.fillStyle = "rgba(255,0,0,0)";
	
	eraseElement.className = "selected";
	if (previousColorElement != null) {
		previousColorElement.className = "color";
	}
	previousEraseElement = eraseElement;
}

// Tooltips för element med title-attributet
 $(function() {
    $(document).tooltip();
 });
