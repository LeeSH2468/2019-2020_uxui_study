//national_header_footer.js
(function($){
  // load
  const wrap = $('#wrap');
  wrap.prepend('<div class="head_wrap"></div>');
  const headWrap = $('.head_wrap');

  wrap.append('<div class="foot_wrap"></div>');
  const footWrap = $('.foot_wrap');

  headWrap.load('./temp/header.html',function(){
  });
  footWrap.load('./temp/footer.html',function(){
  });


  // magazines
  console.log($.fn);

  const magaBtn = $('.maga');
  const mPopup = $('.m_popup');
  const closePopBtn = $('.m_close_btn');

  magaBtn.on('click',function(e){
    console.log(e);
    e.preventDefault();
    mPopup.fadeIn();
  });

  closePopBtn.on('click',function(e){
    console.log(e);
    e.preventDefault();
    mPopup.fadeOut();    
  });

  // background mousemove ==========================
  const viewBg =$('.view_pic_distant');

  viewBg.on('mousemove', function(e){
    console.log(e);
    let x = event.offsetX;
    let y = event.offsetY;
   viewBg.css({"transform":`translate(-${x}%,-${y}%)`});
  });

})(jQuery);