(function($){
  const logo = $('h1');
  const gnb = $('#gnb');
  const li_01 = gnb.find('li').eq(0).children('a');
  const li_02 = gnb.find('li').eq(1).children('a');
  const li_03 = gnb.find('li').eq(2).children('a');
  const li_04 = gnb.find('li').eq(3).children('a');
  //각도 배열
  
  
  li_01.on('click mouseenter',function(e){
    logo.css({'transform':'rotate(50deg)'});
  });
  li_02.on('click mouseenter',function(e){
    logo.css({'transform':'rotate(10deg)'});
  });
  li_03.on('click mouseenter',function(e){
    logo.css({'transform':'rotate(-80deg)'});
  });
  li_04.on('click mouseenter',function(e){
    logo.css({'transform':'rotate(-108deg)'});
  });



})(jQuery);