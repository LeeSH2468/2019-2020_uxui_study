(function($){

  // background mousemove ==========================
  const viewBg = $('.view_area');
  const viewDist = $('.view_pic_distant');
  const viewLogo = $('.view_pic_logo');
  const viewClose = $('.view_pic_close');
  // console.log('view');
  viewBg.on('mousemove', function (e) {
    let x = event.pageX;
    let y = event.pageY;
    console.log(x, y);
    viewDist.css({ "backgroundPosition": `${x/100}% ${y/100}%` });
    viewLogo.css({ "backgroundPosition": `${50 - x/100}% ${50 - y/100}%` });
    viewClose.css({ "backgroundPosition": `${x/100}% -${y/100}%` });
  });
  

})(jQuery);