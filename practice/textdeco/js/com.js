(function($){
  let jump = $('.text');

  jump.on('mouseenter',function(){
   $(this).animate({paddingBottom:'10px'});
   console.log('jump'); 
  });


  let big = $('.text03').find('span');
  big.on('mouseenter',function(){
    $(this).addClass('action');
  });

  big.on('mouseleave',function(){
    $(this).removeClass('action');
  });

  // let big2 = $('.text02').find('div');
  // big.on('mouseenter',function(){
  //   for(let i=0;i<big.length;i++){
  //     console.log(i);
  //     $(this).eq(i).css({fontSize:(40+i)+'px'});
  //   }
  // });

  let redtext = $('.text04').children('span');
  redtext.on('mouseenter',function(){
    for(let i=0;i<redtext.length;i++){
      console.log(redtext.length);
      redtext.eq(i).css({color:'#'+i+i+'0000'});

    }
  });


})(jQuery);