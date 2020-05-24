$( document ).ready(function(){

var time = setInterval(battery,20);

var lim = $('#bt-section1').css('width').slice(0,-2); - 4; 
var size = lim;
function battery(){
	if (size < 0) {
		$('#battery1').children().css('width',lim + "px");
		size = lim;
	}
	else{
		$('#bt-section1').css('width',size + "px");
		size--;
		console.log(size);
	}
}
});