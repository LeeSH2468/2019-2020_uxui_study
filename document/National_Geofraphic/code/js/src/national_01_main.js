//national_01_main.js
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


  //content ==
  content.load(htmlUrl + 'national_01_content.html',function(){
    let conJs = jsUrl + 'national_01_main_view.js';
    let introJs = jsUrl + 'national_01_main_intro_sub.js';
    let youJs = jsUrl + 'national_01_main_youtube.js';
    body.append(`<script src="${conJs}"></script>`);
    body.append(`<script src="${introJs}"></scripy>`);
    body.append(`<script src="${youJs}"></scripy>`);
  });

  //footer ==
  footer.load(htmlUrl + 'national_footer.html');

})(jQuery);