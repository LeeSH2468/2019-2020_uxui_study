// rwd_check.js
(function($){
  const conBox = $('#conBox');
  //각 디바이스별 크기 기준 설정
  const mobile=480, tablet=768,laptop=1366, pc=1600;
  //기본 디바이스 명칭 설정
  const device = ['mobile','tablet','laptop','pc','pcfull'];

  let nowSize;
  let beforeW = $(window).outerWidth(true);//margin값까지 포함.
  //각 디바이스 상황에 맞는 data 처리
    const DeviceData = function(wid){
      switch(wid){
        case device[0]:
          conBox.load('./temp/main_mob.html');//html위치기준
        break;
        case device[1]:
          conBox.load('./temp/main_tab.html',function(){
            $('body').append('<script src="../js/tab.js"></script>');  //main_tab.html 관련 내용이면 function으로 하지 않으면 인식안됨
          });
        break;
        case device[2]:
        case device[3]:
        case device[4]:
          conBox.load('./temp/main_pc.html',function(){
            $('head').find('title').before('<link rel="stylesheet" href="../css/pc.css"></link>');
            $('body').append('<script>console.log("pc")</script>');
          });
        break;
      }
    };//DeviceData 함수

  
  //디바이스 크기 체크
  const DeviceSet = function(winW){
    if(winW <= mobile){
      nowSize = device[0];
    }else if(winW > mobile && winW <= tablet){
      nowSize = device[1];
    }else if(winW > tablet && winW <= laptop){
      nowSize = device[2];
    }else if(winW > laptop && winW <= pc){
      nowSize = device[3];
    }else{
      nowSize = device[4];
    }
    return nowSize;
  }; // DeviceSet 조건문 함수화처리
  let beforeDevice = DeviceSet(beforeW);
  DeviceSet(beforeW);// DeviceSet함수실행
  DeviceData(beforeDevice);
  console.log(nowSize);

  // 브라우저별 체크
  console.log(navigator.userAgent);
  let browser = navigator.userAgent.toLowerCase();
  let nowb = null;
  if(browser.indexOf('firefox') !== -1){
    nowb = 'firefox';
  }else{
    nowb = 'ohter';
  }
  console.log(nowb);
  //------------------------------
//사이즈 변경 체크
$(window).on('resize',function(){
  let afterW = $(window).outerWidth(true);
  let afterDevice = DeviceSet(afterW);
  console.log(nowSize);
  if(beforeDevice !== afterDevice ){ //가로값이 변경되었을 때만 새로고침(세로값 변화 상관없음)
    if(nowb === 'firefox'){
  window.location = window.location;
    }else{
      location.reload();
    }
  };
});


})(jQuery);