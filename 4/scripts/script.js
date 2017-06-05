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
var previousToolElement;

$(document).ready(function() {
	$('#saveCanvasArea').hide();
	
	// Visa rätt spara-knapp beroende på webbläsare
	if (navigator.userAgent.match(/msie|trident/i) || (navigator.userAgent.indexOf("Edge") > -1)) {
          $('#save').hide();
    }
	else {
		$('#saveIe').hide();
	}
	
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
	$('#pen').click(function(){
		context.globalAlpha = 1;
		canvas.onmousedown = startDrawing;
		canvas.onmouseup = stopDrawing;
		canvas.onmouseout = stopDrawing;
		canvas.onmousemove = draw;
		
		$(this).removeClass("tool").addClass("selected");
		if (previousToolElement != null) {
			previousToolElement.className = "tool";
		}
		previousToolElement = this;
	});	
	
	// krita
	var crayonTexture = new Image();
	crayonTexture.src = 'images/crayon.png';
	$('#crayon').click(function(){
		pattern(this);
		$(this).removeClass("tool").addClass("selected");
		if (previousToolElement != null) {
			previousToolElement.className = "tool";
		}
		previousToolElement = this;
	});	
	
	// hjärta
	var heartTexture = new Image();
	heartTexture.src = 'images/heart.png';
	$('#heart').click(function(){
		pattern(this);
		//context.globalAlpha = 0.4;
		$(this).removeClass("tool").addClass("selected");
		if (previousToolElement != null) {
			previousToolElement.className = "tool";
		}
		previousToolElement = this;
	});	
	
	// stjärna
	var starTexture = new Image();
	starTexture.src = 'images/star.png';
	$('#star').click(function(){
		pattern(this);
		$(this).removeClass("tool").addClass("selected");
		if (previousToolElement != null) {
			previousToolElement.className = "tool";
		}
		previousToolElement = this;
	});	
	
	// cirkel
	var circleTexture = new Image();
	circleTexture.src = 'images/circle.png';
	$('#circle').click(function(){
		pattern(this);
		$(this).removeClass("tool").addClass("selected");
		if (previousToolElement != null) {
			previousToolElement.className = "tool";
		}
		previousToolElement = this;
	});	
	
	// moln
	var cloudTexture = new Image();
	cloudTexture.src = 'images/cloud.png';
	$('#cloud').click(function(){
		pattern(this);
		$(this).removeClass("tool").addClass("selected");
		if (previousToolElement != null) {
			previousToolElement.className = "tool";
		}
		previousToolElement = this;
	});	
	
	// fyrkant
	var squareTexture = new Image();
	squareTexture.src = 'images/square.png';
	$('#square').click(function(){
		pattern(this);
		$(this).removeClass("tool").addClass("selected");
		if (previousToolElement != null) {
			previousToolElement.className = "tool";
		}
		previousToolElement = this;
	});	
	
	// triangel
	var triangleTexture = new Image();
	triangleTexture.src = 'images/triangle.png';
	$('#triangle').click(function(){
		pattern(this);
		$(this).removeClass("tool").addClass("selected");
		if (previousToolElement != null) {
			previousToolElement.className = "tool";
		}
		previousToolElement = this;
	});
	
	// pil
	var arrowTexture = new Image();
	arrowTexture.src = 'images/arrow.png';
	$('#arrow').click(function(){
		pattern(this);
		$(this).removeClass("tool").addClass("selected");
		if (previousToolElement != null) {
			previousToolElement.className = "tool";
		}
		previousToolElement = this;
	});
	
	// Generell funktion för mönster
	function pattern(patternElement) {
		//context.globalAlpha = 0.4;
		//canvas.addEventListener("mousedown", drawImage);
		canvas.onmousedown = startDrawImage;
		canvas.onmouseup = stopDrawing;
		canvas.onmouseout = stopDrawing;
		canvas.onmousemove = drawImage;	
	}
	
	// Börja rita bilder
	function startDrawImage() {
		isDrawing = true;
		drawImage;
	}
	
	// Rita bilder
	function drawImage(e){
	 if (isDrawing) {
		var loc, imageSize;      // declare the variables you will use
		if(previousToolElement.complete){    // check that the images has finished loading
        // get the location of the mouse on the canvas
        loc = windowToCanvas(canvas, e.clientX, e.clientY); 
		var rect = canvas.getBoundingClientRect();
			 context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
		
        //imageSize = randRange(5,40);      // get the size to draw the image
        loc.x -= previousToolElement.width/2;             // we want the image to be centered on the mouse
        loc.y -= previousToolElement.height/2;             // so offset the image by half the draw size
        // now draw the image
        context.drawImage(previousToolElement,                  // the image to draw
                  0,0,previousToolElement.width,previousToolElement.height, // what part of the image to draw
                                                    // in this case all of the image
                  loc.x,loc.y,previousToolElement.width,previousToolElement.height   // where and how big it should be on the canvas
			);
		}
	 }
	}
	
	function windowToCanvas(canvas, x, y){

        var rect = canvas.getBoundingClientRect();
        return {x: x - rect.left * (canvas.width/rect.width),
                y: y - rect.top * (canvas.height/rect.height)
               }
       }
	   
	//function randRange (min, max) {
    //    return Math.floor(Math.random() * (max - min + 1)) + min;
    //}



	// Spara bilden - Internet explorer
	$('#saveIe').click(function(){
		var url = canvas.toDataURL("image/png");
		var canvasCopy = document.getElementById("saveCanvas");
		canvasCopy.src = url;
		$('#saveCanvasArea').show();
	});	
	
	// Spara bilden - övriga browsers
	$('#save').click(function(){
		var url = canvas.toDataURL("image/png");
		this.href = url;
	});	
	
	// Spara v2
	/* var button = document.getElementById("btn-download");
	button.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL("image/png");
    button.href = dataURL;
	}); */
	
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
	if (!($('#pen').hasClass("selected"))) {
		alert("Markera pennan för att rita med vald färg");
	}
	
	context.globalCompositeOperation = "source-over";
	context.strokeStyle = color;
	imageElement.className = "selected";
		
	if (previousColorElement != null) {
		previousColorElement.className = "color";
	}
	else if (previousColorElement == null) {
		$('#black').removeClass("selected").addClass("color");
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
	else if (previousColorElement == null) {
		$('#black').removeClass("selected").addClass("color");
	}
	previousEraseElement = eraseElement;
}

// Fyll canvas
function fillCanvas() {
	if (confirm("Vill du verkligen fylla hela canvasen med vald färg? OBS: allt du ritat tidigare försvinner") == true) {
        // Start a new path to begin drawing in a new color.
		context.closePath();
		context.beginPath();
		context.globalAlpha = 1;
		context.fillStyle = context.strokeStyle;
		context.fillRect(0, 0, canvas.width, canvas.height);
    } 
	//else {
    //}   
}

// Tooltips för element med title-attributet
 $(function() {
    $(document).tooltip();
 });
 

 
 
 // Status:
 //Spara fungerar inte då man använt mönster (IE-varianten fungerar)
 //Behöver lägga till fler mönster -generell funktion?
 //Behöver fixa responsivt för högermenyn -flexbox
 //Behöver fixa "markering" av fyll


 
 