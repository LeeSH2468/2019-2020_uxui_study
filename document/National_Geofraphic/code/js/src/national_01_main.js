// national_01_main.js
(function($){
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