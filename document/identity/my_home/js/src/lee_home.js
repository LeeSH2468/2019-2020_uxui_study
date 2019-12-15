(function($){

  //header =============================
  const logo = $('h1');
  const gnb = $('#gnb');
  const li_01 = gnb.find('li').eq(0).children('a');
  const li_02 = gnb.find('li').eq(1).children('a');
  const li_03 = gnb.find('li').eq(2).children('a');
  const li_04 = gnb.find('li').eq(3).children('a');
  
  
  li_01.on('click mouseenter',function(e){
    logo.css({'transform':'rotate(-20deg)'});
  });
  li_02.on('click mouseenter',function(e){
    logo.css({'transform':'rotate(-40deg)'});
  });
  li_03.on('click mouseenter',function(e){
    logo.css({'transform':'rotate(-80deg)'});
  });
  li_04.on('click mouseenter',function(e){
    logo.css({'transform':'rotate(-100deg)'});
  });



  //aboutBox ============================
  const aboutBox = $('#aboutBox');
  const titleZone = aboutBox.find('.title_zone');
  const titleLi = titleZone.children('li');
  const conZone = aboutBox.find('.con_zone');
  const conLi = conZone.children('li');

console.log(conLi);
  titleLi.on('click',function(e){
    e.preventDefault();
    conLi.hide();
    $(this).siblings().removeClass('action');
    $(this).addClass('action');
    let cClass = $(this).text();
    let hClass = $(this).hasClass('cClass');

    console.log(cClass);
    console.log(hClass);
      conLi.hasClass('cClass').show();
      conLi.hasClass('cClass').siblings().hide();
  });



})(jQuery);