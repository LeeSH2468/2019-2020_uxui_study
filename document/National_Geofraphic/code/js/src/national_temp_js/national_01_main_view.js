(function($){
  // background mousemove ==========================
  const viewBg = $('.view_area');
  const viewDist = $('.view_pic_bg');
  const viewLogo = $('.view_pic_logo');
  const viewClose = $('.view_pic_close');
  // console.log('view');
  viewBg.on('mousemove', function (e) {
    let x = event.pageX;
    let y = event.pageY;
    // console.log(x, y);
    viewDist.css({ "backgroundPosition": `${x/100}% ${y/100}%` });
    // viewLogo.css({ "backgroundPosition": `${50 - x/100}% ${50 - y/100}%` });
    viewClose.css({ "backgroundPosition": `${x/100}% -${y/100}%` });
  });

  
  //버튼 클릭 ==================
  const magaBtn = $('.magazine_zone > a');
  const mPopup = $('.m_popup');
  const mClosePopBtn = mPopup.find('.m_close_btn');

  magaBtn.on('click', function (e) {
    e.preventDefault();
    sPopup.stop().fadeOut();
    mPopup.stop().fadeIn();
    mClosePopBtn.focus();

  });
  mClosePopBtn.on('click', function (e) {
    e.preventDefault();
    mPopup.stop().fadeOut();
  });

  // store 팝업창 =============
  const storeBtn = $('.store_zone > a');
  const sPopup = $('.s_popup');
  const sClosePopBtn = sPopup.find('.s_close_btn');

  storeBtn.on('click', function (e) {
    e.preventDefault();
    mPopup.stop().fadeOut();
    sPopup.stop().fadeIn();
    sClosePopBtn.focus(function () {
      $(this).on('keyup', function (e) {
        if (e.keyCode == 27) {
          sPopup.fadeOut()
          storeBtn.focus();
        }
      });
    });
  });

  sClosePopBtn.on('click', function (e) {
    e.preventDefault();
    sPopup.stop().fadeOut();
  });

//intro=====================================
    const win = $(window);
    const introSub = $('.intro_sub_area');
    const subImage = introSub.children('.sub_image');
    const subPic = subImage.children('.sub_pic');
    const picZone = subPic.children('.pic_zone');
  
    const introDl = subImage.children('dl');
    const introDt = introDl.children('dt');
    const introDd = introDl.children('dd');
    const goLink = introDd.children('a');
  
    let introH = introSub.outerHeight();
    console.log(introH); 
    let winH = win.outerHeight();
    let introTop = introSub.offset().top;  
    let introOffset = introTop - (winH/3);

    win.on('scroll',function($){
      let winScroll = win.scrollTop();
      if(winScroll > introOffset ){
        subPic.addClass('action');
        introDl.addClass('action');
      }else{
        subPic.removeClass('action');
        introDl.removeClass('action');
      }
    });


//youtube=====================================
    const youtubeArea = $('.youtube_area');
    const slideForm = youtubeArea.children('.slide_form');
    const guide = slideForm.children('.guide');
    const banner = guide.children('.banner');
    const yImg = banner.children('.y_img_zone');
    const y_title = banner.children('y_title_area');

    const slideBtn = slideForm.children('.slide_btn');
    const indi = youtubeArea.children('.indicator');

// 마지막영역 복제 ===============================

// 인디케이터 영역 ===============================
    for(let i = 0; i < slideLen -1; i++){
      indi.append('<li><a href="#"><span></span></a></li>');
      let indiLi = indi.children('li').eq(i);
      indiLi.find('span').text(slideEach.eq(i+1).text() );
      indiLi.find('spna').addClass('hidden');
    };
    const indiLi = indi.children('li');
    indiLi.eq(0).addClass('action');


  

})(jQuery);