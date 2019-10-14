// function_basic_01.js

/*함수에 대해 => function () {}

선언식, 표현식
익명함수, 즉시실행함수, (ES6:화살표함수)
*/
function myCoffee(a) {
  var b = a*100;
  return a * 100;
}

var rel_1=myCoffee(10);
console.log(rel_1);
var rel_2=myCoffee(2);
console.log(rel_2);

function useName(a) {
  return a+ "님 어서오십시오.";
}
var u_1=useName('소연');
console.log(u_1);

function test(color) {
  var web= document.getElementsByTagName('body')[0];
  return web.style.backgroundColor="#" + color;
}

function t2(){
  return console.log('t2 실행');
}
t2();
 
//함수 선언식 | 함수표현식

var variableFn = function(n){
  return ( n + 100) *10;
};
var v=variableFn(7);

console.log(v);

// --------------------------------------------------
// 즉시실행함수
// ()();
var pr = 100;
(function(myp){
  console.log(myp+1);
})(pr);//즉시실행함수

function Fn(myp){
  console.log(myp+1);
}
Fn(pr);//선언식

var Fn2 = function(myp){
  console.log(myp+1);
};
Fn2(pr);//표현식

var f1 = function (a) {return a+10;};
console.log(f1(15));

var f2 = (a) => { return a+10;};
console.log(f2(15)); //화살표함수  



var myName = function(b){return b};
var myCon = {
  name : function(b){return b}
};

console.log(myCon.name('zldo'));
