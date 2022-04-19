$(document).ready(function(){
	$("#a1").click(function(){
		$("#cuadro").css("visibility","visible");
		$("#cuadro").show();
	});
	$("#cerrar").click(function(){
		$("#cuadro").hide().css({"top":"40%","left":"40%"});
	});

});