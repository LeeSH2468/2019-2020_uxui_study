// jq_05_event.js
// 'use strict'
(function($){
  let menu = $('.menu');
  let menuUl = menu.children('ul');
  let menuLi = menuUl.children('li');
  let menuLink = menuLi.children('a');
  
  let mLiBg = menuLi.css('backgroundColor');
  let mLiBdr = menuLi.css('borderRadius');
  let mLinkColor = menuLink.css('color');
  let mLinkWeight = menuLink.css('fontWeight');
  menuLink.css({'outline':0});

  let set = {
    licolor : mLiBg,
    liborder: mLiBdr,
    linkcolor : mLinkColor,
    linkbold : mLinkWeight
  };

  set.licolor
  console.log(mLinkColor);
//focus:초점이 잡힌 상태(a,button, form내부의 요소)
    menuLink.on('focus',function(){
      let mythis = $(this);
      mythis.parent('li').css({'backgroundColor' :'#0af', 'borderRadius':'0.5rem'});
      mythis.css({'color':'#fff','fontWeight':'bold','outline':'0'});
    });

//blur : 초첨이 잡힌 요소가 풀리는 상황
    menuLink.on('blur', function(){
      let mythis = $(this);
      mythis.parent('li').css({'backgroundColor':set.licolor,'borderRadius':set.liborder});
      mythis.css({'color':set.linkcolor ,'fontWeight':set.linkbold });
    });
    
    let mytop = $('.top_link').children('button');
   /* mytop.on('mouseenter',function(){});
    mytop.on('mouseleave',function(){});

    mytop.on('mouseenter',function(){})
         .on('mouseenter',function(){});
    */
   
    let topColor = mytop.css('backgroundColor')
    mytop.hover(function(){
                  $(this).animate({'backgroundColor':'#305'}, function(){
                    $(this).animate({'width':'300%'});
                  });
                }, //마우스 올렸을 경우
                function(){
                  $(this).animate({'backgroundColor':topColor});
                });//마우스 벗어났을 경우

    mytop.on('click',function(event){
      event.preventDefault();
      $('html,body').animate({'scrollTop':0});
    });


    const win = $(window);
    const conBox= $('#contentBox');
    win.on('scroll',function(){
      let myscroll = $(this).scrollTop();
    //  console.log(myscroll);
    if(myscroll > 150){
        conBox.stop().animate({'backgroundColor':'#aca'},300);
    }
    else if(myscroll <= 150){
        conBox.stop().animate({'backgroundColor':'#fca'},300);
    }

   // (myscroll > 150) ? conBox.css({'backgroundColor':'#aca'}) : conBox.css({'backgroundColor':'#fca'});
    });


  //크기값이 변경되었을 때 사용하는 기능(가로, 세로 일부 기능 제한두고 사용)
    let beforeWidth = win.width() //크기값이 변경되기 전 가로값
    win.on('resize',function(){
      let afterWidth = win.width(); //크기값이 변경된 후 가로값

      if(beforeWidth !== afterWidth){
        console.log('크기가 변경되었습니다.');
        history.go(0);
      }
    });
})(jQuery);