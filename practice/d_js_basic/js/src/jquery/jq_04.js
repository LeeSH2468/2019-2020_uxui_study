//jq_04_event.js
(function($){
 //jquery 이벤트 이해하기

  // 선택.on('이벤트',function(){해당이벤트를 처리시(예:클릭) 수행하는 기능});

/*#contentBox:hover {background-color}*/
const conBox = $('#contentBox');

conBox.on('mouseenter',function(){
  $(this).css({'backgroundColor':'#aaf',transition:'all 400ms ease'});
});

conBox.on('mouseleave',function(){
  $(this).animate({'backgroundColor':"#faa"}, 100);
});


//click-좌클릭 | dblclick-더블클릭 | mousedown-마우스클릭(좌,우,휠 마우스의 모든 버튼 클릭) | mouseup-(마우스의 모든 버튼 땔 때) | mousewheel-마우스휠작동

//keypress-키보드 누르는 것(문자쪽만,특수키x) | keydown-키보드 버튼 누르는 것 | keyup-키보드 눌렀다 땐 것

//focus, hover, selected, changed
//scroll(마우스 휠), resize(반응형)
//load

const con = $('#contentBox');
const conUl = con.children('ul');
const conLi = conUl.children('li');

// console.log(conLi);
// conLi.eq(0).css({'color':"#fff"})
conLi.eq(0).on('click', function(){
  $(this).css({'backgroundColor':'#fff'});
});

conLi.eq(1).on('dblclick',function(){
  $(this).css({'backgroundColor':'#aaa'});
});

conLi.eq(2).on('mousedown',function(evt){
//  console.log(evt.button);
//  $(this).css({'backgroundColor':'#07f'});
 /* switch (evt.button){
    case 0:
      $(this).css({'backgroundColor':'#07f'})
      break;
    case 1:
      $(this).css({'backgroundColor':'#f70'})
      break;
    case 2:
      $(this).css({'backgroundColor':'#000','color':'#fff'})
      break;
    default:
      $(this).css({'backgroundColor':'#aaa'})
      break;
    */
  if(evt.button === 0){
    $(this).css({'backgroundColor':'#07f'})
  }else if(evt.button === 1){
    $(this).css({'backgroundColor':'#f70'})
  }else if(evt.button === 2){
    $(this).css({'backgroundColor':'#000','color':'#fff'})
  }else{
    $(this).css({'backgroundColor':'#aaa'})
  }

});


conLi.eq(2).on('mouseup',function(){
  $(this).css({'backgroundColor':'#fa0'});
});

conLi.eq(3).on('mousewheel DOMMouseScroll', function (evt) {
  console.log(evt);
  $(this).css({ 'backgroundColor': '#04f' })
});

conLi.eq(4).on('mousemove',function(event){
  console.log(event.clientX,event.clientY); //$(this)의 왼쪽 상단을 기준으로0.0
  //console.log(event.pageX,event.pageY); //브라우저 기준으로 왼쪽 상단0.0
  let x = event.offsetX;
  let y = event.offsetY;
  
  // $('.ball').css({"transform":"translate("+ x +","+y+ ")"});
  $('.ball').css({"transform":`translate(-${x}%,-${y}%)`});
});


conLi.eq(5).children('input').on('keyup',function(evt){
  console.log(evt.key, evt.keyCode); 
  
});




})(jQuery);


