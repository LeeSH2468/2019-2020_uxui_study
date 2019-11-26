  const gnb = $('#gnb');
  const gnbAdd = $('#gnb.on');
  const gnbInput = gnb.find('button');
  // const gnbInputOn = gnb.find('button');//checked된 input 어케 선택해
  gnbInput.on('click', function (e) {
    // e.preventDefault();
    gnb.toggleClass('on');
  });
  
  gnbAdd.on('scroll touchmove mousewheel',function(e){
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  // $(window).on('scroll', function () {
  //   let gnbView = gnb.css('display') == 'block';
  //   if (gnbView) {
  //     $('body, html').animate({
  //       scrollTop: 0
  //     });
  //   }
  // });