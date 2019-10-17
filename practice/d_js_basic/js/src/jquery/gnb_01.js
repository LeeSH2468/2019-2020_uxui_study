//gnb_01.js
(function($){
  // const gnb = $('#gnb');
  // const gnbArea = gnb.children('ul');
  // const gnbArLi = gnbArea.children('li');
  // const subUl = gnbArLi.children('ul');

  // gnbArLi.on('focus',function(){
  //   $(this).children(subUl).stop().slideDown();
  // });

  // gnbArLi.on('focus',function(){
  //   console.log('ul');
  //   $(this).children(subUl).stop().slideToggle();
  // });


  const gnb = $('#gnb');
  const gnbArea = gnb.children('ul');
  const gnbArLi = gnbArea.children('li');
//gnbArLi.children('a').attr('class','titleLink'); //addClass와 같은기능
  gnbArLi.children('a').addClass('titleLink');

  const titleLink = $('.titleLink');
  const partList = titleLink.next('ul');
  const subLink = partList.find('a');
  let timed = 200;

// =============================================================
gnb.css({'backgroundColor':'transparent'});
gnbArea.css({'height':'100%','backgroundColor':'#fff','boxShadow':'0.2rem 0.2rem 0.2rem rgba(0,0,0,0.3)'});

titleLink.on('mouseenter focus',function(){
  let UlSlide = $(this).next(partList);
  //partList.slideUp();//가능하지만 (두 기능이 중복되기 때문에 권장x)
  UlSlide.parent().siblings().find(partList).slideUp();
  UlSlide.slideDown();

  UlSlide.find('a').eq(-1).on('blur',function(){
    UlSlide.slideUp();
  });

  gnb.on('mouseleave',function(){
    partList.slideUp();
  });
});

/*

// 1번기능 수행하기(마우스 오버,포커스시 배경까지 내려오기)
  gnb.css({'backgroundColor':'transparent'});
  gnbArea.css({'height':'auto','backgroundColor':'#fff','boxShadow':'0.2rem 0.2rem 0.2rem rgba(0,0,0,0.3)'});
  //포커스 잡히면 보이게하기
  titleLink.on('focus',function(evt){
    // evt.preventDefault();
    partList.stop().slideDown(timed);
  });
  //마지막요소 블러처리되면 사라지게하기
  subLink.eq(-1).on('blur',function(){
    partList.stop().slideUp(timed);
  });

  //gnbArea에 마우스 올렸을 경우 나타나게하기
  gnbArea.on('mouseenter',function(){
    partList.stop().slideDown(timed);
  });

  gnb.on('mouseleave',function(){
    partList.stop().slideUp(timed);
  });

// =============================================================
// 2번기능 수행하기(마우스 오버,포커스시 배경 빼고 내려오기)
  gnbArea.css({'height':'100%'});
// 이외의 기능은 1번기능과 동일
*/
// =============================================================
// 3번기능 수행하기


})(jQuery);