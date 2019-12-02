//모아보기 버튼========================
const searchArea = $('.search_area');
const searchDl = searchArea.find('dl');
const searchDt = searchDl.children('dt').find('a');
const searchDd = searchDl.children('dd');

searchDt.on('click',function(e){
  e.preventDefault();
  searchDd.slideToggle();
}); 
//====================================
const chCon = $('.ch_con_area'); 
const chUl = chCon.children('ul');

let imgUrl = '../../../img/channel_img/';
const liList = [
  { image: imgUrl + 'channel_01.jpg',
    title: '글로벌 시티즌',
    text: '공동의 문제, 하나의 움직임!',
    link: './national_03_news_con.html',
    class:'reality'
  },
  { image: imgUrl + 'channel_01.jpg',
    title: '고든 램지:언차티드',
    text: '고든 램지의 전세계 미식 로드 트립',
    link: './national_03_news_con.html',
    class:'food'
  },
  { image: imgUrl + 'channel_01.jpg',
  title: '샤크 어택5',
  text: '바다 최고의 포식자, 상거가 돌아왔다!',
  link: './national_03_news_con.html',
  class:'shark fes'
  },  
  { image: imgUrl + 'channel_01.jpg',
  title: '글로벌 시티즌',
  text: '공동의 문제, 하나의 움직임!',
  link: './national_03_news_con.html',
  class:'reality'
  },  
  { image: imgUrl + 'channel_01.jpg',
  title: '글로벌 시티즌',
  text: '공동의 문제, 하나의 움직임!',
  link: './national_03_news_con.html',
  class:'reality'
  },  
  { image: imgUrl + 'channel_01.jpg',
  title: 'dfd',
  text: '공동의 문제, 하나의 움직임!',
  link: './national_03_news_con.html',
  class:'reality'
  },
  { image: imgUrl + 'channel_01.jpg',
  title: 'dfd',
  text: '공동의 문제, 하나의 움직임!',
  link: './national_03_news_con.html',
  class:'reality'
  },
  { image: imgUrl + 'channel_01.jpg',
  title: 'dfd',
  text: '공동의 문제, 하나의 움직임!',
  link: './national_03_news_con.html',
  class:'reality'
  },
  { image: imgUrl + 'channel_01.jpg',
  title: 'dfd',
  text: '공동의 문제, 하나의 움직임!',
  link: './national_03_news_con.html',
  class:'reality'
  }
]
let liMake = '<li><a href="#"><div class="img_area"></div><div class="text_area"><h3></h3><p class="date"></p></div></a></li>';

for(let i=0; i<liList.length; i++){
  chUl.append(liMake);
  let chLi = chUl.children('li').eq(i);
  let aLink = chLi.children('a');
  let cImg = aLink.children('.img_area');
  let tArea = aLink.children('.text_area');
  let ctitle = tArea.children('h3');
  let cText = tArea.children('p');

  chLi.addClass(liList[i].class);
  ctitle.text(liList[i].title);
  cText.text(liList[i].text);
  aLink.attr({'href':liList[i].link});
  cImg.css({backgroundImage:'url('+liList[i].image+')'});

};
let chLi = chUl.children('li');


chLi.hide();
const liLen = chLi.length;
const moreBox = chCon.children('.moreBtn');
const moreBtn = moreBox.children('button');
let n = 6;
const show = function(l){
  if (liLen <= n){
    moreBtn.hide();
  }
  for(let j=0; j<l; j++){
    chLi.eq(j).show();
  }
}
show(n);
moreBtn.on('click',function(){
  show(n+=3);
});
