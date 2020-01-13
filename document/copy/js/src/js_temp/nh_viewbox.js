const slideArea = $('.slide_area');
const guide = slideArea.children('.guide');
const textArea = guide.children('.text_area');

// 슬라이드삽입
let slideZone = '<h3><p></p><p></p></h3><p><span></span><span></span></p><a href="#"></a>'
const textList = [
  {title:'금융을 열어 세상을 바꾸다',
   titleem:'nh오픈 플랫폼',
   ptop:'NH오픈플랫폼은 핀테크 기업이 기존 핀테크 서비스에 금융서비스를 편리하게 개발할 수 있도록',
   pbottom:'금융API를 제공하고 지원하는 기반 환경 입니다.'
  },
  {title:'자유로운 개발환경을 지원하는',
   titleem:'개발자센터 오픈',
   ptop:'오픈API의 개발가이드와 사용예제, 웹상에서 자유로운 테스트를 지원하는 ',
   pbottom:'REST API 도구 등을 금융 클라우드 환경에서 제공합니다.'
  }
]


textArea.append(slideZone);
for(let i=0; i<textList.length; i++){
  let liEq = textArea.eq(i);
  let stitle = liEq.find('h3').children('p').eq(0);
  let btitle = liEq.find('h3').children('p').eq(1);
  let textTop = liEq.find('span').eq(0);
  let textBot = liEq.find('span').eq(1);

  stitle.text(textList[i].title);
  btitle.text(textList[i].titleem);
  textTop.text(textList[i].ptop);
  textBot.text(textList[i].pbottom);

}