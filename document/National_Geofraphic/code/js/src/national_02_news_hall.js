(function($){
  const body   = $('body');
  const header = $('#headBox');
  const content = $('#conBox');
  const footer  = $('#footBox');

// ============================
  // header ==
  let htmlUrl = "./national_temp_html/";
  let jsUrl = "../js/src/national_temp_js/";

  header.load(htmlUrl + 'national_header.html',function(){
    body.append('<script src="'+ jsUrl + 'national_header.js"></script>');
  });
  //footer ==
  footer.load(htmlUrl + 'national_footer.html');

 
})(jQuery);