$( document ).ready(function(){

var time = setInterval(battery,1000);

var lim = $('#battery1').children().length - 1; 
var item = lim;
function battery(){
	if (item < 0) {
		$('#battery1').children().css('visibility',"visible");
		item = lim;
	}
	else{
		$('#battery1').children().eq(item).css('visibility',"hidden");
		item--;
	}
}
});