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

})(jQuery);

