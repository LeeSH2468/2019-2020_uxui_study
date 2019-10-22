
// make_spigen_main_pc.js

(function ($) {
  const wrap = $('#wrap');
  const body = $('body');
  const header = $('#headBox');
  const adver = $('#viewBox');
  const content = $('#conBox');
  const footer = $('#footBox');
  // ===========================
  let tempUrl = "./spigen_main_pc/";
  let jsUrl = "../js/src/spigen_temp_pc/";

  header.load(tempUrl + 'spigen_header.html', function () {
    // $(this).after('<script src="../js/src/spigen_temp_pc/make_spigen_header.js"></script>');
  });
  adver.load(tempUrl + 'spigen_main_adver.html');
  
  content.load(tempUrl + 'spigen_main_content_01.html',function(){
    let conJs = jsUrl+'make_spigen_content_01.js';
    body.append(`<script src="${conJs}"></script>`);
  });
  footer.load(tempUrl + 'spigen_footer.html');
  // wrap.after('<script src="../js/src/spigen_temp_pc/make_spigen_header.js"></script>');
  setTimeout(function () {
    body.append('<script src="../js/src/spigen_temp_pc/make_spigen_header.js"></script>');
  }, 100);

})(jQuery);