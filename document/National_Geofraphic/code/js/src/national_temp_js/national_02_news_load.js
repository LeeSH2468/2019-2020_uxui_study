const newsCon = $('.news_con');
const newsUl = newsCon.children('ul');

let imgUrl = '../../../img/news_img/';
const liList = [
  { image: imgUrl + 'next_01.jpg',
    title: '맨몸으로 절벽을 오르는 등반가, 알렉스 호놀드의 <프리솔로>',
    date: '2018-11-17',
    link: 'https://www.naver.com/'
  },  
  { image: imgUrl + 'next_02.jpg',
    title: '인류의 새로운 시작, 그 두 번째 이야기',
    date: '2019-04-21',
    link: '#'
  },
  {
    image: imgUrl + 'next_03.jpg',
    title: '인류의 새로운 시작, 그 두 번째 이야기',
    date: '2019-04-21',
    link: '#'
  },
  {
    image: imgUrl + 'next_04.jpg',
    title: '인류의 새로운 시작, 그 두 번째 이야기',
    date: '2019-04-21',
    link: '#'
  },
  {
    image: imgUrl + 'next_02.jpg',
    title: '인류의 새로운 시작, 그 두 번째 이야기',
    date: '2019-04-21',
    link: '#'
  }
  ,
  {
    image: imgUrl + 'next_02.jpg',
    title: '인류의 새로운 시작, 그 두 번째 이야기',
    date: '2019-04-21',
    link: '#'
  }//----------------------------------------------------

]
let liMake = '<li><a href="#"><div class="img_area"></div><div class="text_area"><h3></h3><p class="date"></p></div></a></li>'



for(let i=0; i<liList.length; i++){
  newsUl.append(liMake);
  let newsLi = newsUl.children('li').eq(i);
  let aLink = newsLi.children('a');
  let nImg = aLink.children('.img_area');
  let tArea = aLink.children('.text_area');
  let ntitle = tArea.children('h3');
  let ndate = tArea.children('p');

  ntitle.text(liList[i].title);
  ndate.text(liList[i].date);
  aLink.attr({'href':liList[i].link});
  nImg.css({backgroundImage:'url('+liList[i].image+')'})
};

let newsLi = newsUl.children('li');

newsLi.hide();
const liLen = newsLi.length;
const moreBox = newsCon.children('.moreBtn');
const moreBtn = moreBox.children('button');
let n = 6;
const show = function(l){
  for(let j=0; j<l; j++){
    newsLi.eq(j).show();
  }
}
show(n);
moreBtn.on('click',function(){
  show(n+=3);
});