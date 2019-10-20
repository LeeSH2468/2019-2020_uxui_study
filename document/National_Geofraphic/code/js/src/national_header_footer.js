//national_header_footer.js
(function($){
  const wrap = $('#wrap');
  wrap.prepend('<div class="head_wrap"></div>');
  const headWrap = $('.head_wrap');

  wrap.append('<div class="foot_wrap"></div>');
  const footWrap = $('.foot_wrap');

  headWrap.load('./temp/header.html',function(){
  });
  footWrap.load('./temp/footer.html',function(){
  });

})(jQuery);