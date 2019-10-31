// slide_02.js
(function($){
  const viewBox2 = $('#viewBox_02');
  const indicator = viewBox2.find('.indicator');
  const indiLi = indicator.find('li');
  const indiLiLink = indiLi.children('a');

  const slideForm = viewBox2.find('.slide_02_form'),
        slideGuide = slideForm.find('.guide'),
        slideEach = slideGuide.children('.banner_area'),
        viewBtn = viewBox2.find('.view_btn'),
        pause = viewBtn.find('.pause'),
        play = viewBtn.find('.play');

  let timed = 500, myn = 0,maxn = slideEach.length;
  // ------------------------------
  // slideEach.eq(0).addClass('action');
  // indiLi.eq(0).children(indiLiLink).addClass('action');
//공통기능수행
  const MoveSlide = function(n,bool){
    indiLiLink.removeClass('action');
    indiLi.eq(n).children('a').addClass('action');

    slideGuide.animate({ 'marginLeft': (-100 * n) + '%' }, function () {
      slideEach.removeClass('action');
      setTimeout(function () {
        slideEach.eq(n).addClass('action');
      }, timed);
    });
    //play, stop 버튼 동작유무 판단
    if (!bool) {//값이 faise 일 때 정지버튼 보이고 재생버튼 숨기기
      play.show();
      pause.hide();
    } else {//값이 true 일 때 재생버튼 보이고 정지버튼 숨기기
      pause.show();
      play.hide();
    }

  };//MoveSlide() ==================================
  MoveSlide(0,true);
  //=====================================
  //일정시간마다 광고배너 움직이게하기
  let go;
  const Goslide = function () {
    go = setInterval(function () {
      myn++;
      if (myn >= maxn) { myn = 0; }
      MoveSlide(myn, true);
    }, timed * 4);
  };//Goslide();
  const stopSlide = function () {
    clearInterval(go);
  };
  Goslide();

  let PlayBanner = function(bool){
    if(bool){
      Goslide();
    }else{
      stopSlide();
    }
  };//PlayBanner
  PlayBanner(true);

  viewBox2.on('mouseenter',function(){
    stopSlide();
  });
  viewBox2.on('mouseleave',function(){
    Goslide();
  });
  // viewBox2.on({ 'mouseenter': stopSlide, 'mouseleave': Goslide });
  //=====================================
  pause.on('click',function(){
    PlayBanner(false);
  });
  play.on('click',function(){
    PlayBanner(true);
  });

  //=====================================
// ---------------------
//클릭시 배너 움직이게 만들기
  indiLiLink.on('click focus',function(e){
    e.preventDefault();
    console.log(e.bubbles);
    e.stopPropagation();
    stopSlide();
    let myThis = $(this);
    let myThisPar = myThis.parent('li');
    let i = myThisPar.index();
    myn = i;

    MoveSlide(myn, true);
    PlayBanner(false);
  });
  //변수 i는 외부에서 공용으로 사용할 수 있도록, 전역변수로 처리
  //인디케이터, 광고배너 이동 후 처리하는 부분 등의 내용은 별도 함수처리
  //setInterval(), clearInterval()

})(jQuery);


// let i = 0, maxi = 4,timed = 1000,go;
// let Goslide = function(){
//     go = setInterval(function(){
//     i++; 
//   if(i >= maxi){ 
//     i = 0;//0을 대입해라
//     }
//     console.log(i);
//   },timed);//Goslide
// };

// Goslide();//Goslid 최초수행
// // setTimeout(function(){clearInterval(go);},timed *10);
// $(document).on('mouseenter',function(){ //브라우저에 mouseenter시 멈춤
//   clearInterval(go);});//마우스엔터 수행(멈춤)
// $(document).on('mouseleave',function(){
//   Goslide();});

  