(function($){
  const body = $('body');
  const header = $('#headBox');
  const content = $('#conBox');
  const footer = $('#footBox');

  // ========================
  // header==
  let htmlUrl = "./temp/";
  let jsUrl = "../js/src/js_temp/";

  header.load(htmlUrl + 'n_header.html',function(){
    body.append('<script src="' + jsUrl + 'n_header.js"></script>');
  });

  // content==
  content.load(htmlUrl + 'n_main01.html',function(){
    body.append('<script src="' + jsUrl + 'n_main01.js"></script>');
  });
  content.load(htmlUrl + 'n_main02.html',function(){
    body.append('<script src="' + jsUrl + 'n_main02.js"></script>');
  });
  content.load(htmlUrl + 'n_main03.html',function(){
    body.append('<script src="' + jsUrl + 'n_main03.js"></script>');
  });
  content.load(htmlUrl + 'n_main04.html',function(){
    body.append('<script src="' + jsUrl + 'n_main04.js"></script>');
  });

  // footer==
  footer.load(htmlUrl + 'n_footer.html',function(){
    body.append('<script src="' + jsUrl + 'n_footer.js"></script>');
  });





})(jQuery);