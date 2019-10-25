// main.js
(function($){
  const body = $('body');
  const wrap = $('#wrap');//#wrap


  //script 내용 간편작성 함수 생성
  const jsLink = (temp) => {
    return body.append(`<script src="../js/src/temp/${temp}"></script>`);
  };
  // 광고영역 생성 =======================
  wrap.append('<section id="viewBox"></section>'); //#viewBox 생성
  const viewBox = $('#viewBox');



  
  viewBox.load('./temp/slide_01.html',function(){
    jsLink('slide_01.js');
  });
//================================================

})(jQuery);