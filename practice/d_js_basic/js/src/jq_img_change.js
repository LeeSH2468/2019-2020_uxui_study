(function($){
  const wrap = $('#wrap');
  const myform = wrap.find('.mouse_form');
  const myLocation = wrap.find('.mouse_location');

  let url = '../../img/gear/';
  let j = 0;
  
  // myform.css({ backgroundImage: `url(${url}gear_001.png)`});
  for(let i=0; i<100; i++){
    if (i < 9){ j = '00' + (i+1);
    } else if(i < 99){ j = '0' + (i+1);
    } else { j = (i+1);  }
    myform.append(`<img src="${url}gear_${j}.png" alt = "이미지삽입">`);
  }
  const myImg = myform.find('img');
  myImg.parent().css({ position: 'relative',overflow:'hidden' });
  myImg.css({ position: 'absolute', top: 0, left: 0});
  myImg.eq(0).siblings().hide();
  
  // myform.on('mousemove',function(e){
  //   let mv = e.originalEvent.offsetX;
  //   let myi =  Math.floor(mv / 800 * 100)+1;
  //   myImg.eq(myi).show();
  //   myImg.eq(myi).siblings('img').hide();
  // });
  myLocation.on('mousemove', function (e) {
    let mv = e.originalEvent.offsetX;
    let thisWidth = $(this).outerWidth();
    let myi = Math.floor(mv / thisWidth * 100);
    myImg.eq(myi).show();
    myImg.eq(myi).siblings('img').hide();
   });
    // page - 전체페이지 | screen - 브라우저 화면 | client - 보이는 화면 기준
    // parseInt - 정수로 나타내기 |Math.floor();
    
   
    // myform.css({ backgroundImage: `url(${url}gear_${i}.png)` });
    // myform.css({ backgroundImage: 'url('+url+'gear_'+i+'.png)' });
 
})(jQuery);