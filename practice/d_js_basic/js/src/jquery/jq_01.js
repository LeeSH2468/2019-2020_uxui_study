//jq_01.js


(function ($){
  // console.log($.fn.jquery); //버전확인
  
  //#wrap{width:700px; height:auto; margin:auto; background-color:#faa;}
  
  
  $('#wrap').css({width:'700px', 'height':'auto', 'backgroundColor':'#faa'});
  $('h1').css({'width':'100%', 'height':'auto', 'backgroundColor':'#acf'});
  $('h2').on('click',function(){
    $('#wrap').animate({'height':'1000px','backgroundColor':'#0af'});
  });

})(jQuery);