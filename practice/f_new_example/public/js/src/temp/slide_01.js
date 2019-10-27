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
  const slideForm = viewBox.find('.slide_form');

  slideForm.css({'overflow':'hidden'});
  indicator.css({'zIndex':500});
  guideBox.css({'position':'relative','top':0,'left':0});

  indiLink.on('click focus',function(evt){
    evt.preventDefault();
    console.log(evt);
    // let parLi = $(this).parent('li');
    let i = $(this).parent('li').index();
    console.log(i);
    
    indiLink.removeClass('action');
    $(this).addClass('action');
    guideBox.stop().animate({'left':-100 * i + '%'});
    
  });
  
})(jQuery);