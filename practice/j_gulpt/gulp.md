##기초 세팅
1. 사용할 폴더에 기본세팅 파일(package.json만들기)
``` shell
$ yarn init -y
$ npm init -y 
```
> package.json파일 설치됨.

2. gulp 설치 (전역에 하나 설치), 사용할 폴더에 설치
  ``` shell
  $ yarn add -D gulp
  $ npm install -D gulp
  ```
  > node_modules 폴더 내용과 함께 gulp 설치됨

3. gulpfile 생성 (gulpfile.babel.js)
   ``` shell
   $ touch gulpfile.babel.js    .babelrc
   ```

4. 생성된 '.babelrc' 파일에 내용추가
   ```
   {
  "presets":["@babel/reset-env"]
    }
   ```

   ``` shell
   $ yarn add -D @babel/{preset-env,core,register}

   $ npm install -D @babel/preset-env
   $ npm install -D @babel/core
   $ npm install -D @babel/register
   ```

  ---
## sass기능 수행하기
1. 모듈 설치
  ``` shell
  $ yarn add -D gulp-sass
  $ npm install -D gulp-sass

2. 세부내용 세팅
   - 불러오기 'import sulpScss form "gulp-sass";
   - 옵션세팅...
   - 기능 만들기 (함수생성)
   - 외부에서 호출 가능하게 'export ...'

## browser-sync 수행하기
1. 모듈설치(일반사용자도 필요 / -D 사용x)
 ``` shell
  $ yarn add browser-sync 
  $ npm install browser-sync 
 ```
 2. 세부내용 세팅
   - 불러오기
  ```js
  import sync from "browser-sync";
  const gulpBrower = sync.create();
  ```
 3. 추가모듈1 : 'gulp-cached'
 4. 추가모듈2 : 'gulp-watch'

## polyfill 설치
``` shell
yarn add -D @babel/polyfill
```