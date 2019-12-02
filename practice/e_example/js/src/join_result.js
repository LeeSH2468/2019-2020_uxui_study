//join_result.js
(function($){
    //영문 대/소문자 및 숫자(특수문자) 포함하여 6~15글자
    let checkPw = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{6,15}$/
    //이메일형식 체크(이름@주소.지역)
    let emailCk = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
    //전화번호 형식 체크
    let numCk = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/

  //id란 입력하지 않을 때 상황
  const userName = $('#userId');  
  userName.on('blur',function(){
    let thisVal = $(this).val();
    if(thisVal ==""){
      $(this).closest('li').addClass('error');
    }else if(!emailCk.test(thisVal)){
      $(this).closest('li').addClass('error');
      $(this).closest('li').find('.narr').text('이메일 형식에 맞게 내용을 입력하세요.');
    }else{
      $(this).closest('li').removeClass('error');
    }
  });
//===============
 
  //===============================
  // pw 비교해서 일치 여부

  const userPw = $('#userPw');
  const userPwRe = $('#userPwre');
   const pwlabel  = $('label[for="userPw"]');
  //------------------------
  pwlabel.on('mousedown', function(e){
    if(e.which){
      userPw.attr({type:'text'});
    }
  });
  pwlabel.on('mouseup keyup mousemove', function(e){
    userPw.attr({type:'password'});  
  });

  let beforePwVal, afterPwVal;
  userPw.on('blur',function(){
    beforePwVal = userPw.val();
    let thisVal = $(this).val();
    let thisLi = $(this).closest('li');
    if (thisVal == ""){
      thisLi.addClass('error');
      thisLi.find('.narr').text('비밀번호를 입력하세요');
    }if(thisVal.length <= 5){
      thisLi.addClass('error');
      thisLi.find('.narr').text('비밀번호는 6~15자 입니다');
    }else if(!checkPw.test(thisVal)){
      thisLi.find('.narr').text('영문 대/소문자, 특수문자 혼용');
      thisLi.addClass('error');
    }else{
      thisLi.removeClass('error');
    }
  });
  userPwRe.on('blur',function(){
    afterPwVal = userPwRe.val();
    if(beforePwVal !== afterPwVal){
      $(this).closest('li').addClass('error');
      console.log('비밀번호 입력이 일치하지 않음');
    }else{
      $(this).closest('li').removeClass('error');
    }
  });

  // 정규표현식 : RegExp(regular expression)

  // let ex1 = 'a';  //문자
  // let ex2 = 0;    //숫자
  // let ex3 = ex1;    //변수 변경
  // let ex4 = [];   //배열
  // let ex5 = {};   //객체[]
  // let ex6 = / /; //정규표현식

  // let a = 10;
  // let b = 4;
  // let c = 8;
  // let re = /a + c/; //같은의미(권장)
  // let re2 = new RegExp('a + c'); //같은 의미
  // console.log(re2);


  //정규표현식 메소드
  //1. exec    : 대응되는 문자열을 찾는 메소드(배열로 반환)
  //2. test    : 해당하는 문자열의 유뮤 파악(true/faule)
  //3. match   : 해당하는 문자열의 유뮤 파악(배열로 반환)
  //4. search  : 해당하는 문자열의 유뮤 파악(인덱스반환(숫자))
  //5. replace : 찾아 바꾸기
  //6. split   : 문자열을 배열로 반환(string메소드)
 

  // let t = /^a|$r/.test('after');
  //& = and  | = or ^~ = ~로 시작하는 단어 $~ = ~로 끝나는 단어
  // console.log(t);


})(jQuery);