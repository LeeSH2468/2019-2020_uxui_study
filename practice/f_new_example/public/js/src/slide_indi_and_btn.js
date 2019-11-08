//slide_indi_and_btn.js
(function($){
  $.fn.myIndiSlide = function (jsonList, imgList){

  //1. data불러오기(json파일)
  
  let url = jsonList //'../../data/slide_indi_btn.json';
  let imgurl = imgList//'../img/slide_02/';
  let rel = null;

  $.ajax({
    async:false,
    dataType : 'json',
    url : url,
    success:function(data){
      return rel = data;
    }
  })
  console.log(rel);
//==================
  const slide =this;

  slide.append('<div class="slide_wrap"><ul></ul></div>');

  //btn 영역 생성
  const slideWrap = slide.find('.slide_wrap');

  slideWrap.before('<div class="btn">\
  <button class="next" type="button"><span>다음내용보기</span></button>\
  <button class="prev" type="button"><span>이전내용보기</span></button>\
  </div>');

  //indicator영역 (.slide_Wrap 이전에 생성)
  slideWrap.before('<ul class="indicator"></ul>');
  const indicator = slide.find('.indicator');

  //각 영역에 필요한 내용 담기
  let slideLen = rel.length;
  // console.log(slideLen);
  for(let i=0; i<slideLen; i++){
    let slideForm = `<li><span class="hidden">${rel[i].text}</span></li>`
    let indiForm = `<li><a href="#"><span class="hidden">${rel[i].img}</span></a></li>`;
    slideWrap.children('ul').append(slideForm);
    indicator.append(indiForm);
    
    slideWrap.find('li').eq(i).css({
      backgroundImage:'url('+imgurl + rel[i].img+')'
    });
  }//form
  //========================================
  //인디케이터 디자인
  indicator.parent().css({position:'relative'});
  indicator.css({position:'absolute',bottom:0, left:'50%',transform:'translateX(-50%)',width:'100%'});
  indicator.find('li').css({display:'inline-block',marginRight:'0.5rem'});
  indicator.find('a').css({display:'block',width:'26px',height:'26px',backgroundColor:'#777',borderRadius:'100%'});

  //button 디자인
  const btnArea = slide.find('.btn');
  const btn = btnArea.children('button');

  btnArea.css({position:'absolute',top:'50%',left:'5%',zIndex:'500' ,width:'90%',height:0});
  btn.css({width:'50px',height:'50px',transform:'translateY(-50%)'});
  btn.eq(0).css({float:'right'});
  btn.eq(-1).css({float:'left'});

  //슬라이드 영역 디자인
  let thisH = slide.outerHeight();
    slideWrap.css({ width: '100%', height: (thisH-50)+'px'});
  const slideUl = slideWrap.children('ul');
  //-----------------------------------------------
  //li 마지막요소 복제 첨부 후 디자인
  slideUl.children('li').eq(-1).clone().prependTo(slideUl);
  //-----------------------------------------------
  slideLen++;
  slideUl.css({width:100*slideLen+'%',height:'100%',marginLeft:'-100%',position:'relative',left:0});
  slideUl.children('li').css({width:100 / slideLen + '%',height:'100%',float:'left'});

  let n = 0;
  let indiLi = indicator.children('li');
  let indiIndex = indiLi.eq(n);
  indiIndex.addClass('action');

  /*let indiDefautl = indiIndex.css('backgroundColor');
  if(indiIndex.hasClass('action')){
    indiIndex.children('a').css({backgroundColor:'#f07'});
  } else {
    indiIndex.siblings().css({backgroundColor: indiDefautl});
  }*/
  $('head').append('<style class="myStyle"></style>');
  $('head').find('.myStyle').append('.indicator li.action >a{background-color:#f06 !important}');
  //======================================
  //indicator click/focus
  indiLi.on('click',function(e){
    e.preventDefault();
    n = $(this).index();
    indiLi.eq(n).addClass('action');
    indiLi.eq(n).siblings().removeClass('action');

    slideUl.stop().animate({left:-100*n +'%'});
  });

  //btn 클릭
  btn.on('click',function(e){
    e.preventDefault();
    let btnL = $(this).hasClass('next');
    if(btnL){
      n++;
      if(n >= slideLen-1){
        slideUl.css({left:'100%'});
        n=0;
      }

    }else{n--;}

      slideUl.stop().animate({left:-100*n +'%'},function(){
        if(n <0){ 
          n=slideLen-2;
          slideUl.css({left:-100 * n + '%'});
        }//if
      });
    indiLi.eq(n).addClass('action');
    indiLi.eq(n).siblings().removeClass('action');
    //else
  })//btn
}//$.fn.myIndiSlide
})(jQuery);