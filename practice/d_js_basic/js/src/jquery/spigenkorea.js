// spigenkorea.js
(function($){
  const gnb = $('#gnb');
  const gnb2 = $('#gnb2');
  const gnbUl = gnb.children('ul');
  const gnbLi = gnbUl.children('li');
  const gnbLink = gnbLi.children('a');

  const gnbSubUl = gnbLi.children('ul');
  const gnbSubLi = gnbSubUl.children('li');
  gnbSubLi.children('a').addClass('titleLink');

  const partL = gnbLink.next('ul');
  const btn = $('.but');
  const btn2 = $('.but2');

  let cont = gnb2.find('li').contents();
  cont.wrap('<a href="#"></a>');
  

   gnbUl.css({'height':'100%','backgroundColor':'#fff','boxShadow':'0.2rem 0.2rem 0.2rem rgba(0,0,0,0.3)'});
   gnbLink.on('focus mouseenter',function(){
    gnbSubUl.stop().slideDown(500);
   });

  gnbUl.on('mouseleave',function(){
    gnbSubUl.stop().slideUp(500); 
   });

   gnbSubUl.on('focus mouseenter',function(){
     let US =$(this).next(gnbLink);
     
     US.parent().siblings().find(partL).slideUp();
     US.slideDown();

     US.find('a').eq(-1).on('blur',function(){
       US.slideUp();
     });

   });

  btn.on('click', function () {
    gnb2.css({'display':'block'});
    
  });
  btn2.on('click',function(){
    gnb2.css({'display':'none'});
    gnb.css({ 'display': 'block' })

  });


})(jQuery);