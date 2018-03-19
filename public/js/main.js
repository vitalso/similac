$(document).ready(function(){

	$("#date").mask("99.99.9999", {placeholder: "__.__.____" });

	$('a[href="#warning"]').magnificPopup({
		type: 'inline',
		modal: true
	});
	/*$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});*/

	$('.warning__form input[type="checkbox"]').change(function(){
		var status = $(this).prop('checked');

		if(status == true) {
			$('.popup-modal-dismiss').removeClass('is-disabled');
		} else {
			$('.popup-modal-dismiss').addClass('is-disabled');
		}
		console.log(status);
	});

	$('#date-choice .primary__btn').click(function()
	{
	    if( $('.date__birth input[type="text"]').val().length < 8 ) {
	        console.log('error')
	    } else {
	    	$('.content__inner').removeClass('transparent');
	    	$(this).closest('form').addClass('is-hidden');
	    	$(this).closest('form').next('form').removeClass('is-hidden');
	    	console.log('cool')
	    }

	    return false;
	});

	$('#question-1 .next__btn').click(function(){
		if($('#question-1 input[name="choice-input"]:checked').val() == 'yes') {
			document.location = 'https://www.google.com'
		} else {
			$('#question-1').addClass('is-hidden');
			$('#question-2').show();
		}

		return false;
	})

	$('#question-2 .next__btn').click(function(){

		if($('#question-2 input[name="choice-input"]:checked').val() == 'yes') {
			document.location = 'https://www.google.com'
		} else {
			$('#question-2').addClass('is-hidden');
			$('#question-3').show();
		}

		return false;
	})

	$('#question-3 .next__btn').click(function(){

		if($('#question-3 input[name="choice-input"]:checked').val() == 'yes') {
			document.location = 'https://www.google.com'
		} else {
			$('#question-3').addClass('is-hidden');
			$('#question-4').show();
		}

		return false;
	})

	$('#question-4 .next__btn').click(function(){

		if($('#question-4 input[name="choice-input"]:checked').val() == 'yes') {
			document.location = 'https://www.google.com'
		} else {
			$('#question-4').addClass('is-hidden');
			$('#question-5').show();
		}

		return false;
	})

	$('#question-5 .next__btn').click(function(){

		if($('#question-5 input[name="choice-input"]:checked').val() == 'yes') {
			document.location = 'https://www.google.com'
		} else {
			$('#question-5').addClass('is-hidden');
			$('#question-6').show();
		}

		return false;
	})

	$('#question-6 .next__btn').click(function(){

		if($('#question-6 input[name="choice-input"]:checked').val() == 'yes') {
			document.location = 'https://www.google.com'
		} else {
			document.location = 'http://localhost:3000/recomend.html'
		}

		return false;
	})

});