// acodion.js

(function($){
  const menuV = $('.accordion_menu_v');
  const menuDt = menuV.find('dt');
  const menuDd = menuV.find('dd');

  menuDd.eq(0).show();

  //let t = menuDt.eq().contents();
  //menuDt.wrap('<div>');
  
  menuDt.contents().wrap('<a href="#"></a>');//js사용시엔 반복문으로 처리

  const menuDtLink = menuDt.find('a');

  menuDtLink.css({'display':'block','width':'100%','height':'100%','color':'inherit'});


  // menuDt.on('click',function(){
  //   $(this).next(menuDd).siblings('dd').stop().slideUp();
  //   $(this).next(menuDd).stop().slideToggle();

  //선택요소의 뒤에오는 모든dd부터 그 다음 dt이전의 요소인 dd까지
    // console.log($(this).nextAll('dd').until('dt').prev('dd'))
  // });

  menuDt.on('click',function(){
    let i = $(this).index()/2;
    // console.log(i);
    menuDd.eq(i).siblings('dd').stop().slideUp();    //클릭하면 나머지 접힘
    menuDd.eq(i).stop().slideToggle(); //누르면 펼쳐지고 접힘

  });

  const addC = function (){
    $(this).addClass('actrion');    
  };
  const removeC = function(){
    $(this).removeClass('actrion');    
  };
  menuDtLink.on('focus',addC);
  menuDtLink.on('focus',removeC);


  menuDtLink.on({"focus":addC,"blur":removeC});

  // menuDtLink.on('focus',function(){
  //   // $(this).css({'backgroundColor':'#0f9','color':'#000'});
  //   // $(this).addClass('actrion');
  // });

  menuDtLink.on('blur',function(){
    // $(this).css({'backgroundColor':'#0f9','color':'#000'});
    // $(this).removeClass('actrion');    
  });

  
})(jQuery);