/*Comprobacion de tamaño*/

/*Ejecuciones previas*/
ajustarAlto();



/*Ejecutamos la funcion para configurar el tamaña del height*/
function ajustarAlto(){
	var altura = $( window ).height() ;
	var ancho = $(window).width();

	console.log("Altura:"+altura+"px");
	if(ancho<=755){
		$(".box-proyectoA").css({"height":"20vh","width":"50%"});
		$(".box-proyectoB").css({"height":"20vh","width":"50%"});
		$(".box-proyectoC").css({"height":"20vh","width":"50%"});

		$(".box-proyectoAhover").css({"height":"20vh","width":"50%"});
		$(".box-proyectoBhover").css({"height":"20vh","width":"50%"});
		$(".box-proyectoChover").css({"height":"20vh","width":"50%"});
	}
	$(".full-height").css({"min-height": altura+"px"});
}

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
    	scrollTop: $("#contactop").offset().top
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

