//Programmet använder JavaScript och jQuery för att 
//implementera ett dynamiskt formulär.

$(document).ready(function() {
	//Fokusera på och markera fält
	$(':text:first').focus().css('backgroundColor', '#CCC');
	
	$(':input').focus(function() {
		$(this).css('backgroundColor', '#CCC');
	});
	
	$(':input').blur(function() {
		$(this).css('backgroundColor', '');
	});
	
	//Visa eller dölj fält som behöver alt. inte behöver fyllas i
	$('#one, #two').click(function() {
		$('#specialfood').show();
	});
	
	$('#none').click(function() {
		$('#specialfood').hide();
		$('#food').hide();
		$('#no').prop('checked', true);
	});
	
	$('#yes').click(function() {
		$('#food').show();
	});
	
	$('#no').click(function() {
		$('#food').hide();
	});
	
	//Validering
	$('#personForm').validate({
		rules : {
			firstname : 'required',
			lastname : 'required',
			email : {
				required : true,
				email : true
			},
			telephone : {
				pattern : /^[0-9\-]{3,20}$/
			}
		}
	});
	
	//Meddelanderuta visas om formuläret validerat
	$('#personForm').submit(function(){
		if ($(this).valid()) {
    		alert("Nu har formuläret skickats!");
		}
	}); 

});
