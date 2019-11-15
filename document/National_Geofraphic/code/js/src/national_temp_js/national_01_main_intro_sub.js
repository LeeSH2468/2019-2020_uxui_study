//intro=====================================
const win = $(window);
const introSub = $('.intro_sub_area');
const subImage = introSub.children('.sub_image');
const subPic = subImage.children('.sub_pic');
const picZone = subPic.children('.pic_zone');

const introDl = subImage.children('dl');
const introDt = introDl.children('dt');
const introDd = introDl.children('dd');
const goLink = introDd.children('a');

let introH = introSub.outerHeight();
console.log(introH);
let winH = win.outerHeight();
let introTop = introSub.offset().top;
let introOffset = introTop - (winH / 3);

win.on('scroll', function ($) {
  let winScroll = win.scrollTop();
  if (winScroll > introOffset) {
    subPic.addClass('action');
    introDl.addClass('action');
  } else {
    subPic.removeClass('action');
    introDl.removeClass('action');
  }
});
