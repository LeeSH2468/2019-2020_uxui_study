// data_type_01.js

// var int="확인용";
// console.log(int); //확인용

// var 댕댕이;
// console.log(댕댕이); //undefined

// 댕댕이 = "멍멍이";
// console.log(댕댕이); //멍멍이

// //console.log(멍댕이); //not defined (오류)

// // var rea = "10:01";
// // console.log(rea);


// // const rel="10시";
// // console.log(rel); //hoist현상

// var card = 1000; //card정의
// var chu = 300; //chu 정의
// card = card - chu; //=(대입하다) card에 card에서 chu를 뺀 값을 대입
// console.log(card); // 확인

// card += 50000; //card에 5000을 대입하다 | card = card + 5000 과 같은 의미.
// console.log(card); //확인

// card -= 13000; //card 에서 13000을 뺀 값을 대입 | card = card-13000;
// if(card < 0){
// console.log('잔액이 부족합니다.');
// }else{
//   console.log(card);
// }
// (card < 0) ? console.log('계산불가') : console.log('계산완료~~~');

// 기본연산자 =================================

// var int;
// int = 10;
// console.log(int);

// var rel = int + 10;
// int = int + 10; //덧셈
// int = int - 5; //뺄셈
// int = int * 4; //곱셈
// int = int / 10; //나눗셈
// int = int % 4; //나머지
// console.log(int);

// var int2 = 10;
// int2 = int2 % 2; //나머지가 없으면 짝수 | 있으면 홀수
// console.log(int2);

// (int2 == 0) ? console.log("짝수") : console.log("홀수");
// // --------

// var i = 100;
// i = i + 2019;
// console.log(i);

// var now_year_month_date = 20191014;
// now_year_month_date %= 4;
// console.log(now_year_month_date);

// var a = 10 + 10;


// var now = 1207;
// now+=1;
// console.log(now);
// now++;
// now++;
// now++;
// now++;
// console.log(now);

// now -= 1;
// now -= 1;
// console.log(now);

// now--;
// now--;
// now--;
// now--;
// now--;
// console.log(now);
// //증감연산자 : 1씩 더하거나, 빼는 기능

// var myi = 100;
// console.log(myi);
// console.log(++myi);
// console.log(++myi);
// console.log(--myi);
// console.log("결과 :", myi)
// console.log(myi++);
// console.log(myi++);
// console.log(myi++);
// console.log(myi++);
// console.log("결과2 :",myi)
// console.log(myi--);
// console.log(myi--);
// console.log(myi--);
// console.log(myi--);
// console.log(myi--);
// console.log(myi--);
// console.log("결과3 :",myi);
// console.log(++myi);
// console.log(myi++);
// console.log(myi--);
// console.log(myi++);
// console.log("결과4 :",myi);

var ls = 77;
var tx = "번가의 기적";
var myMv = ls+ tx;

ls = 9;
tx = "번가";
myMv = ls + tx;
console.log(myMv);

(ls < 10) ? (myMv= "0" + ls + tx) : (myMv= ls + tx);
console.log(myMv);

var myN = parseInt(myMv); //정수변환
console.log(myN);