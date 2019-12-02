const searchArea = $('.search_area');
const searchDl = searchArea.find('dl');
const searchDt = searchDl.children('dt').find('a');
const searchDd = searchDl.children('dd');

searchDt.on('click',function(e){
  e.preventDefault();
  searchDd.slideToggle();
});