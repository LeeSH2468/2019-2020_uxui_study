(function($){
  const headbox = $('#headBox');
  const viewbox = $('#viewBox');
  const openbox = $('#openBox');
  const histobox = $('#histoBox');
  const center = $('#center');
  const withbox = $('#withBox');
  const footbox = $('#footBox');

  let htmlUrl = "./nh_temp/";
  headbox.load(htmlUrl + 'nh_headbox.html');
  viewbox.load(htmlUrl + 'nh_viewbox.html');
  openbox.load(htmlUrl + 'nh_openbox.html');
  histobox.load(htmlUrl + 'nh_histobox.html');
  center.load(htmlUrl + 'nh_center.html');
  withbox.load(htmlUrl + 'nh_withbox.html');
  footbox.load(htmlUrl + 'nh_footbox.html');


})(jQuery);