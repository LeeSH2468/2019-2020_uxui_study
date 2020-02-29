(function($){
    var gnb=$('.gnb');
    var gnbLi = gnb.children('li');
    var gnbDl = gnbLi.children('dl');
    var gnbDt = gnbDl.children('dt');
    var gnbDd = gnbDl.children('dd');
    
    gnbDt.children('a').on('mouseenter focus',function(){
        $(this).parent('dt').next('dd').stop().slideDown();
    });
    
    gnbDl.on('mouseleave',function(){
        $(this).children('dd').stop().slideUp();
    });
    gnbDd.children('a').eq(-1).on('blur',function(){
        $(this).parent('dd').stop().slideUp();
    });
    
    for(j=0; j<gnbLi.length;j++){
        gnbLi.eq(j).find('dd').children('a').eq(-1).on('blur',function(){
            $(this).parent('dd').slideUp();
        })
    }

    // ==================================
    var guide = $('.guide');
    var slide = guide.children('li');
    var i = 0;    

    slide.eq(i).siblings().hide();
    setInterval(function(){
        i++;
        if(i >3){i=0;}
        slide.eq(i).fadeIn();
        slide.eq(i).siblings().fadeOut();
    },3000);
    
    //===================================
    
    var infoArea = $('.info_area');
    var infoTitle = infoArea.children('ul');
    var btnNoti = infoTitle.children('.noti');
    var btngall = infoTitle.children('.gall');
    var notiZ = infoArea.children('.noti_zone');
    var gallZ = infoArea.children('.gall_zone');
    
    btnNoti.on('click',function(){
        $(this).addClass('action');
        $(this).siblings().removeClass('action');
        notiZ.css({display:'block'});
        gallZ.css({display:'none'});
    });
    btngall.on('click',function(){
        $(this).addClass('action');
        $(this).siblings().removeClass('action');
        gallZ.css({display:'block'});
        notiZ.css({display:'none'});
    });
    
 })(jQuery);