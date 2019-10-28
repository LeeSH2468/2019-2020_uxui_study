(function ($) {
  const gnb = $ ('#gnb');
  const gnbUl = gnb.children('ul');

  const gnbMenu=[{title:'국가인재데이터베이스 소개',
                  sub:[{subName:'국가인재데이터베이스'},
                        {subName:'DB등록서식 다운로드'},
                        {subName:'공인인증서 안내'},
                        {subName:'사이트맵'}]},
                  {title:'국민추천제'},
                  {title:'국민추천제',
                  sub:[{subName:'공지사항'},
                       {subName:'자주하는 질문(FAQ)'}]}];
                  

  //const menuLen = gnbMenu.length;
  //for(let i = 0; i<menuLen; i++){
  //   gnbUl.append('<li><dl><dt><a></a></dt><dd><a></a></dd></dl></li>');
  // };
  const viewBox = $('#viewBox');
  const indicator = viewBox.find('.view_indicator');
  const indiLi = indicator.find('li');
  const indiLink = indiLi.find('a');
  const guideBox = $('.guide');
  const slideForm = viewBox.find('.slide_form');
  

  indiLink.on('click focus',function(e){
    e.preventDefault();
    
    let i = $(this).parent('li').index();
    indiLink.removeClass('action');
    $(this).addClass('action');
    guideBox.stop().animate({'left':-100 * i + '%'});
  });
  
  

})(jQuery);