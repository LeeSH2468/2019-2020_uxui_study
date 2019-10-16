//jq_06_load.js

(function($){
  //jquery기초

  const wrap = $('#wrap');
  wrap.prepend('<div class="head_wrap"></div>');
  const headWrap = $('.head_wrap');
  
  wrap.append('<div class="foot_wrap"></div>');
  const footWrap = $('.foot_wrap');



  headWrap.load('./temp/header.html',function(data){
    console.log(data);
  const headBox = $('#headBox');
  headBox.css ({'backgroundColor':'#3ff'});
  });

  footWrap.load('./temp/footer.html',function(data){
  console.log(data);
  });

  wrap.load('../../data/test.json',function(data){
    console.log(data);
  })


})(jQuery);