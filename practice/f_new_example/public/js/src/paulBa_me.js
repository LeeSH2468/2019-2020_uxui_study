(function($){
  const wrap = $('#wrap');
  wrap.append('<section id = "viewBox"><div class="slide_temp"></div></section>');
  const viewBox = $('#viewBox');
  const slideTemp = $('.slide_temp')
  const url ="../img/";
  const textList = [{ title: 'Tasty Autumn  Fruits', 
                      content:'쌀쌀한 가을날씨에 잘 어울리는 향긋한 과일티 2종',
                      link:'https://www.naver.com'},
                      { title: 'Cream & CheeseMuffin', 
                      content:'촉촉한 크림과 치즈, 다양한 토핑이 올라간 머핀',
                      link:'https://www.daum.net'},
                      { title: 'BTS POP-UP HOUSE OF BTS', 
                      content:'방탄소년단 팝업스토어는 폴 바셋과 함께합니다',
                      link:'https://google.com'}];

let textlen = textList.length;
let slideCon = '<div class="slide_form"><div class="text_area"></div><div class="btn_area"></div></div>';
let textCon = '<h3></h3><p></p><a href="#" class="detail">"DETAIL VIEW"</a>';
let btnCon = '<div class="numBox"><div class="nowNum"></div><div class="allNum"></div></div><div class="view_btn"><button type="button" class="next"></button><button type="button" class="prev"></button></div>';

  for (let i = 0; i < textlen; i++){
    slideTemp.append(slideCon);
    let slideForm = slideTemp.children('.slide_form').eq(i);
    let textArea = slideForm.children('.text_area');
    let BtnArea = slideForm.children('.btn_area'); 

    textArea.append(textCon);
    BtnArea.append(btnCon);

    let title = textArea.children('h3');
    let content = textArea.children('p');
    let detail = textArea.children('a');

    title.text(textList[i].title);
    content.text(textList[i].content);
    detail.attr({ 'href': textList[i].link });
  };
  
})(jQuery);