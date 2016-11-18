$(document).ready(function(){
	$(".cuadronegro").on("mouseenter mouseleave", function(){
		$(".cuadronegro").toggleClass("cuadroAmarillo");
		$(".spring").toggleClass("spring2");
	});
	$("#floralFragance").on("click", function(){
		$("#floralFragance").toggleClass("florNaranja");
		$("#floralP").toggleClass("negro");
	});
	//intento de reducir codigo de arriba
	/*$("#fotos1").on("click", "div", function(){
		$("div").removeClass().addClass($(this).attr("florNaranja"));
		$(this).sibilings().removeClass("florNaranja");
	});*/
	$(".fondomujer").hover(function(){
		$(this).css("background-color", "#b3b8bc");
        }, function(){
        $(this).css("background-color", "pink");
	});
	$(".fondoflores").mouseenter(function(){
		$(".fondoflores").toggleClass("fondoflores2");
	});
});

