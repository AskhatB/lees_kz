$(document).ready(function(){
	 $('#portfolio').click(function(){
        $('.content-service').hide();
        $('.content-portfolio').show();
        $('.content-main').hide();
        $('.content-contacts').hide();
    });
    $('#our-service').click(function(){
        $('.content-service').show();
        $('.content-main').hide();
        $('.content-portfolio').hide();
        $('.content-contacts').hide();
    });

    $('#main-page').click(function(){
    	$('.content-service').hide();
    	$('.content-portfolio').hide();
    	$('.content-main').show();
        $('.content-contacts').hide();
    });

    $('#contacts').click(function(){
        $('.content-service').hide();
        $('.content-portfolio').hide();
        $('.content-main').hide();
        $('.content-contacts').show();
    });
});
