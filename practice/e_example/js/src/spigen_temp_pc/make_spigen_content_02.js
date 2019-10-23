(function($){
  // console.log($.fn);
  const conBoxLink = $('#info>ul>li>a');
  const conBox2 = $('#info');
  const linkBox = $('#info li');
  const infoDl = $('#info dl');
  console.log(conBox2.offset().top);

  conBoxLink.on('mouseenter focus', function () {
      $(this).addClass('action');
  })
  .on('mouseleave blur',function(){
      $(this).removeClass('action');
  });

  //======================================
  /* 스크롤바가 일정량 움직였을 경우 top button 생성되게 만들기
  사용된 이벤트는 scroll
  scrollTop() : 스크롤 바의 움직인 위치값을 파악
  offset().top, offset().left : 숙제~
  mousewheel, DOMMouseScroll : 어케하면 크로스 브라우징
  BOM , DOM : ??
  *상단 네비게이션 js 기능으로 처리
  */
  let conBoxOffset = conBox2.offset().top;//얼마나 떨어져있는지 파악
  const topBtn = $('.top_move_btn');
  const win = $(window);

  // win.on('scroll', function (e) { });
  win.on('scroll',(e) => {
    // console.log(e);
    let scrollResult = $(this).scrollTop();
    // console.log(scrollResult);
    if (scrollResult > conBoxOffset){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    }

  });
topBtn.on('click',(e) => {
  e.preventDefault()
  $('html, body')
  .stop().animate({'scrollTop':0},5000,'easeInOutBounce', ()=>{
    $('h1>a').focus();
  });
});




  // conBoxLink.on('mouseenter focus',function($){
  //   console.log($);
  //   // infoDl.stop().slideUp();
  //   // linkBox.parent.siblings.linkBox.stop().slideDown();
  //   $(this).infoDl.css({'display':'block'});
  //   linkBox.parent.siblings.linkBox.css({ 'display': 'none' });
  // });
  // linkBox.on('mouseleave blur',function($){
  //   console.log($);
  //   // infoDl.css({ 'display': 'none' });
  // });

})(jQuery);