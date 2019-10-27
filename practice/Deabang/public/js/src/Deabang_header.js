(function($){
 const gnb =$('#gnb');
 const gnbUl = gnb.children('ul');


 // ==============
 const gnbMenu=[{title:'회사소개',titleLink:"#",
                sub: [{subName :'회사개요',subLink:"#"},
                      {subName :'CEO인사말' ,subLink:"#"},
                      {subName :'경영이념' ,subLink:"#"},
                      {subName :'연혁' ,subLink:"#"},
                      {subName :'조직' ,subLink:"#"},
                      {subName :'CI / BI 소개' ,subLink:"#"},
                      {subName :'오시는 길' ,subLink:"#"}]},
                {title:'사업영역',titleLink:"#",
                sub: [{subName :'분양 캘린더',subLink:"#"},
                      {subName :'주택 / 분양사업' ,subLink:"#"},
                      {subName :'수주 사업' ,subLink:"#"},
                      {subName :'개발 사업' ,subLink:"#"},
                      {subName :'기타사업' ,subLink:"#"}]}, 
                {title:'홍보센터',titleLink:"#",
                sub: [{subName :'뉴스',subLink:"#"},
                      {subName :'언론 속 대방' ,subLink:"#"},
                      {subName :'분양광고' ,subLink:"#"}]},
                {title:'인재채용',titleLink:"#",
                sub: [{subName :'인재상',subLink:"#"},
                      {subName :'인사제도' ,subLink:"#"},
                      {subName :'채용절차' ,subLink:"#"},
                      {subName :'공고 및 지원' ,subLink:"#"}]},
                {title:'고객지원',titleLink:"#",
                sub: [{subName :'고객지원 안내',subLink:"#"},
                      {subName :'마감재' ,subLink:"#"},
                      {subName :'FAQ' ,subLink:"#"},
                      {subName :'관심고객등록' ,subLink:"#"},
                      {subName :'고객문의' ,subLink:"#"},
                      {subName :'하자문의' ,subLink:"#"}]}];
                    
const menuLen = gnbMenu.length;
for (let i = 0; i < menuLen ; i++){
  gnbUl.append('<li><div class="yellowBox"><dl><dt><a href="#"></a></dt><dd></dd></dl></div></li>');

  let gnbLi = gnbUl.children('li').eq(i);
  let gnbDl = gnbLi.find('dl');
  let gnbDt = gnbDl.children('dt');
  let gnbDtLink = gnbDt.children('a');

  
  gnbLi.find(gnbDtLink).text(gnbMenu[i].title);

  let subLen = gnbMenu[i].sub.length;

    for(let s = 0; s < subLen; s++){
      let gnbDd = gnbDl.children('dd');
      gnbDd.append('<a href="#"></a>');
      let DdName = gnbDd.children('a').eq(s);
      let gnbDdLink = gnbDd.children('a');


      gnbDdLink.attr({'href':gnbMenu[i].sub[s].subLink});
      DdName.text(gnbMenu[i].sub[s].subName);
    };//subLen 반복문
};//munuLen 반복문
 

//============================
const gnbLi = gnbUl.children('li');
const gnbLiBg = gnbUl.children('.yellowBox');
const gnbDl = gnbLi.find('dl');
const gnbDt = gnbDl.children('dt');
const gnbDtLink = gnbDt.children('a');
const gnbDd = gnbDl.children('dd');
const gnbDdLink = gnbDd.children('a');

gnbDtLink.on('mouseenter focus',function(e){
      let slideDd = $(this).parent('dt').siblings('dd');
      e.preventDefault();
      slideDd.stop().slideDown();
      gnbLiBg.stop().slideDown();
      gnbLiBg.css({'backgroundColor':'#F8B922'})

      slideDd.children('a').eq(-1).on('blur',function(){
            slideDd.stop().slideUp();
            });

      gnbLi.on('mouseleave',function(){
            slideDd.parents('li').css({'backgroundColor':' transparent'})
            slideDd.stop().slideUp();
            });
      
});//gnbDtLink

const addAction = function(){
      let dl = $(this).parent('dl');
      dl.find(gnbDdLink).addClass('action');
      $(this).children('a').find(gnbDdLink).removeClass('action');
};

const removeAction = function(){
      $(this).parent('dl').find(gnbDdLink),removeClass('action');
};

gnbDd.on({ 'mouseenter': addAction, 'mouseleave': removeAction});

})(jQuery);