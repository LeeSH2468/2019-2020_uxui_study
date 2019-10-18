// make_spigen_main_pc.js
(function ($) {
  //1.#gnb영역 내부에있는 ul의 영역을 .side_gnb_area에 복사해서 붙여넣기

  const gnb = $('#gnb');
  const sideGnbArea = $('.side_gnb_area');


  let gnbContents = gnb.contents().clone();
  // console.log(gnbContents);
  sideGnbArea.append(gnbContents);



  //---------------------------------------------
  //버튼 클릭시 .side_gnb 나타나게 만들기
  const openGnbBtn = $('.gnb_btn>button');
  const closeGnbBtn = $('.close_gnb_btn > button');
  const sideGnb = $('.side_gnb');
  const gnbDt = gnb.find('dt');
  const gnbDl = gnb.find('dl');
  const gnbDd = gnb.find('dd');
  //a, button, form(input, textarea, select)
  const gnbTitleLink = gnbDt.children('a');
  const gnbListLink = gnbDd.children('a');


  openGnbBtn.on('click',function(e){
    e.preventDefault(); //변수이벤트 방지(이전 이벤트 삭제)
    // sideGnb.show();
    sideGnb.fadeIn();

  });
  closeGnbBtn.on('click',function(e){
    e.preventDefault();
    // sideGnb.hide();
    sideGnb.fadeOut();

  });

  //--------------------------------------
  //#gnb에 마우스 올렸을 경우 dd를나오게 만들기

  const addAction = function () {
    $(this).find(gnbTitleLink).addClass('action');
    gnbDd.stop().slideDown();}
  
  const removeAction = function(){
    $(this).find(gnbTitleLink).removeClass('action');
    gnbDd.stop().slideUp();}

  gnbDl.on('mouseenter', addAction);

  gnbDl.on('mouseleave', removeAction);
  //-------------------------------
  //#gnb > dt에 focus처리되면 dd가 나타나게 만들기

    gnbTitleLink.on('focus',function(){
      gnbDd.stop().slideDown();      
    });
    gnbListLink.eq(-1).on('blur', function () {
    gnbDd.stop().slideUp();
    });
})(jQuery);