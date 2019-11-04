// slide_01-copy.js
(function($){
  const accor = $('.accor');
  const acDt = accor.find('dt');
  const acDtLink = acDt.children('a');
  const acDd = accor.find('dd');
  const upArrow = $('.fa-caret-up');
  const downArrow = $('.fa-caret-down');


  acDtLink.on('click', function (e) {
    e.preventDefault();
    
    const acDtEach = $(this).parent('dt').siblings('dd');
    let i = $(this).parent('dt').index() / 2;
    acDd.eq(i).siblings('dd').stop().slideUp();
    $(this).parent('dt').siblings('dt').css({backgroundColor: '#067'});
    $(this).parent('dt').css({ backgroundColor: '#047' });
    acDtEach.eq(i).stop().slideToggle();

    upArrow.hide();
    downArrow.show();
    $(this).find(upArrow).show();
    $(this).find(downArrow).hide(); 
  
  });

const ul = $('.new_list');
 for(let i  =0;i<5;i++){
   ul.append('<li></li>');
   let li = $('li').eq(i);
   li.text('list value 0'+ (i+1) +'생성하기');
 }
})(jQuery);