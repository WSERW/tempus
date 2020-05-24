var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#F2FEFF"];
var i = 0; 

function changeColor(){
    document.body.style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }

}


$( document ).ready(function(){





	$( "#add" ).click(function(){
		$( ".menu" ).append("<div>Пицца</div>");
	 	$(".menu div").last().addClass("pizza").css( "background-color", "orange");

	 });

	  $( "#toggle" ).click(function(){ // задаем функцию при нажатиии на элемент с классом toggle
	    $( ".menu" ).toggle(); //  скрываем, или отображаем все элементы <div>
	   

	    
	  });
	  $( "#slide-toggle" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
	    $( ".menu" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
	  });



var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 5000;
var navBtnId = 0;
var translateWidth = 0;

    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

        $ ('.slide-nav-btn').click(function(){
            navBtnId = $(this).index();

                if (navBtnId + 1 != slideNow) {
                    translateWidth = -$('#viewport').width() * (navBtnId);
                    $('#slidewrapper').css({
                        'transform': 'translate(' + translateWidth + 'px, 0'
                    });
                    slideNow = navBtnId + 1;

                }
        });


function nextSlide() {
    // if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    //     $('#slidewrapper').css('transform', 'translate(0, 0)');
    //      slideNow = 1;
    // } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    // }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0) ',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
	});