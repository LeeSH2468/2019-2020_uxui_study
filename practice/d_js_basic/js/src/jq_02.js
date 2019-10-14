// jq_02.js
(function($){ //jQuery내용 작성하는 곳. / 선택자

  document.getElementById('box');
  document.querySelector('#box');
  $('#box')


  document.getElementsByTagName('p')[0];
  document.querySelectorAll;('p');
  // $('p')
  
  // $('.box p').css({"padding":"0.5rem", "backgroundColor":"#fa0",});
  // $('.box').find('p').css({"color":"#f03","textShadow":"0.2rem 0.2rem 0.2rem rgba(0,0,0,0.7)"});

  // $('.box>p').css({"borderBottom":"2px solid #111"});
  //$('.box').children('p').css({"transform":"rotate(45deg)"});
  
    
  // $('dl > dt + dd').css({"backgroundColor":"#acc"});
  // $('dl').children('dt').next('dd').css({"fontSize":"2rem"});
  // $('dl > dt ~ dd').css({"marginLeft":"2rem"});
  // $('dl').children('dt').nextAll('dd').css({"color":"#f03"});
  // $('ul > li:nth-child(1)').css({"backgroundColor":"#ffa"});
  // $('ul').children('li:nth(0)').css({"color":"#aff"});
  // $('ul').children('li:nth(-1)').css({"color":"#fff"});
  // $('ul').children('li').eq(0).css({"borderBottom":"2px solid #333"});
  // $('ul').children('li').eq(-1).css({"borderBottom":"2px solid #f05"});

  $('ul').find('li:eq(-2)').siblings().css({"borderLeft": "3px solid #f06"});
  $('dd').parents('.box').css({"backgroundColor": "#ff0"});

  
// 자식 : children
// 자손 : find
// 인접형제(동생) : next
// 형제(동생들) : nextAll
// 부모 : parent
// 조부모(그 위도 포함) : parent, parentsUntil, closest
//  $('dd').parents('.box').css({"backgroundColor": "#ff0"});
//  $('dd').parentsUntil().css({"backgroundColor": "#ff0"});
// 형제(바로위 형) : prev
// 형제(형들) : prevAll
// 다른형제(나를제외) : siblings

})(jQuery);