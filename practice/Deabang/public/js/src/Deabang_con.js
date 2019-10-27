(function(){
  const conBox   = $('#conBox');
  const indicator = conBox.find('.view_indicator');
  const indiLi    = indicator.find('li');
  const indiLink  = indiLi.children('a');
  const slideForm = conBox.find('.slide_form');
  const guideBox  = conBox.find('.guide');
  const NextBtn = conBox.find('button.next');
  const PrevBtn = conBox.find('button.prev');

  indiLink.on('click focus', function(e){
    e.preventDefault();
    let i = $(this).parent('li').index();

    indiLink.removeClass('action');
    $(this).addClass('action');
    guideBox.stop().animate({'left':-100 * i + '%'});
  });
  PrevBtn.on('click focus', function(e){
    e.preventDefault();
    let i = $(this).parents(conBox).find('li').index();
    console.log(i);

    PrevBtn.removeClass('action');
    $(this).addClass('action');
    guideBox.stop().animate({'left':-100 * i + '%'});
  });
  
  NextBtn.on('click focus', function(e){
    e.preventDefault();
    let i = $(this).parents(conBox).find('li').index();
    console.log(i);

    indiLink.removeClass('action');
    $(this).addClass('action');
    guideBox.stop().animate({'left':-100 * i + '%'});
  });
})(jQuery);