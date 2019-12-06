//gulpfile.babel.js
//const gulp require('gulp'); //같은의미
import gulp from "gulp";
import corejs from "core-js";
import mkdir from "mk-dirs";
import writeFile from "write";
import scss from "gulp-sass";
import sync from "browser-sync";
const browserSync = sync.create(); //browset-sync를 쓰기 위해선 붙여야함.

console.log('check gulpfile');

const url = {
  module:'./node_modules/',
  source:'./public/source/',
  dest  :'./public/assest/'
};
// 폴더 생성 ==========================
async function makeDir(){
  Promise.all([
    mkdir('public'),
    mkdir(url.source + 'html'),
    // mkdir(url.source + 'scss'),
    mkdir(url.source + 'scss/src'),
    mkdir(url.source + 'scss/base'),
    mkdir(url.source + 'img'),
    // mkdir(url.source + 'js'),
    mkdir(url.source + 'js/base'),
    mkdir(url.source + 'js/src'),
    // mkdir(url.source + 'media'),
    mkdir(url.source + 'media/audio'), 
    mkdir(url.source + 'media/video'),
    mkdir(url.source + 'fonts'),
    mkdir(url.source + 'IE'),
  ])
}

//=======================================
//파일생성
async function makefile(){
  writeFile.sync(url.source + 'index.html',`
<!DOCTYPE html>\n<html lang="ko-KR">\n<head>\n<meta charset="UTF-8">\n<title>Document</title>\n<script>\nwindow.location = "./html/main.html";\n</script>\n</head>\n<body>\n  
</body>\n</html>`);
  // writeFile.sync(url.source + 'html/main.html');
  // writeFile.sync(url.source + 'scss/base/reset.scss');
  // writeFile.sync(url.source + 'scss/base/common.scss');
}
// =======================================
// scss 기능수행
// 1.scss 옵션 설정
const scssOption = {
  // 컴파일 방법:nested, expanded, compact, compressed
  outputStyle: 'compact',
  // 들여쓰기 방법 : tab, space
  indentType:'space',
  // 들여쓰기에 대한 양(간격)
  indentWidth:2,
  // 소수점 계산시 계산할 자릿수
  percision:6, //소수점 6자리까지 0.000000
  // 컴파일시 scss의 파일 위치를 주석 처리 유무)
  sourceComments : false
};

async function convertCss(){
  gulp.src(url.source + 'scss/**/*.scss')
      .pipe(scss(scssOption).on('error',scss.logError))
      .pipe(gulp.dest(url.source+'css/'))
      .pipe(browserSync.reload({stream:true}))
}
// watch기능수행
function watch(){
  convertCss();
  gulp.watch(url.source + 'scss/**/*.scss',convertCss);
}
// node-sass --watch --output-style compact scss --output css

//========================================
// browser-sync 실행======================
function server(){
  browserSync.init({
    server: { //server의 기본 폴더 위치 지정
      baseDir : url.source}
  });
}

// =======================================
// 걸프 외부에서 실행 명령어
export const make = gulp.series(makeDir);
export const mkfile = gulp.series(makefile);
const first = gulp.series(makeDir, gulp.parallel(makefile));
export const conScss = gulp.series(watch);
const gulpServer = gulp.parallel(server,conScss,watch);
export default gulpServer;