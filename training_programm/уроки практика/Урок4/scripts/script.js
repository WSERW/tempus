$( document ).ready(function(){
	$( "#add").click(function(){
		$( ".menu" ).append("<div>Пицца</div>");
		$( ".menu div").last().addClass("pizza").css( "background-color", "orange" )
	});
	$( "#toggle").click(function(){
			$( ".menu" ).toggle();
	});
	$( "#slideToggle").click(function(){
			$( ".menu" ).slideToggle();
	});
});