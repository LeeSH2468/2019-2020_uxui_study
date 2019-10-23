
//spigen_header.js

(function ($) {
  //1.#gnb영역 내부에있는 ul의 영역을 .side_gnb_area에 복사해서 붙여넣기

  const gnb = $('#gnb');
  const sideGnbArea = $('.side_gnb_area');


  let gnbContents = gnb.contents().clone();
  // console.log(gnbContents);
  sideGnbArea.append(gnbContents);

  const navList = [{title: 'about', sub: ['list01', 'list02', 'list03']},
                   { title: 'careers', sub: ['list01', 'list02', 'list03'] },
                   { title: 'media', sub: ['list01', 'list02', 'list03'] },
                   { title: 'IR', sub: ['list01', 'list02', 'list03'] }];
                   
                   
gnb.append('<ul></ul>');
const navUl = gnb.children('ul');                  
const navText = '<li><dl><dt><a></a></dt></dl></li>';


for (let i = 0; i < navList.length; i++){
  navUl.append(navText);
  let navLi = navUl.children('li').eq(i);
  let navLiLink = navLi.children('dt').children('a');
  navLiLink.text(navList[i].title);

  let navDl = navLi.children('dl');
  navDl.append('<dd></dd>');
  navDl.children('dl').append('a');
  for (let d = 0; d<navList.length; d++){
    let navDd = navDl.children('dd').eq(d);
    let navDdLink = navDd.children('a');
    navDdLink.text(navList[d].sub);
  };

  }
  // const navLi = 

  // navLi.text(navList[i].title);



//    let navLi = navUl.children('li');
//    let alink = navUl.children('li').eq(i);
//    navLi.text(navList[i].title);
   
//    navLi.append('<a></a>');
//    alink.text(navList[i].title);



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
  let time = 600;

  openGnbBtn.on('click', function(e) {
    e.preventDefault(); //변수이벤트 방지(이전 이벤트 삭제)
    // sideGnb.show();
    //esc =27
    
    sideGnb.stop().fadeIn(time/2,function(){
      $(this).on('keyup',function(e){
        if(e.keyCode == 27){
          sideGnb.fadeOut(time)
          openGnbBtn.focus();
        }
      });
    });

    closeGnbBtn.focus();
  });
  closeGnbBtn.on('click', function (e) {
    e.preventDefault();
    // sideGnb.hide();
    sideGnb.stop.fadeOut();

  });

  //--------------------------------------
  //#gnb에 마우스 올렸을 경우 dd를나오게 만들기

  const addAction = function () {
    let li = $(this).parents('li');
    li.find(gnbTitleLink).addClass('action');
    li.siblings().find(gnbTitleLink).removeClass('action');
    gnbDd.stop().slideDown();
  }

  const removeAction = function () {
    $(this).find(gnbTitleLink).removeClass('action');
    gnbDd.stop().slideUp();
  }

  // gnbDl.on('mouseenter', addAction);
  // gnbDl.on('mouseleave', removeAction);
  gnbDl.on({ 'mouseenter': addAction, 'mouseleave': removeAction, 'focus': addAction });
  //-------------------------------
  //#gnb > dt에 focus처리되면 dd가 나타나게 만들기

  gnbTitleLink.on('focus', function () {
    gnbDd.stop().slideDown();
  });
  gnbListLink.eq(-1).on('blur', function () {
    gnbDd.stop().slideUp();
  });

  //------------------------------
  //.side_gnb_area 내부의 마지막 a요소에서 blur처리되면, .close_gnb_btn위치로 다시 focus되어라.
  const sideLink = sideGnbArea.find('a');
  const sideLastLink = sideLink.eq(-1);
    sideLastLink.css({'fontSize':'2rem'});
  
    //$('h1').find('a').focus(); //과거에 쓰던 방법 - 포커스를 잡아라
    //$('h1').find('a').on('focus');//포커스가 잡히면 (~수행)
    sideLastLink.on('blur',function(){
      console.log('blur처리되었습니다.');
      closeGnbBtn.focus();
    });
  //.side_gnb_area 에서 키보드 esc키를 누르면 빠져나가고, 이전의 위치로 돌아가라.
  // -> .side_gnb_area가 보이는 곳에서 수행

  // sideGnbArea.on('keyup', function (e) {
  //   console.log(e.code);
  // });



})(jQuery);