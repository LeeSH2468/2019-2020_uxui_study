//main-copy.js
(function($){
  const body = $('body');
  const wrap = $('#wrap');

  wrap.append('<section id = "viewBox"></section');
  const viewBox = $('#viewBox');

  viewBox.load('./temp/slide_01-copy.html',function(){
    return body.append('<script src="../js/src/temp/slide_01-copy.js></script>');
  });
})(jQuery);