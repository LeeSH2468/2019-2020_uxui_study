(function($){
  const logo = $('h1');
  const gnb = $('#gnb');
  const li_01 = gnb.find('li').eq(0).children('a');
  const li_02 = gnb.find('li').eq(1).children('a');
  const li_03 = gnb.find('li').eq(2).children('a');
  
  li_01.on('click',function(e){
    logo.css({'transform':'rotate(40deg)'});
  });
  li_02.on('click',function(e){
    logo.css({'transform':'rotate(-10deg)'});
  });
  li_03.on('click',function(e){
    logo.css({'transform':'rotate(-100deg)'});
  });




})(jQuery);