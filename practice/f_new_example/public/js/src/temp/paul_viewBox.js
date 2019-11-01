// paul_viewBox.js
(function($){
  const viewBox = $('#viewBox');
//버튼 및 인디케이터 영역
  const indi = viewBox.find('.indicator');
  const indiCon = indi.find('p').children('em');
  const indiBtn = indi.find('.view_btn').children('button');


//슬라이드 영역
  const slide = viewBox.find('.slide_form');
  const slideUl = slide.find('ul');
  const slideLi = slideUl.find('li');

//----------------------------------------------------
//1.slide영역 순서에 맞게 배치
  let liLen = slideLi.length;
  const slideZindexSet = function(){
      for (let i = 0; i < liLen; i++){
      slideLi.eq(i).css({ zIndex: liLen - i});
      }
  };//slideZindexSet()

  slideZindexSet();

   let textN = 0;
   const textEm = function(n){
   indiCon.text('0'+(textN + 1));
   };

  textEm(textN);
  //------------------------------------
   // li첫번째만 보이고 나머지는 사라지게 만들기
   slideLi.eq(0).siblings().hide();
   slideLi.eq(0).find('dl').addClass('action');

  //----------------------------
    // slideLi.eq(textN).siblings().stop().fadeOut();

  const fakeBtn = $('.fake_btn');
  fakeBtn.hide();

  //----------------------------
  //버튼클릭
  indiBtn.on('click',function(e){
    e.preventDefault();
    fakeBtn.show();
    // indiBtn.hide();    
    //indiBtn.attr({ 'disable': 'true' }); //disable기능을 비활성화

    if($(this).index() == 0){ //next버튼
      textN++;
      if(textN >= liLen){textN=0;}
      textEm(textN);
    }else{ //prev버튼
      textN--;
      if(textN < 0){textN = liLen-1}
      textEm(textN);
    }
    // slideLi.eq(textN).siblings().stop().slideUp();
    // slideLi.eq(textN).stop().slideDown();


//위치(left값)을 조정해 옆에서 나오게 만들기==== 
/*    let slideThis = slideLi.eq(textN);
    slideThis.css({zIndex:liLen+2, left: -100 + '%'});
    slideThis.stop().slideDown(function(){
      slideThis.stop().animate({left:0},function(){
        slideThis.siblings().hide();
        slideZindexSet();
      });
    });
*/
//==================
//가로값을 조정해 옆에서 나오게 만들기(가로로 늘어나기)
    let slideThis = slideLi.eq(textN);
    slideThis.css({ zIndex: liLen+2,width:0, padding:0});
    slideThis.css({display:'block'});
    slideThis.stop().animate({ width: 100 + '%', paddingLeft:'5vw'},600,'easeOutCubic',function(){
      slideThis.siblings().hide();
      slideZindexSet();
          // indiBtn.show();
          fakeBtn.hide();
          slideThis.siblings().find('dl').removeClass('action');
          slideLi.eq(textN).find('dl').addClass('action');
          //indiBtn.attr({ 'disable': 'false' });// disable(비활성화)를 비활성화=활성화
        });//slideThis.aminate
  


  });//indiBtn.on
  // for (let i = liLen-1; i >= 0; i--) {  
  //   slideLi.eq(i).css({ zIndex: liLen - i });
  // }


  // slideLi.eq(0).css({ zIndex: 3 });
  // slideLi.eq(1).css({ zIndex: 2 });
  // slideLi.eq(2).css({ zIndex: 1 });

  //==============================

  
  // slideLi.hide();//li 보이지 않게하기
  slideLi.eq(0).siblings().hide();//li요소의 첫번째만 보이게 만들기

  //버튼클릭시 해당하는 순서에 맞는 li요소 나타나게 만들기

})(jQuery);