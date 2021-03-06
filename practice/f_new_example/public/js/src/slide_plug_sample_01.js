$.fn.mySlide = function () {
  const slide = this;
  const product = slide.find('.product');
  const productUl = product.find('ul');
  let productLi = productUl.find('li');

  //==================================
  //버튼생성
  let btnIn = '<div class="btn"><button type="button" class="next"><i class="fas fa-angle-right"></i><span>다음내용보기</span></button><button type="button" class="prev"><i class="fas fa-angle-left"></i><span>이전내용보기</span></button></div>'
  slide.prepend(btnIn);
  const btn = $('.btn').find('button');

  const HorizonSlide = function () {
    productUl.css({ 'marginLeft': '-100%' });
    productLi.eq(-1).clone().prependTo(productUl);
    productLi = productUl.find('li');



    let productLen = productLi.length;
    productUl.css({ 'marginLeft': '-100%', 'width': 100 * productLen + '%', 'position': 'relative', 'left': 0 });
    productLi.css({ 'width': 100 / productLen + '%' });

    //=버튼
    let i = 0;
    btn.on('click', function (e) {
      e.preventDefault();
      let btnL = $(this).hasClass('next');
      if (btnL) { //next버튼
        i++;
        if (i >= productLen - 1) {
          productUl.css({ left: 100 + '%' });
          i = 0;
        }
        productUl.stop().animate({ 'left': -100 * i + '%' });
      } else {    //prev버튼
        i--;
        productUl.stop().animate({ 'left': -100 * i + '%' }, function () {
          if (i <= -1) {
            productUl.css({ left: -100 * (productLen - 2) + '%' });
            i = productLen - 2;
          }//if
        });//animate
      }//else
    });//btn.on
  };//HorizonSlide

  // HorizonSlide();
  //==================================
  //세로형 슬라이드
  const VerticalSlide = function () {
    productLi.eq(-1).clone().prependTo(productUl);
    productLi = productUl.find('li');
    let productH = product.outerHeight();
    let productLen = productLi.length;
    // console.log(productH);

    productUl.css({ width: '100%', height: 100 * productLen + '%', transform: `translateY(${-productH}px)`, position: 'relative', left: 0, top: 0 });
    productLi.css({ width: '100%', height: 100 / productLen + '%' });

    let i = 0;
    btn.on('click', function (e) {
      e.preventDefault();
      let btnL = $(this).hasClass('next');
      if (btnL) { //next버튼
        i++;
        if (i >= productLen - 1) {
          productUl.css({ 'top': productH + 'px' });
          i = 0;
        }
        productUl.stop().animate({ 'top': -productH * i + 'px' });
      } else { //prev버튼
        i--;
        productUl.stop().animate({ 'top': -productH * i + 'px' }, function () {
          if (i <= -1) {
            i = productLen - 2;
            productUl.css({ 'top': -productH * i + 'px' })
          }
        });
      }
    });
  };
  // VerticalSlide();
  //==================================
  //간단하게 화면만 바뀌는 기능
  const BasicSlide = function () {
    let productLen = productLi.length;
    let i = 0;
    btn.on('click', function () {
      let btnL = $(this).hasClass('next');
      if (btnL) {
        i++;
        if (i >= productLen) { i = 0; }
      } else {
        i--;
        if (i <= -1) { i = productLen };
      }
      productUl.css({ marginLeft: -100 * i + '%' });
    })
  }
  // BasicSlide();
  //==================================
  //z-index 기능을 통해 fadeIn 처리되게 만들기 (전부 포지션으로 처리)
  
  const ZIndexSlide = function () {
    productUl.css({ 'position': 'relative', width: '100%' });
    productLi.css({ 'position': 'absolute', width: '100%' });
    productLi.eq(0).nextAll().hide();
    
    let productLen = productLi.length;
    let i = 0;
    btn.on('click', function (e) {
      e.preventDefault();
      let btnL = $(this).hasClass('next');
      
      if (btnL) { //next버튼
        i++;
        if (i >= productLen) { i = 0 }
      } else {  //prev버튼
        i--;
        if (i < 0) { i = productLen - 1 }
      }
      
        productLi.eq(i).css({ 'zIndex': '100' });
        productLi.eq(i).stop().fadeIn(function () {
        productLi.css({ 'zIndex': 0 });
      });
      
      productLi.eq(i).siblings().stop().fadeOut();
    });//
  }
  //ZIndexSlide();
  //===============================

  product.css({overflow:'hidden'});
  //===============================
  //함수를 객체화처리
  return { 
    basic: BasicSlide,
    fade : ZIndexSlide,
    horizon : HorizonSlide,
    vertical : VerticalSlide
  }; //return 뒤에는 다른 기능 있으면 안됨.
}//$.fn.mySlide



