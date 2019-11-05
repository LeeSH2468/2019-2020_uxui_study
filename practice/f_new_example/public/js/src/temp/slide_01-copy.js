// slide_01-copy.js
(function($){
  const accor = $('.accor');
  const acDt = accor.find('dt');
  const acDtLink = acDt.children('a');
  const acDd = accor.find('dd');
  const upArrow = $('.fa-caret-up');
  const downArrow = $('.fa-caret-down');


  acDtLink.on('click', function (e) {
    e.preventDefault();
    
    const acDtEach = $(this).parent('dt').siblings('dd');
    let i = $(this).parent('dt').index() / 2;
    acDd.eq(i).siblings('dd').stop().slideUp();
    $(this).parent('dt').siblings('dt').css({backgroundColor: '#067'});
    $(this).parent('dt').css({ backgroundColor: '#047' });
    acDtEach.eq(i).stop().slideToggle();

    upArrow.hide();
    downArrow.show();
    $(this).find(upArrow).show();
    $(this).find(downArrow).hide(); 
  
  });
/*
const ul = $('.new_list');
ul.wrap('<div id= "news"></div>');
 for(let i  =0;i<5;i++){
   ul.append('<li></li>');
   let li = $('li').eq(i);
   li.text('list value 0'+ (i+1) +'생성하기');
 };

  const mini = $('#miniProduct');
  const product = mini.children('.product');
  const proUl = product.children('ul');
  const indicator = mini.children('.indicator');
  const indiUl = indicator.children('ul');
  const indiLink = indicator.find('li');

  indicator.find('li').eq(0).addClass('action');
  indiLink.children('a').on('click',function(e){
    e.preventDefault();
    n = $(this).parent('li').index();
      proUl.animate({left:-100*n + '%'});
      indiLink.eq(n).siblings().removeClass('action');
      indiLink.eq(n).addClass('action');
  });
*/

  const miniProductA = $('#miniProduct_a');
  const indicatorA = miniProductA.children('.indicator_a');
  const indiLi = indicatorA.find('li');
  const indiLinkA = indiLi.children('a');

  const adverBanner = miniProductA.find('.product_a').children('ul');
  const adverNth = adverBanner.children('li');
  adverNth.find('a').attr({tabIndex:-1});
  indiLi.eq(0).addClass('active');
  indiLinkA.on('focus click',function(e){
    e.preventDefault();
    let i = $(this).parent().index();
    adverBanner.stop().animate({marginLeft:-100 * i + '%'});
    indiLi.eq(i).siblings('li').removeClass('active');
    indiLi.eq(i).addClass('active');

    $(this).on('keyup',function(e){
      e.preventDefault();
      console.log(e.keyCode);
      if(e.keyCode == 13){
        adverNth.eq(i).children('a').focus();
      }
    })
  });

  //========================
  const miniProdctB = $('#miniProduct_b');
  const Bbtn = miniProdctB.children('.btn');
  const next_btn = Bbtn.children('.next');
  const prev_btn = Bbtn.children('.prev');

  const Bbanner = miniProdctB.find('.product_b').children('ul');
  const BbaLi = Bbanner.children('li');
  const BLen = BbaLi.length;


  let n = 0;
  Bbtn.children('button').on('click',function(e){
    e.preventDefault();
    let has = $(this).hasClass('next');
    // console.log(has);
    if (has){
      n++;
      if (n >= BLen) { n = BLen-1;}
    }else{
      n--;
      if (n <0) { n = 0; }
    };
    Bbanner.stop().animate({marginLeft:-100 * n +'%'});
  });

  // ============================
  const miniProdctC = $('#miniProduct_c');
  const Cbtn = miniProdctC.children('.btnC');
  const next_btnC = Cbtn.children('.next');
  const prev_btnC = Cbtn.children('.prev');

  const Cbanner = miniProdctC.find('.product_c').children('ul');
  const CbaLi = Cbanner.children('li');
  const CLen = CbaLi.length;
  let liH = CbaLi.eq(0).innerHeight();

  let j = 0;
  Cbtn.children('button').on('click', function (e) {
    e.preventDefault();
    let has = $(this).hasClass('next');
    // console.log(has);
    if (has) {
      j++;
      if (j >= CLen) { j = CLen-1; }
    } else {
      j--;
      if (j < 0) { j = 0; }
    };
    Cbanner.stop().animate({ marginTop: -liH * j + 'px'});
  });
// =======================
  const miniProdctD = $('#miniProduct_d');
  const Dbtn = miniProdctD.children('.btnD');
  const next_btnD = Cbtn.children('.next');
  const prev_btnD = Cbtn.children('.prev');

  const Dbanner = miniProdctD.find('.product_d').children('ul');
  const DbaLi = Dbanner.children('li');
  const DLen = DbaLi.length;
  // let liH = CbaLi.eq(0).innerHeight();


  DbaLi.eq(0).css({ zIndex: 100 });
  DbaLi.eq(0).siblings().css({zIndex:-1});
  DbaLi.eq(0).siblings().hide();
  let d = 0;
  
  Dbtn.children('button').on('click', function (e) {
    e.preventDefault();
    let has = $(this).hasClass('next');
    // console.log(has);
    if (has) {
      d++;
      if (d >= DLen) { d = DLen - 1; }
    } else {
      d--;
      if (d < 0) { d = 0; }
    };
    DbaLi.eq(d).siblings().hide();
    DbaLi.eq(d).fadeIn();
    DbaLi.eq(d).css({ zIndex:100});

  });
})(jQuery);