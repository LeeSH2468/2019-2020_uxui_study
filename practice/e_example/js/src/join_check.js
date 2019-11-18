//join_check.js
(function($){
  //form 기능에서 사용하는 jQuery 메소드
  //val(); -> value값을 가져오는 기능
  //hasClass() -> class 이름의 유무 판단
  //is() -> 상황의 판단 ex) is(':focus') | is(':cheaked')
  //prop() -> 속성의 상황 묘사 
  //ex)prop('checked',true) -> 속성의 상황묘사해서 역할부여(checked라는 역할 여부)
  
  //------------------------------------
  //전체 동의를 클릭하면 전체가 체크되게 만들기
  const allCheck = $('#allCheck');
  const cbSel = $('.cb_sel');
  let ck;

  allCheck.on('click', function (e) {
    // e.preventDefault();
    let ck = allCheck.is(':checked');
    console.log(ck);
    if (ck) {
      cbSel.attr('checked', true);
      cbSel.prop('checked',true);
      allCheck.prop('checked', true);
      allCheck.attr('checked', true);
    }else{
      cbSel.attr('checked',false);
      cbSel.prop('checked',false);
      allCheck.prop('checked', false);
      allCheck.attr('checked', false);
      };
  });
    cbSel.on('click',function(){
      // console.log(cbSel.length);
      let idCheck = $(this).attr('id');
      let idN = $('#'+idCheck);
      let idnIs = idN.is(':checked');
      (idnIs) ? idN.attr('checked',true).prop('checked',true):idN.attr('checked',false).prop('checked',false);
      for(let i=0; i<cbSel.length; i++){
        let ck = cbSel.eq(i).is(':checked');
        console.log(ck);
        if(ck == false){
          allCheck.prop('checked',false);
          allCheck.attr('checked',false);
          break;//break 멈추고 빠져나가기 :continue 건나뛰기
        }else{
          allCheck.prop('checked', true);
          allCheck.attr('checked', true);

        }
      }

      // cbSel.each(function(data){
      //   ck = $(this).is(':checked');
      //   console.log(ck);
      // })//each (for문과 같은 기능)
    });


})(jQuery);