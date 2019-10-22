// make_spigen_content_01.js
(function($){
  // console.log('load');
  const conArea = $('.content_area');
  const conDt = conArea.find('dt');
  // const conDtBtn = conDd.children('button');
  const conDd = conArea.find('dd');

  conDt.children('button').on('click focus',function(e){
    e.preventDefault();
    let btn = $(this);
    let btnParent = btn.parent();
    let parNext = btnParent.next('dd');
    btn.addClass('action');
    btnParent.siblings('dt').children('button').removeClass('action');

/* //step_1 - 탭 누르면 광고 페이지 바꾸기
    parNext.addClass('action');
    parNext.siblings('dd').removeClass('action');
*/  
    //step_2 -광고 깜빡거리면서 나오고 사라지기

    
    parNext.stop().fadeIn();
    parNext.siblings('dd').stop().fadeOut();
    //action 클래스 이름으로 구분할 수 있도록 처리
    //css에서 동작하지 않도록 처리
  });
    // ==========================
    const bmText = '\
   <div class="album">\
      <a href = "" >\
        <h4>blog</h4>\
        <p class="con">이미지에 관한 내용</p>\
        <p class="date">2019.10.22</p>\
      </a >\
   </div >';
   
   const mediaList = [{text:'[youtube]아마존으로 2600억 매출',date:'2019.10.22'},
                      {text:'슈피겐코리아 미국 아마존 독점유통',date:'2019.10.20'},
                      {text:'[youtube]\'취업비자\'기업탐방',date:'2019.10.10'}];

  


   
   // const blogList = ;
   
   // for(최초의 값;조건비교;값의증감 ){} - 반복문
   const media = conArea.find('.media');
   for(let i = 0; i < mediaList.length; i++){
      media.append(bmText);
     let myNth = media.children('.album').eq(i);
      
       myNth.find('h4').text('media');
       myNth.find('.con').text(mediaList[i].text);
       myNth.find('.date').text(mediaList[i].date);
    } 
    // let i = 0 :임의의 값
    // i < ~~ :i가 med의 갯수가 i보다 작을 때
    // (mediaList.length : mediaList의 갯수를 알려줌)
    // i++ 추가해라


})(jQuery);