(function($){
  //반응형 크기에따라 불러오는 파일 정의
  // mobile, tablet, pc, laptop, pcfull
  const wrap = $('#wrap');
  let tempFile = './rwd_temp/'; //html 파일위치 기준
  let mob = 480, tab = 768, pc = 1280, laptop = 1366;
  let mySet = ['mob', 'tab', 'pc', 'laptop', 'pcfull'];
  const LoadFile = function(w){

    switch(w){
      case mySet[0]:
        wrap.load(tempFile + 'mob.html');
      break;
      
      case mySet[1]:
        wrap.load(tempFile + 'tab.html');
      break;

      case mySet[2]:
        wrap.load(tempFile + 'pcbase.html');
      break;

      case mySet[3]:
        wrap.load(tempFile + 'laptop.html');
      break;

      case mySet[4]:
        wrap.load(tempFile + 'pcfull.html');
      break; 

    }//switch
  }//LoadFile()

  //==================================
  //현재 디바이스 크기를 파악하여 정의
  let nowDevice = 0; //null써도 가능
  const deviceCheck = function(w){//매개변수(w)를 지정해서 처리
    if(w <= mob){ nowDevice = mySet[0];
    }else if(w > mob && w <= tab) { nowDevice = mySet[1];
    }else if(w > tab && w <= pc){nowDevice = mySet[2];
    }else if(w > pc && w <= laptob){nowDevice = mySet[3];
    }else{nowDevice = mySet[4];}
    // console.log(nowDevice);
    return nowDevice;
  }//deviceCheck
  //==================================
  const win = $(window);
  let winW = win.outerWidth();
  console.log(winW);

  let beforeDevice = deviceCheck(winW);
  LoadFile(beforeDevice);
  console.log('beforeDevice',beforeDevice);






  //가로값이 변경되면 새로고침 ----------
  win.on('resize',function(){
    let nowWinW = win.outerWidth();
    // console.log(nowWinW);
     
      let afterDevice = deviceCheck(nowWinW);
      console.log(afterDevice);
    if (winW !== nowWinW && beforeDevice !== afterDevice){//가로값과 지금가로값이 같으면 새로고침x
    location.reload();//새로고침
    }
  });



})(jQuery);