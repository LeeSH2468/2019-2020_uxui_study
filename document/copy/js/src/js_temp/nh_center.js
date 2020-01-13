const center = $('#center');
const cArea = center.children('.center_area');
const cUl = cArea.children('ul');
const cLi = cUl.children('li');
const cLink = cUl.children('li').children('a');

const cSlide = cArea.children('.c_slide');
const cBtn = cSlide.children('.btn_zone').find('button');

const picUl = cSlide.find('.pic_slide');
const picLi = picUl.children('li');

// 슬라이드 삽입================
let picZone = '<div class="pic_zone"><i class="icon_pic"></i><div class="text_box"><h4></h4><p></p></div></div>';
const piclist = [
  {pic:'-912px -212px',
  title:'api 소개',
  content:'제공 중인 API목록 및 프로세스 단계별 흐름도를 통해 API를 설명합니다.'},
  {pic:'-346px -216px',
  title:'api 개발가이드',
  content:'NH오픈플랫폼의 API 사용방법 및 예제를 제공해 드립니다.'},
  {pic:'-601px -224px',
  title:'rest api도구',
  content:'별도의 클라이언트 프로그램 없이 Restful 방식의 오픈API를 웹에서 테스트 할 수 있는 도구와 환경을 제공합니다. 또한, GitHub를 통해 전 세계 개발자들과 소스코드를 공유하고 함께 소통할 수 있습니다.'}
];

picLi.append(picZone);
for (let i=0; i<piclist.length;i++){
  
  let liEq = picLi.eq(i);
  let pic = liEq .find('.icon_pic');
  let title = liEq .find('h4');
  let content = liEq .find('p');
  
  pic.css({backgroundPosition:piclist[i].pic});
  title.text(piclist[i].title);
  content.text(piclist[i].content); 
};
// 슬라이드 복제================
picUl.css({'marginLeft': '-100%' });
picLi.eq(-1).clone().prependTo(picUl);

// 아이콘 클릭시 이동 =================
const licon = [
  {select:'-28px -333px', non:'-28px -252px'},
  {select:'-264px -334px', non:'-264px -254px'},
  {select:'-145px -333px', non:'-145px -252px'}
];

for(let i=0;i<cLi.length;i++){
  cLi.eq(i).on('click',function(e){
    e.preventDefault();
    picUl.stop().animate({marginLeft:(-100 *( i + 1))+'%'});
    console.log($(this).find('a'));
    $(this).find('.icon').css({backgroundPositionY:'-333px'});
    $(this).siblings().find('.icon').css({backgroundPositionY:'-252px'});
    
  });

}


//버튼 클릭시 이동 =========
// let i = 0;
//   cBtn.on('click',function(e){
//     e.preventDefault();
//     let hasC = $(this).hasClass('next');
//     if(hasC){ //next버튼
//       i++
//       console.log(i);
//       if(i>picLi.length-1){
//         picUl.css({marginLeft:-100 + '%'},function(){
//           // picUl.stop().css({left:(-100 * i)+'%'});
//         });
//         i=0;
//       }
//       // picUl.stop().animate({left:(-100 * i)+'%'});
//     }
//     else{ //prev버튼
//       i--;
//       picUl.stop().animate({left:(-100 * i)+'%'},function(){
//         if(i <= -1){
//           picUl.css({marginLeft: -100 *(picLi.length -2) + '%'});
//           i = picLi.length -2;
//         }
//       });
//     }
//   });