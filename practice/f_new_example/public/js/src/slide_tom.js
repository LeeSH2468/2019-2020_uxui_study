// slide_tom.js
(function($){
  //인디케이터 영역
  const miniProduct = $('#miniProduct');
  const indicator = miniProduct.children('.indicator');
  const indiLi = indicator.children('li');
  const indiLink = indiLi.children('a');

  //슬라이드 영역
  const proWrap = miniProduct.children('.product_wrap');
  const guideUl = proWrap.children('.product');
  let guideLi = guideUl.children('li');
  const guideLink = guideLi.children('a');

  //마지막 영역 복제
  guideLi.eq(-1).clone(true).prependTo(guideUl);

  guideLi = guideUl.children('li');
  let liLen = guideLi.length;
  guideUl.css({width:100 * liLen + '%', marginLeft : '-100%'});
  guideLi.css({width:100 / liLen + '%'});

  //버튼생성
  const slideBtn = function(){
    miniProduct.prepend('<div class="view_btn">\
                  <button type="button" class="next"><i class="fas fa-caret-right"></i><span>다음내용 보기</span></button>\
                  <button type="button" class="prev"><i class="fas fa-caret-left"></i><span>이전내용 보기</span></button>\
                  </div>');
  }
  slideBtn();

  const viewBtn = $('.view_btn');
  const btn = viewBtn.find('button');

  

  //인디케이터 선택시 넘어가기
  indiLi.eq(0).addClass('action');

  indiLink.on('click',function(e){
    e.preventDefault();
    n = $(this).parent('li').index();
    guideUl.stop().animate({'marginLeft':-100 * (n+1) + '%'});
    indiLi.eq(n).siblings().removeClass('action');
    indiLi.eq(n).addClass('action');
  });
  //버튼 클릭시 넘어가기
  let v = 0;
  let slideLen = guideLi.length;

    btn.on('click',function(e){
      e.preventDefault();
    console.log($(this));
      let has = $(this).hasClass('next');
      if(has){
        v++;
        if(v > slideLen-1){v=0;
          guideUl.css({'marginLeft':'0'});
          }
      }else{
        v--;
      };
      guideUl.stop().animate({ 'marginLeft': -100 * v + '%' },function(){
        if(v <= -1){v = slideLen -2;
          guideUl.css({'left':-100 * v + '%'});
        }
      });
      indiLi.eq(v+1).siblings().removeClass('action');
      indiLi.eq(v+1).addClass('action');
    });//btn.on








})(jQuery);