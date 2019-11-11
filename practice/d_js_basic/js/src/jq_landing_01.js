// jq_landing_01.js
(function($){
  const win = $(window);
  const headBox = $('#headBox');
  const viewBox = $('#viewBox');
  const con_01 = $('#conBox_01');
  const con_02 = $('#conBox_02');
  const con_03 = $('#conBox_03');

  let winH = win.outerHeight();
  let headH = headBox.outerHeight();//브라우저 높이값
  let con_01_offset = con_01.offset().top;

  // con_01의 위치에서 브라우저의 2/3높이만큼 전에서 구동처리
  let myCon01_offset = con_01_offset - (winH/2);

  // con_02의 위치에서 브라우저의 1/2높이만큼 전에서 구동처리
  let con_02_offset = con_02.offset().top;
  let myCon02_offset = con_02_offset - (winH / 2);  

  // con_03의 위치에서 브라우저의 1/2높이만큼 전에서 구동처리
  let con_03_offset = con_03.offset().top;
  let myCon03_offset = con_03_offset - (winH / 2);

  win.on('scroll',function(){
    let winScroll = win.scrollTop();
    //headBox 크기 변하는 기능
    if(winScroll > headH){
    headBox.addClass('action');
    }else{
      headBox.removeClass('action');
    }

    //viewBox 나타나기 만들기
    if(winScroll > headH/2){
      viewBox.find('h2').addClass('action');
      viewBox.find('p').addClass('action');

    }else{
      viewBox.find('h2').removeClass('action');
      viewBox.find('p').removeClass('action');
    }

    // ================================
    // conBox_01내용
    let conImg = con_01.find('.narr').children('.img_box')
    let conNar = con_01.find('.narr').children('.nar_box')
    if(winScroll > myCon01_offset){
      conImg.addClass('action');
      conNar.addClass('action');
    }else{
      conImg.removeClass('action');
      conNar.removeClass('action');
    }
    // ================================
    //conBox_02
    if(winScroll > myCon02_offset){
      $('.con_02').addClass('action');
    }else{
      $('.con_02').removeClass('action');
    }
 
  // scroll시 이미지가 왼쪽>오른쪽으로 이동
  let n = 0;
  if (winScroll> myCon03_offset){
    let myLeft = winScroll - myCon03_offset;
    let myn = Math.round(myLeft % 30);
    if(myn <10){n = '00'+myn;
    }else if(myn < 100){n='0'+myn;
    }else{n = myn}

    con_03.find('.mv_bird').css({ top: myLeft + 'px', left: myLeft + 'px', backgroundImage:'url(../../img/bird_'+ n +'.png)'});
  }
 });
//  let r = Math.random()*45;-소수점길게|| Math.round()-반올림
//Math.ceil() - 올림 || Math.floor - 내림 || Math.abs-절댓값
 let r = Math.ceil(4.9);
 console.log(r);
})(jQuery);