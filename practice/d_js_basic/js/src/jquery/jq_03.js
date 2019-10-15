//jq_03.js

(function($){
// $()
$('#myBox').css({'width':'80%','height':'700px','margin':'auto','backgroundColor':"#ddd"});

// 생성(요소,값)

/*ES6기반의 코드(순수자바스크립트)
const myBox = document.querySelector('#myBox');
const myh2 = document.createElement('h2');
let h2Text = document.createTextNode('jQuery text 생성하기');
myh2.appendChild(h2Text)
myBox.appendChild(myh2);
*/
const myBox = $('#myBox');
myBox.append('<h2></h2>');
const myh2 = myBox.children('h2');
myh2.text('<li>jquery를 통해 글자를 생성하였습니다.</li>');

//html(), append(), prepend(), appendTo(), prependTo(), before(), after()
//text


//myBox.html('<p>요소를 생성하였습니다.</p>')
myBox.append('<p>요소를 생성하였습니다.</p>');

let myt = $('<p>먼소리야</p>')
myt.appendTo(myBox);
//myBox.prepend('<p>요소를 생성하였습니다.2</p>');
// myt.prependTo(myBox);

//before, after
myBox.before( '<div class="beforeBox"></div>');
myBox.after( '<div class="after"></div>');

let myBefore = myBox.prev();
let myAfter = myBox.next();
console.log(myBefore,myAfter)


//확인(크기, 속성)
//width(), height(), innerWidth(), outerWidth(), innerHeight(), outerHeight(true)

//attr(),removeAttr()
//paresInt()-정수만, parseFloat-소수점까지

const resultBox = $('#resultBox');
/*let resultWidth = resultBox.width(); //padding, border를 제외한 width값
console.log(resultWidth);
let resultinnerWidth = resultBox.innerWidth(); //padding값을 포함한 width
console.log(resultinnerWidth);
let resultouterWidth = resultBox.outerWidth(); //padding,border 값을 포함한 width
console.log(resultouterWidth);
let resultoutertrueWidth = resultBox.outerWidth(true); //padding,border 값을 포함한 width
console.log(resultoutertrueWidth); // margin값을 포함한 width
*/

/*
let resultBoxWidth = resultBox.css('width');
let resultPLWidth = parseInt(resultBox.css('paddingLeft')) +parseInt(resultBox.css('paddingRight'));
let pasWidth = parseInt(resultBoxWidth) + resultPLWidth;
console.log(pasWidth);
*/
let url = "http://naver.com";
let myat = resultBox.attr({'class':'adC','data-class': url});
// console.log(myat);

resultBox.on('click',function(){
  // resultBox.after('<a href="#">클릭하면 이동합니다</a>');
  resultBox.after('<a href="'+ url + '">클릭하면 이동합니다</a>');
  resultBox.after(`<a href="${url}">클릭하면 이동합니다</a>`);
  // resultBox.removeAttr('id');
});


//변경,삭제
//myBox.empty();
//myBox.remove();

//jQuery 기초개념 : 메소드체인, 콜백
//메소드 체인 : 하나의 함수 또는 메소드를 체인처럼 연결하여 처리하는 방법
//$().find().animate(); 


// 콜백 : 하나의 함수 내에서 다시 함수를 호출하여 사용하는 기능
/* $().animate({}, function(){
     $().animate({},function(){
       $().animate()
     })
}); */

//이벤트
//show(), hide(), fadeIn, fadeout, slideUp, slideDown, toggle, hasClass...

})(jQuery);