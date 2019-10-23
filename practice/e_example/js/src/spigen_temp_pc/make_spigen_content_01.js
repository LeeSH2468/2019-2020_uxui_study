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
    
   
   const mediaList = [{text:'[youtube]아마존으로 2600억 매출',date:'2019.10.22',img:'media01.jpg'},
     { text: '슈피겐코리아 미국 아마존 독점유통', date: '2019.10.20', img: 'media02.jpg'},
     { text: '[youtube]\'취업비자\'기업탐방', date: '2019.10.10', img: 'media03.jpg'}];

  const blogList = [{ text: '아무리 급해도 놓칠 수 없는...', date: '2019.07.26',img:'blog01_jpg' },
    { text: '업무중 즐기는 문화예술공연', date: '2019.07.26', img: 'blog02_jpg' },
    { text: '풀필먼트 서비스 세계의', date: '2019.07.26', img: 'blog03_jpg'},
                    ];


   
   // const blogList = ;
   
   // for(최초의 값;조건비교;값의증감 ){} - 반복문
  //  const media = conArea.find('.media');
  //  for(let i = 0; i < mediaList.length; i++){
  //     media.append(bmText);
  //    let myNth = media.children('.album').eq(i);
    const imgUrl ="../img/"
      
  //      myNth.find('h4').text('media');
  //      myNth.find('.con').text(mediaList[i].text);
  //      myNth.find('.date').text(mediaList[i].date);
  //      myNth.css({ 'backgroundImage': 'url(../img/media0' + (i + 1) + '.jpg)' });

    // } 
    // let i = 0 :임의의 값
    // i < ~~ :i가 med의 갯수가 i보다 작을 때
    // (mediaList.length : mediaList의 갯수를 알려줌)
    // i++ 추가해라
const ForList = function(mySel, myList, myText){
  let tabBox = conArea.find(mySel);
  const bmText = '<div class="album"><a href=""><h4></h4><p class="con"></p><p class="date"></p></a></div>';
  // for(최초의 값; 조건비교; 값의증감){}
  for(let i = 0; i < myList.length ; i++){
  tabBox.append(bmText);
  //  media.children('.album').eq(i).find('h4').text('media');
  let myNth = tabBox.children('.album').eq(i);
  myNth.find('h4').text(myText);
  myNth.find('.con').text( myList[i].text);
  myNth.find('.date').text( myList[i].date);
  let myImg = imgUrl + myList[i].img;
  myNth.css({'backgroundImage':'url(' + myImg + ')',
            'backgroundRepeat':'no-repeat',
            'background-position':'50% 50%',
            'background-size':'cover'});
  //  myNth.css({'backgroundImage':url(${myImg})});
  }
};//ForList End
ForList('.media', mediaList, 'media');
ForList('.blog', blogList, 'blog');


    // 키보드제어 (화살표로 설정)
    conDtBtn.on('keyup',function(e){
            e.preventDefault();
      // console.log(e.keyCode);
      //왼37,위38     오른39,아래40

    // let myThis = $(this).parent('dt');
    // switch(e.keyCode){
    //   case 37:      case 38:
    //     myThis.prevAll('dt').find('button').focus();
    //   break;

    //   case 39:      case 40:
    //     myThis.nextAll('dt').find('button').focus();
    //   break; }

      let num = e.keyCode;
      let beforeKey = num === 37 || num === 38 ;
      let afterKey = num === 39 || num === 40;
      let pdt = $(this).parent(conDt);

      if (beforeKey){
        pdt.prevAll('dt').find('button').focus();
      } else if (afterKey){
        pdt.nextAll('dt').find('button').focus();
      }

    });

//    if(e.keyCode === 37 || e.keyCode === 38){
//    } else if (e.keyCode === 39 || e.keyCode === 40){}


})(jQuery);