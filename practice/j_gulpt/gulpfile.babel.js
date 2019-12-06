// 모듈불러오기
import gulp from "gulp";
import gulpCached from "gulp-cached";
import gulpWatch from "gulp-watch";
import gulpScss from "gulp-sass";

import sync from "browser-sync";
const gulpBrower = sync.create();

//====================================
//영역, 위치, 파일 변수작성
const url = {
  before : "./public/source/"
}


//====================================
//기능 작성하기

//sass ========
const scssOption = {
  outputStyle:'compact',
  indentType:'space',
  indentWidth:2,
  percision:6,
  sourceComment:false
};

async function FnScss(){
  gulp.src(url.before+'scss/**/*.scss')
      .pipe(gulpCached('cssFiles'))
      .pipe(gulpScss(scssOption).on('error',gulpScss.logError))
      .pipe(gulp.dest(url.before+'css/'))
      .pipe(gulpBrower.reload({ stream: true }));
}


//browser-snyc ======
function FnSync(){
  gulpBrower.init({
    server:{
      baseDir : url.before
    }
  })
}
// 실시간 감지 ============

function FnHtml(){
  gulp.src(url.before+'**/*.html')
      .pipe(gulpCached('htmlFiles'))
      .pipe(gulpBrower.reload({stream:true}));
}

async function Fncss(){
  gulp.src(url.before + 'css/**/*.css')
      .pipe(gulpCached('cssFiles'))
      .pipe(gulpBrowser.reload({stream:true}));
}

function FnJs() {
  gulp.src(url.before + 'js/**/*.js')
    .pipe(gulpCached('jsFiles'))
    .pipe(gulpBrower.reload({ stream: true }));
}
function FnWatch() {
  gulpWatch(url.before + '**/*.html', FnHtml);
  gulpWatch(url.before + 'scss/**/*.scss', FnScss);
  gulpWatch(url.before + 'js/**/*.js', FnJs);
}

//====================================
//내보내기 (외부에서 사용하기)
export const scss = FnScss; //gulp scss
export const server = FnSync;

const myWeb = gulp.series(FnScss,gulp.parallel(FnSync, FnWatch));
export default myWeb;
