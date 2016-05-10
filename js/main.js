$(document).ready(function(){
    $("body").on("click","a", function (event){
        event.preventDefault();
        
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
	$('#btn-send-mail').submit(function (event) {
		$.ajax({
			url: "https://formspree.io/astra_97@ukr.net",
			method: "POST",
			data: {
				name: name-input.value,
				email: email.value,
				message: message.value
			},
			dataType: "json"
		}).done(function () {
			$('#mail-form').html('<h1>Thank you!</h1>');
		});
		event.preventDefault();
	});
});