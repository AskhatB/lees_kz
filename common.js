$(document).ready(function(){
	 $('#portfolio').click(function(){
        $('.contentblock2').hide();
        $('.contentblock3').show();
        $('.contentblock').hide();
        $('.contentblock4').hide();
    });
    $('#our-service').click(function(){
        $('.contentblock2').show();
        $('.contentblock3').hide();
        $('.contentblock').hide();
        $('.contentblock4').hide();
    });

    $('#main-page').click(function(){
    	$('.contentblock3').hide();
    	$('.contentblock2').hide();
    	$('.contentblock').show();
        $('.contentblock4').hide();
    });

    $('#contacts').click(function(){
        $('.contentblock3').hide();
        $('.contentblock2').hide();
        $('.contentblock').hide();
        $('.contentblock4').show();
    });
});
