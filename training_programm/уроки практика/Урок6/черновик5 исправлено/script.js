$(document).ready(function(){


let slideNow = 1;
let slideCount = $('#slidewrapper').children().length;
let slideInterval = 5000;
let navBtnId = 0;
let translateWidth = 0;
let switchInterval = setInterval(nextSlide, slideInterval);

$('#viewport').hover(function(){
    clearInterval(switchInterval);
}, function() {
    switchInterval = setInterval(nextSlide,slideInterval);    
});

$('#next-btn').click(function(){
    nextSlide();
});

$('#prev-btn').click(function(){
    prevSlide();
});

    $('.slide-nav-btn').click(function(){
        navBtnId = $(this).index();

            if (navBtnId + 1 != slideNow) {
                translateWidth = -$('#viewport').width() * (navBtnId);
                $('#slidewrapper').css({
                    'transform': 'translateX(' + translateWidth +'px)'  //'px;)'   убрал ;
            });
            slideNow = navBtnId + 1;
            }
    });

    function nextSlide(){
        if(slideNow == slideCount || slideNow <= 0 || slideNow > slideCount){
            $('#slidewrapper').css('transform', 'translateX(0)');
            slideNow = 1;
        } else {
            translateWidth = -$('#viewport').width() * (slideNow);
            $('#slidewrapper').css({                //slideWrapper должно быть строчными
               'transform': 'translateX(' + translateWidth + 'px)', //'px;)'   убрал ;
        });
        slideNow++;
        
        }
    }
function prevSlide(){
    if(slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({'transform': 'translateX(' + translateWidth + 'px)'});
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({                  //sliderapper пропущена W
            'transform': 'translateX(' + translateWidth + 'px)' //'px;)'   убрал ;
        });
        slideNow--;
    };
}
});
