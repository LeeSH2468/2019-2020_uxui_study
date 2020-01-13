(function($){
  const body = $('body');
  const headbox = $('#headBox');
  const viewbox = $('#viewBox');
  const openbox = $('#openBox');
  const histobox = $('#histoBox');
  const center = $('#center');
  const withbox = $('#withBox');
  const footbox = $('#footBox');

  let htmlUrl = "./nh_temp/";
  let jsUrl = "../js/src/js_temp/";
  
  headbox.load(htmlUrl + 'nh_headbox.html',function(){
    body.append('<script src="' + jsUrl + 'nh_headbox.js"></script>')
  });
  viewbox.load(htmlUrl + 'nh_viewbox.html',function(){
    body.append('<script src="' + jsUrl + 'nh_viewbox.js"></script>')
  });
  openbox.load(htmlUrl + 'nh_openbox.html',function(){
    body.append('<script src="' + jsUrl + 'nh_openbox.js"></script>')
  });
  histobox.load(htmlUrl + 'nh_histobox.html',function(){
    body.append('<script src="' + jsUrl + 'nh_histobox.js"></script>')
  });
  center.load(htmlUrl + 'nh_center.html',function(){
    body.append('<script src="' + jsUrl + 'nh_center.js"></script>')
  });
  withbox.load(htmlUrl + 'nh_withbox.html',function(){
    body.append('<script src="' + jsUrl + 'nh_withbox.js"></script>')
  });
  footbox.load(htmlUrl + 'nh_footbox.html',function(){
    body.append('<script src="' + jsUrl + 'nh_footbox.js"></script>')
  });

  //scroll ====================================
  const myS = $('.scroll');
  const mySArr = [];
  for (let j = 0; j < myS.length; j++){
    mySArr[j] = myS.eq(j).offset().top;
  }
  let k = 0;
  let tf = true;
  $('html,body').animate({scrollTop:mySArr[k]});
  $(document).on('mousewheel DOMMouseScroll', function(e){
    if(tf){tf = false;
      let evt = e.originalEvent.wheelDelta;
      if(!evt){ evt = e.originalEvent.detail * -40;}
      if(evt < 0 && k < myS.length-1){
        k++;
      }else if(evt >= 0 && k > 0){
        k--;
      }
      $('html,body').animate({scrollTop:mySArr[k]},500,function(){
        tf = true;
      });
    }
  });



})(jQuery);