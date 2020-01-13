const openBox = $('#openBox');
const openUl = openBox.children('ul');
const openLi = openUl.children('li');
const openLink = openLi.children('a');
const detail = openLi.find('.detail');

openLink.on('focus mouseenter click',function(e){
  e.preventDefault();
  $(this).find(detail).css({display:'block'});
});

openLink.on('mouseleave',function(e){
  e.preventDefault();
  $(this).find(detail).css({display:'none'});
});

for(j=0; j<openLi.length;j++){
  openLi.eq(j).find('button').eq(-1).on('blur',function(e){
    e.preventDefault();
    $(this).parents('.detail').css({display:'none'});
  })
};