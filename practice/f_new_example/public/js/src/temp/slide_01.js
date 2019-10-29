//slide_01.js
(function($){
  //.view_indicator 내부의 li(a)를 선택하면, .slide_temp내부의 .guide(긴 박스)가 이동하게 만들기.

  //index() 순서를 가져오는 것, eq() 순서를 주는것
  //margin-left:-100%, -200% ...   ||   position:relative; left:-100%, -200% ...

  const viewBox= $('#viewBox');
  const indicator = viewBox.find('.view_indicatior');
  const indiLi = indicator.find('li');
  const indiLink = indiLi.find('a');
  const guideBox = viewBox.find('.guide');
  const slideEach = guideBox.find('.banner_area02');
  const slideForm = viewBox.find('.slide_form');

  let timed = 500;
  let myn = 0, maxn = slideEach.length;

  const MoveSlide = function(n){
    indiLink.removeClass('action');
    indiLi.eq(n).children('a').addClass('action');
    
    guideBox.animate({'marginLeft':(-100 * n)+ '%'},function(){
      slideEach.removeClass('action');
      setTimeout(function(){
        slideEach.eq(n).addClass('action');
      },timed);
    });
  };//MoveSlide
  MoveSlide(0);
//  ================
// 광고움직이기
  let go;
  const Goslide = function(){
    go = setInterval(function(){
      myn++;
      if (myn >= maxn) {myn = 0;}
      MoveSlide(myn);
    },timed * 2);
  };//Goslide();
  const stopSlide = function(){
    clearInterval(go);
  };
  Goslide();
  viewBox.on({'mouseenter':stopSlide,'mouseleave':Goslide});
  // ===============================

  guideBox.css({'position':'relative','top':0,'left':0});

  indiLink.on('click focus',function(evt){
    evt.preventDefault();
    stopSlide();
    // let parLi = $(this).parent('li');
    let i = $(this).parent('li').index();
    myn = i;

    MoveSlide(i);
  });
  
})(jQuery);