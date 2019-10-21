// woori_test.js
(function($){
// console.log($.fn);
  const gnb = $('#gnb');
  const gnbUl = gnb.find('ul');
  const gnbLi = gnb.find('li');
  const gnbDl = gnb.find('dl');
  const gnbDt = gnb.find('dt');
  const gnbDd = gnb.find('dd');
  const gnbTL = gnbDt.children('a');
  const gnbLl = gnbDd.children('a');
  const grayBox = $('.grayBox');

  gnbUl.on('mouseenter',function(e){
    // console.log(e);
    e.preventDefault();
    gnbDd.stop().slideDown();
    grayBox.stop().fadeIn();
  });

  gnbUl.on('mouseleave', function (e) {
    // console.log(e);
    e.preventDefault();
    gnbDd.stop().slideUp();
    grayBox.stop().fadeOut();
  });


  gnbTL.on('focus',function(e){
    console.log(e);
    e.preventDefault();
    gnbDd.stop().slideDown();
  });

  gnbLi.find(gnbLl).eq(-1).on('blur', function(e){
    console.log(e);
    e.preventDefault();
    gnbDd.stop().slideUp();
  });

})(jQuery);