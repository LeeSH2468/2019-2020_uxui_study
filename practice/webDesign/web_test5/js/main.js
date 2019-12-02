(function($){
    $('.gnb').children('li').on('mouseenter',function(){
        $(this).find('li').stop().slideDown();
    });
    $('.gnb').children('li').on('mouseleave',function(){
        $(this).find('li').stop().slideUp();
    })
    
//    ===============================================
    setInterval(function(e){
        $('.guide').animate({'left':-100 +'%'},function(){
            $(this).find('li').eq(0).appendTo('.guide');
            $(this).css({left:0});
        });
        
        
    },1000);

    
    
})(jQuery);