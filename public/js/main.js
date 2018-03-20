$(document).ready(function(){

	var current_page = 0;

	$("#date").mask("99.99.9999", {placeholder: "__.__.____" });

	$('a[href="#warning"]').magnificPopup({
		type: 'inline',
		modal: true
	});
	/*$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});*/

	var steps = $('.choice__form .form__section').length;
	for (i=1; i <= steps; i++) {
		$('.pagination').append("<li><span></span></li>")
	}
	$('.pagination li:eq(0)').addClass('active');
	
	console.log(steps);

	$('.warning__form input[type="checkbox"]').change(function(){
		var status = $(this).prop('checked');

		if(status == true) {
			$('.popup-modal-dismiss').removeClass('is-disabled');
		} else {
			$('.popup-modal-dismiss').addClass('is-disabled');
		}
		console.log(status);
	});

	$('#date-choice input:submit').click(function(){

	    if( $('.date__birth input[type="text"]').val().length < 8 ) {
	        return false;
	    } else {
	    	$('#date-choice').submit();
	    }

	});

	$('.form__section .next__btn').click(function(){

		if ( $(this).closest('div').find('input:radio:eq(0)').prop('checked') == false &&  $(this).closest('div').find('input:radio:eq(1)').prop('checked') == false ) {
			
			return false;

		} else {

			if ( $(this).closest('div').find('input:radio:checked').attr('data-href') == '' ) {

				$(this).closest('div').addClass('is-hidden');
				$(this).closest('div').next('.form__section').show();
				// Pagination
				$('.pagination li').removeClass('active');
				$('.pagination li').eq(current_page + 1).addClass('active');
				current_page++;

			} else {

				document.location = $(this).closest('div').find('input[name="choice-input"]:checked').attr('data-href');

			}

		}

		return false;
	})

	$('#send-question').click(function(){
		$('#test-form').submit();
	})

});