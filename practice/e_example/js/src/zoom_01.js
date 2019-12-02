(function($){
  const thumnailImg = ['005.jpg','006.jpg','007.jpg','008.jpg'];
  const big = $('.big');
  const smallLi = $('.small').find('li');
  const view = $('.view');
  const mylocation = $('.location');
  const myper = $('.per');
  const mLocation = $('.mouse_location')

  let bigW = big.outerWidth();
  let bigH = big.outerHeight();
  let url = "../img/money/";
  const ImgSet = function(i){
    big.css({backgroundImage:'url('+url+thumnailImg[i]+')'});
    view.css({backgroundImage:`url('${url+thumnailImg[i]}')`});
    mLocation.css({backgroundImage:`url('${url+thumnailImg[i]}')`});
  }
  ImgSet(0);

  smallLi.on('mouseenter focus',function(){
    let i = $(this).index();
    ImgSet(i);
  });

  // 위치값 %로 전환
  // 좌표 / 기준크기(big 크기) * 100
  // 기준크기 : big(마우스가 올라가있는)

  //vw = 값 / 스크린크기 * 100

  big.on('mousemove',function(e){
    let ofx = e.offsetX;
    let ofy = e.offsetY;
    console.log(ofx);
    mylocation.find('span').text(ofx+','+ofy);

    let perX = parseInt(ofx / bigW * 100);
    let perY = Math.round(ofy / bigH * 100);
    myper.find('span').text(perX+','+perY);

    view.css({backgroundPosition:perX + '%' + ' ' + perY + '%' });
    mLocation.stop().fadeIn();
    mLocation.css({top:(ofy + 10)+'px', left:(ofx + 10)+'px',backgroundPosition:perX + '%' + ' ' + perY + '%'})
  });

  big.on('mouseleave',function(){
    mLocation.stop().fadeOut();
  })
    /* Math.round() : 반올림
       Math.ceil() : 올림
       Math.floor() : 내림
       Math.random() :0~1까지 랜덤숫자

       소수점 3자리 숫자에서 올림
       Math.ceil( (값)*100 ) /100
    */


    //offsetX(), offsetY() - 브라우저 기준으로
    //pageX(),pageY()
    //clientX, clientY()
    //screenX(), screenY() - 모니터기준
})(jQuery);