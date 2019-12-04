(function($){
    $('.gnb').find('dt>a').on('mouseenter focus',function(){
        $('.gnb').find('dd').stop().slideDown();
        $('#headBox').addClass('action');
    });
    $('.gnb').on('mouseleave',function(){
        $('.gnb').find('dd').stop().slideUp();
        $('#headBox').removeClass('action');
    });
    $('.gnb').find('dl').eq(-1).find('dd > a').eq(-1).on('blur',function(){
        $('.gnb').find('dd').stop().slideUp();
        $('#headBox').removeClass('action');
    });
    // 슬라이드 =============================================
    $('.slide_area').children('ul').css({position:'relative'});
    var i = 0;
    setInterval(function(){
       i++;
        if(i>$('.slide_area').find('li').length-1){i=0}
        $('.slide_area').children('ul').animate({left:(-100 * i)+'%'});
    },1500);
})(jQuery);