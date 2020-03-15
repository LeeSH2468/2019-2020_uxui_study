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

     gnbDl.eq(-1).find('dd').find('a').eq(-1).on('blur',function(){
      gnbDd.stop().slideUp();
  });


   // 슬라이드 만들기
   var viewBox = $('#viewBox');
   var slide = viewBox.children('.slide');
   var simg = slide.children('div');

   setInterval(function(){
      slide.animate({left:-100+'%'},function(){
           $(this).find('div').eq(0).appendTo(slide);
           $(this).css({left:0});
      });
   },2000);

   //탭영역 만들기
   var conBox = $('#conBox');
   var tab01 = conBox.find('.tab01');
   var tab02 = conBox.find('.tab02');
   var tabBtn = tab01.find('button');
   var tabNotice = tab02.find('.no_con');
   var tabGallery = tab02.find('.ga_con');
   
   tabBtn.eq(0).on('click',function(){
    tabNotice.css({display:'block'});
    tabGallery.css({display:'none'});
   });
   tabBtn.eq(1).on('click',function(){
    tabGallery.css({display:'block'});
    tabNotice.css({display:'none'});
   });

   //공지사항 팝업창
   var notiBtn = tabNotice.find('li').eq(0).find('a');
   var popup = conBox.find('.popup');
   var closeBtn = conBox.find('.close');

   notiBtn.on('click',function(){
    popup.css({display:'block'});
   });

   closeBtn.on('click',function(){
    popup.css({display:'none'});
   })


})(jQuery);