// slide_04.js
(function($){
  //이미지경로, 이미지파일명
  const url = "../img/slide_01/"  //html위치 기준
  const imgList = [{
                title:'디지몬 어드벤처',content :'찾아라비밀의열쇠',
                linkTest: '바로가기1', link: 'http://www.naver.com', 
                bgimg:'mtSlideImage_01.jpg'
                },
                {title:'파워디지몬',content :'미로같이얽힌모험들',
                linkTest: '바로가기2', link: 'http://www.daum.net', 
                bgimg:'mtSlideImage_02.jpg'
                },
                {title:'디지몬 프론티어',content :'현실과또다른세상',
                linkTest: '바로가기3', link: 'http://google.com', 
                bgimg:'mtSlideImage_03.jpg'
                }, 
                {title:'디지몬 테이머즈',content :'환상의디지털세상',
                linkTest: '바로가기4', link: 'http://xidoweb.com', 
                bgimg:'mtSlideImage_04.jpg'
                },
                {title:'디지몬 다음뭐지',content :'펼쳐라마음속날개',
                  linkTest: '바로가기5', link: 'https://github.com/LeeSH2468/git_LSH', 
                bgimg:'mtSlideImage_05.jpg'
                }];
// -----------------------------------------
//기본선택자 및 내용(기본틀) 생성
const slide_04 = $("#viewBox_04");
  slide_04.append('<div class="slide_form"></div>');
const slideForm = slide_04.children('.slide_form');
  slideForm.append('<ul></ul>');
const slideGuide = slideForm.children('ul');

let imglen = imgList.length;
let slideCon = '<dl><dt></dt><dd class="con"></dd><dd class="link"><a href="#"></a></dd></dl>'
  for (let i = 0; i < imglen; i++){
    slideGuide.append(`<li class="slide4th_0${i+1}"></li>`);
    let li_nth = slideGuide.children('li').eq(i);


    li_nth.html(slideCon); //html = 내부의 내용을 지우고 넣기
    li_nth.css({'backgroundImage':`url(${url+imgList[i].bgimg})`})
    li_nth.find('dt').text(imgList[i].title);
    li_nth.find('.con').text(imgList[i].content);
    let link = li_nth.find('.link').children('a');
    link.text(imgList[i].linkTest);
    link.attr({'href':imgList[i].link,'target':'_blank'});
    // li_nth.css({'backgroundImage':"url(${"+url+imgList[i]+"})"});
  };

let cloneLi = slideGuide.children('li').eq(-1).clone(true);
// cloneLi.prependTo(slideGuide); //같은의미
slideGuide.prepend(cloneLi);  //같은의미

imglen++; // li마지막요소 추가하여 개수 다시파악
const slide4thLi = slideGuide.children('li');
  slideGuide.css({'width':'100' * imglen+'%'});
  slide4thLi.css({'width':100/imglen+'%','boxSizing':'border-box','border':'1px solid #5ff'});

  //===========================
  let btnMake = '<div class="slide_04_btn_area"><button type="button" class="next"><span>다음내용</span><button type="button" class="prev"><span>이전내용</span></button></div>'
  slide_04.prepend(btnMake);
  const btnArea = slide_04.find('.slide_04_btn_area');
  const btn = btnArea.children('button');
  const nextBtn = slide_04.children('.next');
  const prevBtn = slide_04.children('.next');

  // slide_04.find('span').addClass('hidden');
  btnArea.css({'position':'absolute','top':'-50px','left':0});
  btn.css({'width':'100px','height':'30px'});
  btn.eq(0).css({'float':'right'});
  btn.eq(1).css({'float':'left','marginRight':'10px'});

  //-------------------------------------------------------
  //생성된 버튼을 이용해, 좌우 슬라이드 기능 수행


  let num = 0;
  let lmgLen = imgList.length;
  // next버튼 클릭
/*  btn.eq(0).on('click',function(e){
    e.preventDefault();
    num++;  
    if(num >= imglen-1){num = 0;
    slideGuide.stop().animate({'left':'100%'});
  }
  slideGuide.stop().animate({'left':-100 * num+'%'},600);
  });
  
  //-----------------------


  //-----------------------
  // prev버튼 클릭
  btn.eq(1).on('click', function (e) {
    e.preventDefault();
    num--;
    slideGuide.stop().animate({'left':-100 * num+'%'},600,function(){

    
    if(num <=-1){
      num = lmgLen-2;
    slideGuide.css({'left':-100 * num + '%'},600);}
    });

  });
*/
  //next, prev를 하나로 구현
    btn.on('click',function(e){
    e.preventDefault();
    console.log($(this).index() == 0);
    if($(this).index() ==0){
      num++;
      if (num >= imglen - 1) { num = 0; slideGuide.css({ 'left': '100%' });}
      }else{
        num--;
      }
      slideGuide.stop().animate({ 'left': -100 * num + '%' }, 600, function () {  
        if (num <= -1) {
          num = imglen - 2;
          slideGuide.css({ 'left': -100 * num + '%' }, 600);}
         });
  });





  // let myn = 0;
  // nextBtn.on('click',function(e){
  //   myn++;
  //   // if(myn >= bannerLen -1)
  //   let per = -100 * myn + '%'
  //   slideGuide.stop().animate({'left':per})
  // });




})(jQuery);