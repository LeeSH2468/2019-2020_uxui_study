(function($){
 /*
  let myarr = [];
  let myplus = [11,'aa',900];
  //push : 뒤에 추가 | shift : 앞 내용 삭제 | pop: 뒷내용 삭제
  myarr.push(10); //뒤에추가
  myarr.unshift(199);//앞에추가
  // myarr.shift(); //앞내용삭제
  // myarr.pop('a');//뒷내용삭제
  console.log(myarr);

  let myarrPlus = myarr.concat(myplus); //두 배열 합치기(뒤에)
  console.log(myarrPlus)
  */

  const htmlEl = $('html, body');
  const wrap = $('#wrap');
  const scrollEl = wrap.find('.scroll');

  htmlEl.animate({scrollTop:0});
  let myScrollElTop = [];
  let scrollLen = scrollEl.length;
  let timed = 1000;

  for(let i=0; i<scrollEl.length; i++){
    let scTop = scrollEl.eq(i).offset().top;
    myScrollElTop.push(scTop);
  }
  // console.log(myScrollElTop);
  //============================================
  let myStatus = true;
  let n, useN=0;
  //--------------------------------------
  const ScrollMagic = function () {
    htmlEl.animate({ scrollTop: myScrollElTop[useN] }, timed, 'easeInOutQuint', function () {
      myStatus = true;
    });
  }//scrollMagic
   //--------------------------------------
  $(window).on('mousewheel DOMMouseScroll',function(e){
    // e.preventDefault();
   
    if(e.originalEvent.wheelDelta){ //이 항목이 있으면
      n = e.originalEvent.wheelDelta * -1;
    }else{
      n = e.detail * 40; //파이어폭스용 (-3을 기준으로 움직임.)
    }

 
   //htmlEl.scrollTop(myScrollElTop[0]);  //최초의 스크롤 위치값0으로 설정
   if(myStatus){
     myStatus = false; // 기능실행 후 강제로 정지(마우스 휠이 튀는 현상을 막기위해 작동되지 않도록 제어)
     if(n>0){
       useN++;
       if(useN >= scrollLen){
         useN = scrollLen-1;
       }
       ScrollMagic();
     }else{
       useN--;
       if (useN < 0) {
         useN = 0;
       }
       ScrollMagic();
     }
   }
  });//마우스 휠

  //=======================================================
  const gnb = $('#gnb');
  const gnbUl = gnb.find('ul');
  const gnbLi = gnbUl.find('li');
  const gnbLiLink = gnbLi.find('a');

  gnbLiLink.on('click',function(e){
    e.preventDefault();
    // let thisLink = $(this).attr('href');//경로가 있어야 가능
    // let thisOffst = $(thisLink).offset().top;
    // htmlEl.animate({scrollTop:thisOffst});

    useN = $(this).parent('li').index();
    ScrollMagic();
  });
  //-----------------------------------------------------------
  //터치패드 사용시
  let startP,endP;
  $(window).on('touchstart',function(e){
    startP = e.originalEvent.touches[0].pageY;
    });//touchstart
  $(window).on('touchmove',function(){
    htmlEl.animate({scrollTop:myScrollElTop[useN]},0);
  });//touchmove
  $(window).on('touchend',function(e){
    endP = e.originalEvent.changedTouches[0].pageY;
    console.log(endP,startP);
    if (myStatus) {
      myStatus = false; // 기능실행 후 강제로 정지(마우스 휠이 튀는 현상을 막기위해 작동되지 않도록 제어)
      if (startP > endP) {useN++; if (useN >= scrollLen) { useN = scrollLen - 1; }
        ScrollMagic();
      } else {
        useN--;
        if (useN < 0) {
          useN = 0;
        }
        ScrollMagic();
      }
    }
    });  
    


  




})(jQuery);