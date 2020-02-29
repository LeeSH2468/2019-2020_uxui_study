(function($){
    var h_box = $('#hmin_size');
    var gnb = $('#gnb');
    var gnbLi = gnb.children('ul').children('li').children('a');
    
//    gnbLi.on('mouseenter focus',function(){
//        $(this).parents('ul').find('ol').stop().slideDown(600);
//        h_box.addClass('action');
//    });
//    
    gnbLi.on('mouseenter focus',function(){
        $(this).parents('li').find('ol').stop().slideDown(600);
//        h_box.addClass('action');
    });
    gnbLi.on('mouseleave',function(){
        $(this).parents('ul').find('ol').stop().slideUp(300);
        h_box.removeClass('action');
    });
    gnbLi.on('blur',function(){
        $(this).parents('ul').find('ol').stop().slideUp(300);
        h_box.removeClass('action');
    });
})(jQuery);