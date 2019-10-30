//slide_03.js
(function($){
  const slideForm = $('.slide_03_form');
  const slideGuide = slideForm.children('ul');
  let slideLi = slideGuide.find('li');
  //-----------------
  //li에 이름을 부여(.slide_03_con_0$)
  for(let i=0; i <= slideLi.length; i++){
    let classname = 'slide_03_con_'+(i+1);
    slideLi.eq(i).addClass(classname);
  }
  //-----------------
  let cloneLi = slideLi.eq(-1).clone(true);
  //clone() 사용시 true면 기능까지 복제

  cloneLi.prependTo(slideGuide);
/*
  //1. prepend / prependTo의 역할을 정확하게 구분
       * 감싸는영역.prepend(담는 내용);
       * 담는내용.prependTo(감싸는영역);
  //2. 마지막 영역을 복제(clone) 후에 앞에 담아라.
    3. css작업시 nth-child()를 이용하면 순서값에 의해 원하는 결과물이 나오지     않으므로, 각각 class이름을 부여해서 처리.
       (복제전에 이름을 부여)
    4. 또한, 그 부모영역의 넓이는 기존갯수+1만큼의 크기값으로 재설정
*/
//------------------------------
const slide03Btn = $('.slide_03_btn');
  const nextBtn = slide03Btn.children('.next');
  const prevBtn = slide03Btn.children('.prev');
  slideLi = slideGuide.find('li'); // li가 새로 갱신된 내용으로 처리(6개)


  let myn = 0;
  const bannerLen = slideLi.length;
  console.log(bannerLen);

  nextBtn.on('click',function(e){
    e.preventDefault();//선행되는 이벤트 제거
    myn++;//myn 1씩 증가
    if (myn >= bannerLen - 1) { //myn가 슬라이드의 개수(bannerLen)-1개보다 크거나 같을 때(5일때)
      slideGuide.css({'left':'100%'}); //슬라이드를 css left값을 100%로 이동(앞에 복제된 위치)
      myn = 0;}//myn은 0으로 변경
    let per = -100 * myn + '%' //per = -100*myn%(옆으로 이동하는 거리)
    slideGuide.stop().animate({ 'left': per }, 1000);//slideGuide(ul)를 -100 * myn만큼 이동(1000ms동안)
  });
  
  prevBtn.on('click', function (e) {
    e.preventDefault();
    myn--;//myn 1씩 감소
    let per = -100 * myn + '%' //per = -100*myn%(옆으로 이동하는 거리)
    slideGuide.stop().animate({ 'left': per },1000,function(){ //slideGuide(ul)를 per만큼 이동(1000ms동안)하면서 function수행

      if (myn <= -1) { myn = bannerLen-2; } //if myn이 -1보다 작거나 같으면 / myn = 슬라이드 개수의 -2가 된다.
      
        let per = -100 * myn + '%'//per = -100*myn%(옆으로 이동하는 거리)
        slideGuide.css({ 'left': per }); //슬라이드를 css per만큼 이동
    });      




  });
})(jQuery);