// paul_scroll.js
(function(){
  //offset().top : 브라우저 최상단에서 떨어진 거리 판단.
  //offset().left : 브라우저 왼쪽에서 떨어진 거리 판단.
  //scrollTop

  const viewBox = $('#viewBox');
  const con1 = $('#conBox');
  const con2 = $('#conBox2');
  let viewLocation = viewBox.offset().top;
  let con1Location = con1.offset().top;
  let con2Location = con2.offset().top;
  // console.log(viewLocation);

  let winScroll = $(window).scrollTop();
    // console.log(winScroll);

    let scrollResult = 0;
    let n=0;
    $(window).on('mousewheel DOMMouseScroll',function(e){
      // console.log(e.detail); 
      // e.originalEvent.wheelDelta = 크롬에만 존재하는 기능
      // e.detail = 모두 존재. fireFox에서만 값이 3으로 움직임을 가짐
      let delta = e.originalEvent.wheelDelta;
      (delta) ? scrollResult = delta : scrollResult = e.delta * -40;//if문과동일
      (scrollResult >= 0) ? n++ : n--;
      
      
      // if (delta){
      //   scrollResult = e.originalEvent.wheelDelta;
      // }else{
      //   scrollResult = e.detail * -40;
      // } //()?= 연산자와 동일(연산자가 더 빠름)

      // console.log(n);

      winScroll = $(window).scrollTop();
      if(winScroll >= con1Location+500){
        con2.css({backgroundColor:'#fa7', marginLeft:'-50vw',
                             transform:'rotate(-500deg)',transition:'all 300ms ease'},500)
      }else{
        con2.removeAttr('style');
      }

    });

})(jQuery);