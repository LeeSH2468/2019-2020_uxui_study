// national_01_main.js
(function($){

  const magaBtn = $('.maga');
  const mPopup = $('.m_popup');
  const closePopBtn = mPopup.find('.m_close_btn');

  magaBtn.on('click', function (e) {
    e.preventDefault();
    console.log(e);
    mPopup.fadeIn();
  });

  closePopBtn.css({ 'backgroundColor': '#000' });

  closePopBtn.on('click',function(e){
    e.preventDefault();
    console.log(e);
    mPopup.fadeOut();    
  });

  // background mousemove ==========================
  const viewBg = $('.view_pic_distant');

  viewBg.on('mousemove', function (e) {
    console.log(e);
    let x = event.offsetX;
    let y = event.offsetY;
    viewBg.css({ "backgroundPosition": `-${x}% -${y}%` });
  });
  

})(jQuery);