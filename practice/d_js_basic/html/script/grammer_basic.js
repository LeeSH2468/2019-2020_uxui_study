//grammer_basic.js
//javascript 기초이해하기

/* *문법
 * *조건문
//  */
// var myNum = function(par){
//   var i = par;
//   var text;
 
//  if(i < 10){
//   text="주어진 숫자는 10보다 작은 수 입니다.";
//  }else if(i === 10){
//    text="주어진 숫자는 10입니다."
//  }else{text ="주어진 수는 10보다 큰 수 입니다"}

//  return console.log(text);

// }
// myNum(10);
// myNum(30);
// myNum(1010);

// () ? {참일경우}else {}}

// var i = 10;
// switch(i){
//   case 1:
//     text="숫자는 입니다";
//     break;
//     default:
//     text = "숫자는 1보다 큰 수 입니다.";
//     break;
// }

// console.log(text);

var myMenu = function(){

let coffee ='?';
let text;
let menu = ['americano','latte','mocha','vanilla','espersso'];
coffee = prompt('원하시는 메뉴를 입력해 주세요 \n 메뉴:' +menu);

switch(coffee){
  case menu[0]: text = '얼어 죽어도 아이스';  break;

  case menu[1]: text ='커피는 믹스처럼 부드럽게';  break;
  
  case menu[2]: text="깊고 진한 크림과 함께";  break;

  case menu[3]: text="바닐라는바나나";    break;

  case menu[4]: text="에스프레쏘";     break;

  default:
    text ='난 그냥 물이나 한 잔';
  break;
}


// console.log(text);
let myP = document.getElementsByTagName('p')[0];
myP.innerHTML = text;

};

var myBtn = document.getElementById ('coffeeMenu');
myBtn.addEventListener('click',function(){
myMenu();
});