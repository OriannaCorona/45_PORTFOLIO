$(document).ready(function(){
	$(".fotos").on("mouseenter mouseleave", function(){
		$(".fotos").hover(function(){
		$(this).css("background-color", "#b3b8bc");
        }, function(){
        $(this).css("background-color", "pink");
		});
	});
});