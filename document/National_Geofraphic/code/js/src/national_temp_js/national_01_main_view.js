(function($){

  // background mousemove ==========================
  const viewBg = $('.view_pic_distant');

  viewBg.on('mousemove', function (e) {
    console.log(e);
    let x = event.offsetX;
    let y = event.offsetY;
    viewBg.css({ "backgroundPosition": `-${x}% -${y}%` });
  });
  

})(jQuery);