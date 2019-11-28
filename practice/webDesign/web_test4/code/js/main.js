(function($){
    var gnb = $('.gnb');
    var gnbTitle = gnb.children('li');
    var gnbSub = gnbTitle.children('ul');
    
    gnbTitle.on('mouseenter',function(){
        $(this).children(gnbSub).stop().slideDown();
    });
    gnbTitle.on('mouseleave',function(){
        $(this).children(gnbSub).stop().slideUp();
    });
    
    //==================================================
    var viewBox = $('#viewBox');
    var guide = viewBox.children('.guide');
    var slide = guide.children('li');
    
    guide.css({position:'relative',zIndex:'0'})
    setInterval(function(){
       guide.animate({left:(-100*3)+'%'},function(){
            $(this).find('li').eq(0).appendTo(guide);
            $(this).css({left:0});
           console.log('a');
       });

    },1000);
    
    //==================================================
    var notiBtn = $('.noti').children('a');
    var notiCon = $('.noti_area');
    var galBtn = $('.gal').children('a');
    var galCon = $('.gall_area');
   
    notiBtn.on('click',function(){
         console.log('a');
        galCon.css({display:'none'});
        notiCon.css({display:'block'});
    });
               
    galBtn .on('click',function(){
         console.log('a');
        notiCon.css({display:'none'});
        galCon.css({display:'block'});
    });
    
    
})(jQuery);