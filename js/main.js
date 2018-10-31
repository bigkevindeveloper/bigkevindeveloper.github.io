/*Scroll a secciones*/

$('#boton-home').click(function(){
	$('html, body').animate({
        // #elemento2 · Será el elemento donde queremos desplazarnos.
    	scrollTop: $("#home").offset().top
        //1500 · La velocidad que le queremos dar
	 	}, 1800);
})

$('#boton-proyectos').click(function(){
	$('html, body').animate({
        // #elemento2 · Será el elemento donde queremos desplazarnos.
    	scrollTop: $("#proyectos").offset().top
        //1500 · La velocidad que le queremos dar
	 	}, 1800);
})
$('#boton-habilidades').click(function(){
	$('html, body').animate({
        // #elemento2 · Será el elemento donde queremos desplazarnos.
    	scrollTop: $("#habilidades").offset().top
        //1500 · La velocidad que le queremos dar
	 	}, 1800);
})
$('#boton-contacto').click(function(){
	$('html, body').animate({
        // #elemento2 · Será el elemento donde queremos desplazarnos.
    	scrollTop: $("#contacto").offset().top
        //1500 · La velocidad que le queremos dar
	 	}, 1800);
})

/*Sticky menu*/

$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura+200 ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
 
});