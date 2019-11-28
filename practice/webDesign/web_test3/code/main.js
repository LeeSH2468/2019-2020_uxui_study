(function($){
    
    var headBox = $('#headBox');
    var gnb = $('.gnb');
    var gnbDl = gnb.find('dl');
    var gnbDt = gnb.find('dt');
    var gnbDd = gnb.find('dd');
    
    gnbDl.on('mouseenter',function(){
        $(this).find(gnbDd).slideDown();
    });
    
      gnbDl.on('mouseleave',function(){
        $(this).find(gnbDd).slideUp();
    });
    //=======================
    var viewBox = $('#viewBox');
    var viewUl = viewBox.find('ul');
    var viewLi = viewUl.find('li');
    
    var i = 0;
 
    setInterval(function(){
//        i++;
//        if(i>viewLi.length-1){i=0;}
//        viewUl.animate({marginTop:-400 * i+'px'});

    },1000);
    
    
    viewUl.css({position:'relative'});
    setInterval(function(){
        viewUl.animate({'top':-100+'%'},function(){
            $(this).find('li').eq(0).appendTo(viewUl);
            $(this).css({'top':0});
        });
    },1000);
    
    
    
    //=======================
    
    var partImg = $('.part_img');
    var popup = $('.popup');
    var btn = $('.btn').find('button');
    
    partImg.on('click',function(){
        popup.css({display:'block'});
    });
    btn.on('click',function(){
        popup.css({display:'none'});
    })
    
    //===========================
    
})(jQuery);