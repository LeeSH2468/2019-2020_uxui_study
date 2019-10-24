//port_main.js
$(document).ready(function($){

  let article = $('article');
  //마우스 오버시 작동
  article.on("mouseenter",function(){
    $(this).stop().animate({'width':'35%'},300,function(){
      // article영역이 넓어진 후 실행
      $(this).stop().find('h3').stop().animate({'right':'10px'},400);
      $(this).find('p').stop().animate({'right':'10px'},500);
    });
  });

  //마우스 아웃시 작동
  article.on('mouseleave',function(){
    $(this).stop().animate({'width':'12%'}, 700);
    $(this).find('h3').stop().animate({'right':'-310px'},500)
    $(this).find('p').stop().animate({'right':'-310px'},500)
  });

})(jQuery);