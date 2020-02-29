(function(){
  // console.log('연결확인');
  //gnb 만들기
	  var gnb = $('#gnb');
    var gnbDl = gnb.find('dl');
    var gnbDt = gnbDl.children('dt');
	  var gnbDd = gnbDl.children('dd');

    gnbDt.children('a').on('mouseenter focus',function(){
      gnbDd.stop().slideDown();
     });
    gnb.on('mouseleave',function(){
      gnbDd.stop().slideUp();
     });

     gnbDl.eq(-1).find('dd').find('li').eq(-1).children('a').on('blur',function(){
      gnbDd.stop().slideUp();
  });


   // ========================
   var viewBox = $('#viewBox');
   var slide = viewBox.children('.slide');
   var simg = slide.children('div');

   setInterval(function(){
      slide.animate({left:-100+'%'},function(){
           $(this).find('div').eq(0).appendTo(slide);
           $(this).css({left:0});
      });

   },2000);

})(jQuery);