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
  // 배열
    const textlist = [
      {title:'인류멸망 시나리오',content:'절대 피할 수 없는 재앙, 생존 불가의 땅이 되다!',link:'https://youtu.be/mnojh6VjgpE'},
      {title:'로드트립 ‘캘리포니아 몬터레이’편',content:'여행의 시작과 끝, 17마일 드라이브',link:'https://youtu.be/Cn0pDP7DpcY'},
      {title:'2천km가 넘는 그레이트배리어리프의 푸른바다거북',content:'이곳의 생물 지표종인 푸른바다거북을 포획해서 좀 더 자세히 알아봅니다.',link:'https://youtu.be/p8PUtE6pVaY'},
      {title:'파랑새는 없다!',content:'왜 자연계에서는 파란색을 보기 어려울까?',link:'https://youtu.be/DWTMD9QKCmk'}
    ];
    let textlen = textlist.length;
    let formCon = '<div class="slide_form"><div class="guide"></div></div>';
    
    let indiCon = '<div class="indicator"><ul><li></li></ul></div>';
    let titleCon = '<div class="banner"><div class="y_img_zone"></div><div class="y_title_area"><div class="text_zone"><h4></h4><p></p></div><div class="y_link"><a>Youtube 바로가기</a></div></div></div>';
    let btnCon = '<div class="slide_btn"><button type="button" class="next"><span class="hidden">다음으로 이동</span></button>    <button type="button" class="prev"><span class="hidden">이전으로 이동</span></button></div>';

    // console.log(textlist[0].title);
    
    const youtubeArea = $('.youtube_area');
    const slidFrame = youtubeArea.children('.slide_frame');

    slidFrame.append(indiCon);
    slidFrame.append(formCon);

    const indi = youtubeArea.children('.indicator');
    const slideForm = youtubeArea.find('.slide_form');
    const guide = slideForm.children('.guide');
    // const banner = guide.children('.banner');
    slideForm.append(btnCon);

    for(let i = 0; i <textlen; i++){

      guide.append(titleCon);
      let bannerEq = guide.children('.banner').eq(i);
      let yImg = bannerEq.children('.y_img_zone');
      let y_title = bannerEq.children('y_title_area');
      let slideBtn = slideForm.children('.slide_btn');

      let title = y_title.find('h4');
      let content = y_title.find('p');
      let yLink =  y_title.find('a');
      title.text(textlist[i].title);
      content.text(textlist[i].content);
      yLink.attr({'href':textlist[i].link});
      console.log(textlist[i].title);
    }
    





// 마지막영역 복제 ===============================


// 인디케이터 영역 ===============================
    // for(let i = 0; i < slideLen -1; i++){
    //   indi.append('<li><a href="#"><span></span></a></li>');
    //   let indiLi = indi.children('li').eq(i);
    //   indiLi.find('span').text(slideEach.eq(i+1).text() );
    //   indiLi.find('spna').addClass('hidden');
    // };
    const indiLi = indi.children('li');
    indiLi.eq(0).addClass('action');


  

})(jQuery);