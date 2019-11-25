const titleArea = $('#title_area');
const titlePic = titleArea.find('.title_pic');
const titleText = titleArea.find('.title_text');
const conArea = $('#content_area');
const conZone = conArea.find('.con_zone');

let imgUrl = '../../../img/news_img/news_01/';
const contitle = [
  { title : "맨몸으로 절벽을 오르는 등반가, 알렉스 호놀드의 &lt;프리솔로&gt;",
    date: "4월 12일(금) 밤 11시 방송" ,
    
  }
]
const conlist = [
  {con:"<blockquote>저는 위험도와 결과를 구분하려고 해요. <br />\
             제가 이룰 결과의 무게는 어마어마하지만, 떨어질 확률은 낮다고 생각하며 프리솔로에 임하죠.<br />\
             그게 프리 솔로의 매력이에요.<br />\
             어렵고 위험해 보이지만, 안심하고 도전할 수 있죠. <br />\
             - 알렉스 호놀드- \
            </blockquote>",
   pic: imgUrl
  }, 
  {
   con: "지난 25일 미국 로스엔젤레스에서 열린 제 19회 아카데미 시상식에서 ‘장편 다큐멘터리 상’을 받은 내셔널지오그래픽의 <프리솔로>가 4월, 내셔널지오그래픽 채널로 찾아온다.다큐멘터리 부문에서 아카데미 수상을 한 산악영화는 <프리솔로>가 처음이다.",
   pic: imgUrl
  }
  ]

let partPic = '<div class="con_pic"></div>'
let partP = '<p></p>';
for(let i=0; i<partPic.length;i++){
  conZone.append(partPic);
  let pic = conZone.find('.con_pic');
  pic.css({backgroundImage:'url('+conlist[i].pic+'news_img_0'+(i+1)+'.jpg'+')'});
};
for(let i=0; i<partP.length;i++){
  conZone.append(partP);
  let text = conZone.find('p');
  text.text(conlist[i].con)
}