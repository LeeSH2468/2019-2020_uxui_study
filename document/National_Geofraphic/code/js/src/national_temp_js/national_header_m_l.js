  const gnb = $('#gnb');
  const gnbInput = gnb.find('button');
  // const gnbInputOn = gnb.find('button');//checked된 input 어케 선택해
  gnbInput.on('click', function (e) {
    // e.preventDefault();
    gnb.toggleClass('on');
    // if( $(this).is(':checked') ){
    //   $(this).attr('checked', true);
    //   $(this).prop('checked', true);
    // }else{
    //   gnb.removeClass('on');
    //   $(this).attr('checked', false);
    //   $(this).prop('checked', false);
      
    // }
    
  });

  // $(window).on('scroll', function () {
  //   let gnbView = gnb.css('display') == 'block';
  //   if (gnbView) {
  //     $('body, html').animate({
  //       scrollTop: 0
  //     });
  //   }
  // });