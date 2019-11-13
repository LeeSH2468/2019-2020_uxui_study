// nationl_main.js
(function($){
  console.log($,fn);
  // background mousemove ==========================
  const viewBg = $('.view_pic_distant');
  const body = $('body');

  body.on('mousemove', function (e) {
    let x = event.pageX;
    let y = event.pageY;
    console.log(x,y);
    viewBg.css({ "backgroundPosition": `${x / 100}% ${y / 100}%` });
  });



})(jQuery);