(function($){
    
    //gnb==========================================
    var headBox = $('#headBox');
    var headDt = headBox.find('dt');
    var headDd = headDt.find('dd');
    headDt.on('mouseenter',function(){
       $(this).find('dd').stop().slideDown(); 
    });    
    headDt.on('mouseleave',function(){
//       headDd.hide(); 
       $(this).find('dd').stop().slideUp(); 
    });
    
    //slide =======================================
    var viewBox = $('#viewBox');
    var slideUl = viewBox.find('ul');
    var slideLi = slideUl.find('li');
    
    var j =0;
    setInterval(function(){
        j++;
        if(j>2){j=0}
        slideUl.animate({left:-100+'%'});
    },500)
//    setInterval(function(e){
//        slideUl.animaet({'left':-100+'%'},function(){
//            $(this).find('li').eq(0).appendTo(slideUl);
//            $(this).css({left:0});
//        });
//    });
    
    
    
    
    //popup =======================================    
    var infoBtn = $('.info_pic');
    var popup = $('.popup');
    
    infoBtn.on('click',function(e){
      e.preventDefault();
      popup.show();
    });
    
})(jQuery);