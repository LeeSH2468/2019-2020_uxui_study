(function($){
  const conBox = $('#conBox');
  const conBtn = conBox.find('button');
  const bar = conBox.find('.bar');

  conBtn.on('click',function(e){
    e.preventDefault();
    bar.toggleClass('hideBar');//toggleClass : class이름을 넣고 빼는 기능.
    let view = bar.hasClass('hideBar'); //hasClass : class이름의 존재 유(true), 무(false)를 판단
    if(view){
      bar.stop(false,false).animate({width:10+'%'});
    }else{
      bar.stop(false,false).animate({width:100+'%'});
    }
  });




})(jQuery);