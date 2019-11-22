(function($){
  let win = $(window);
  let par = [];

  const vb = $('#viewBox');
  for(let i = 0; i<vb.children().length; i++){
    let p = '.par_0' + i;
    par.push(p);
  }

  // let winW = win.outerWidth();
  // if(winW <= 1600){
  //   vb.children('div').css({backgroundSize:'170%'})
  // }

  let winH = win.outerHeight();
  win.on('scroll',function(){
    let scroll = win.scrollTop()/4 *3;
    // console.log(scroll);
    for(let j=0; j<par.length;j++){
      $(par[j]).css({top: -scroll/(par.length-j)});
    }
    // $(par[0]).css({top: -scroll/8});
    // $(par[1]).css({top: -scroll/7});
    // $(par[2]).css({top: -scroll/6});
    // $(par[3]).css({top: -scroll/5});
    // $(par[4]).css({top: -scroll/4});
    // $(par[5]).css({top: -scroll/3});
    // $(par[6]).css({top: -scroll/2});
    // $(par[7]).css({top: -scroll/1});
    // $(par[8]).css({top: -scroll});
  });
  

  const conBox = $('#conBox');
  const conList = conBox.find('li');
  const liOffset = [];
  for(let i = 0; i<conList.length; i++){
    // liOffset.push(conList.eq(i).offset().top) //같은 의미( 뒤에다 붙이기 )
    liOffset[i] = conList.eq(i).offset().top //i번째에 붙이기
  }
  console.log(liOffset);

  win.on('scroll',function(e){
    e.preventDefault();
    let scroll = win.scrollTop();
    let scRel = [];
    for(let i = 0; i<conList.length; i++){
      scRel[i] = liOffset[i] - scroll - (winH/2);
      //conList.eq(i).find('span').css({transform:'translateY('+ scRel[i]/7 + 'px)'});//아래>위
      conList.eq(i).find('span').css({transform:'translateY('+ -scRel[i]/7 + 'px)'});//위>아래
      
    }
    console.log(scRel[0]);
  });
  
  /*
  const a = [123,123] //참조변수 | 배열 형식은 const여도 변경 가능
  a[0] = 345;
  a[1] = 987;
  */
})(jQuery);