(function($){
  const body = $('body');
  const header = $('#headBox');
  const content = $('#conBox');
  const footer = $('#footBox');
  const mobile=767, tablet=1279, laptop=1919, pc=1920;
  const device = ['mobile','tablet','laptop','pc','pcfull'];
// ====================

// header ==
let htmlUrl = "./temp/";
let jsUrl = "../js/src/js_temp/";

header.load(htmlUrl + 'lego_header.html',function(){
  body.append('<script src="' + jsUrl + 'lego_header.js"></script>')
});
// content ==
content.load(htmlUrl + 'lego_01_con.html',function(){
  body.append('<script src="' + jsUrl + 'lego_view.js"></script>');
  body.append('<script src="' + jsUrl + 'lego_cate.js"></script>');
  body.append('<script src="' + jsUrl + 'lego_favor.js"></script>');
  body.append('<script src="' + jsUrl + 'lego_set.js"></script>');
  body.append('<script src="' + jsUrl + 'lego_trend.js"></script>');
  body.append('<script src="' + jsUrl + 'lego_recom.js"></script>');
});

// footer ==

footer.load(htmlUrl + 'lego_footer.html',function(){
  body.append('<script src="' + jsUrl + 'lego_footer.js"></script>')
});



})(jQuery);