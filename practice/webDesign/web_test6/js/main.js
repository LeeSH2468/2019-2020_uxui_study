(function($){
    $('.gnb').find('dt').on('mouseenter',function(){
        $('.gnb').find('dd').stop().slideDown();
    });
    
    
    $('.gnb').find('dl').on('mouseleave',function(){
        $('.gnb').find('dd').stop().slideUp();
    });
    
    
    $('.gnb').find('dt > a').on('focus',function(){
        $('.gnb').find('dd').stop().slideDown();
    });
    $('.gnb').find('dl').find('a').eq(-1).on('blur',function(){
        $('.gnb').find('dd').stop().slideUp();
    });

    //===============================================
    $('.guide').css({position:'relative'});
    
    i = 0
    $('.next').on('click',function(){
       i++
        if(i >2){i=0}
        $('.guide').animate({left:(-100 * i)+'%'})
    });
    $('.prev').on('click',function(){
       i--
        if(i < 0){i=2}
        $('.guide').animate({left:(-100 * i)+'%'})
    });
    
    
    
    
    //================================================
    $('.noti_btn').children('button').on('click',function(){
        $(this).addClass('action');
        $('.gall_btn').children('button').removeClass('action');

        $('.gall').css({display:'none'});
        $('.notice').css({display:'block'});
    });
    $('.gall_btn').children('button').on('click',function(){
        $(this).addClass('action');
        $('.noti_btn').children('button').removeClass('action');

        $('.notice').css({display:'none'});
        $('.gall').css({display:'block'});
    });
    
})(jQuery);