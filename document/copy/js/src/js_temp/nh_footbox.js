const footBox = $('#footBox');
const famZone = footBox.find('.family_zone');
const famDt = famZone.children('dt');
const famDd = famZone.children('dd');

famDt.children('a').on('click',function(e){
  e.preventDefault();
  console.log('?')
  famDd.slideToggle();
});



// let ck = true;
// $('body *').on('click',function(e){
//   e.preventDefault();
//   if(ck){
//     ck = false;
    
//     if( $(this).find(famDt.children('a') == false ) ){
//       famDd.slideUp(function(){
//         ck = true;
//       });
//       console.log('???')
//     }else{
//       famDd.slideToggle(function(){
//         ck = true;
//       });
//     }
//   }

// });

