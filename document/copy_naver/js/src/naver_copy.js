(function($){
  const body = $('body');
  const header = $('#headBox');
  const content = $('#conBox');
  const footer = $('#footBox');

  // ========================
  // header==
  let htmlUrl = "./temp/";
  let jsUrl = "../js/src/js_temp/";

  console.log(content);

  header.load(htmlUrl + 'n_header.html',function(){
    console.log('a');
    body.append('<script src="' + jsUrl + 'n_header.js"></script>');
  });

  // content==
  content.load(
    htmlUrl + 'n_main.html',function(){
    body.append('<script src="' + jsUrl + 'n_main.js"></script>');
  });

  // footer==
  footer.load(htmlUrl + 'n_footer.html',function(){
    body.append('<script src="' + jsUrl + 'n_footer.js"></script>');
  });





})(jQuery);