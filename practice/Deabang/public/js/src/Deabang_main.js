// Deabang_main.js
(function($){
  const body = $('body');
  const wrap = $('#wrap');

  wrap.append('<section id="viewBox"></section>'); //#viewBox 생성
  const viewBox = $('#viewBox');
  

  
  viewBox.load('./temp/Deabang_view.html',function(){
    body.append('<script src = "../js/src/Deabang_header.js"></script>');
    body.append('<script src = "../js/src/Deabang_con.js"></script>');
  });

})(jQuery);