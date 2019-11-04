//main-copy.js
(function($){
  const body = $('body');
  const wrap = $('#wrap');

  wrap.append('<section id = "viewBox"></section');
  const viewBox = $('#viewBox');

  const jsLink = (temp) => {
    return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
  }
  viewBox.load('./temp/slide_01-copy.html',function(){
    jsLink('slide_01-copy');
  });

})(jQuery);