// data_type_02-1.js
/*javascript 기본형 내용 정리하기

변수 : var , let , const
숫자(0), 문자 ('0'), 참(true)/거짓(false), null/undefined
array([]), object({})
---------------------------------
opperator, opperation, reteral
*/


/*
var num = 100;
console.log(typeof("num"));

var str = '100';
console.log(typeof(str));

var bool = true;
console.log(typeof (bool));

console.log(typeof(myrel));

console.log( '=======================' );

var arr = [1,2,3,4,22];
console.log(typeof(arr));

var obj = {"a":"pen", "b":"mouse", "c":"microphone"};
console.log(typeof(obj));

console.log(arr[2]);
console.log(obj["c"]);
console.log(obj.b);

console.log(arr);
console.log(obj);

var reset= null;
console.log(typeof(reset));
console.log(reset);

*/


var i = 10 + 2 //12
i -= 6;// i = i - 6; //6
i *= 2;// i = i * 2; //12
i /= 4;// i = i / 4; //3
i %= 2;// i = i % 2; //1 (나머지)
i += 2;// i = i + 2; //3
console.log(i);

var n = 10;
++n; //1을 더하다
++n; //1을 더하다
n++; //1을 더하다
console.log(n++);

for (var i = 0; i < 10; i++){
  console.log(i);
}

