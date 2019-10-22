// make_spigen_content_01.js
(function($){
  // console.log('load');
  const conArea = $('.content_area');
  const conDt = conArea.find('dt');
  const conDtBtn = conDt.children('button');
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

  const blogList = [{ text: '아무리 급해도 놓칠 수 없는...', date: '2019.07.26' },
                    { text: '업무중 즐기는 문화예술공연', date: '2019.07.26' },
                    {text:'풀필먼트 서비스 세계의',date:'2019.07.26'},
                    ];


   
   // const blogList = ;
   
   // for(최초의 값;조건비교;값의증감 ){} - 반복문
   const media = conArea.find('.media');
   for(let i = 0; i < mediaList.length; i++){
      media.append(bmText);
     let myNth = media.children('.album').eq(i);
      
       myNth.find('h4').text('media');
       myNth.find('.con').text(mediaList[i].text);
       myNth.find('.date').text(mediaList[i].date);
       myNth.css({ 'backgroundImage': 'url(../img/media0' + (i + 1) + '.jpg)' });

    } 
    // let i = 0 :임의의 값
    // i < ~~ :i가 med의 갯수가 i보다 작을 때
    // (mediaList.length : mediaList의 갯수를 알려줌)
    // i++ 추가해라
    const blog = conArea.find('.blog');
    for(let i = 0; i < blogList.length; i++){
      blog.append(bmText);
      let myNth = blog.children('.album').eq(i);

      myNth.find('h4').text('blog');
      myNth.find('.con').text(blogList[i].text);
      myNth.find('.date').text(blogList[i].date);

      let j = i;
      if (i < 10){j = '0'+(i+1);}
      myNth.css({'backgroundImage':'url(../img/blog'+j+'.jpg)'});
    }




    conDtBtn.on('keyup',function(e){
            e.preventDefault();
      console.log(e.keyCode);
      //왼37,위38     오른39,아래40

    let myThis = $(this).parent('dt');
    switch(e.keyCode){
      case 37:      case 38:
        myThis.prevAll('dt').find('button').focus();
      break;

      case 39:      case 40:
        myThis.nextAll('dt').find('button').focus();
      break; }
    });

//    if(e.keyCode === 37 || e.keyCode === 38){
//    } else if (e.keyCode === 39 || e.keyCode === 40){}


})(jQuery);