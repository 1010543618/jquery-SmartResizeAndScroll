var gulp = require('gulp');
var rollup = require('rollup');

gulp.task('build', () => {
  return rollup.rollup({
    input: 'index.js',
    external: ['jquery']
  }).then(bundle => {
    return bundle.write({
      /*
      《extend: true,》（《rollup.js 中文文档》还没更新到这个参数，得看英文文档）
      会让打包后exports的实参为：
      global.$ = global.$ || {}, global.$.fn = global.$.fn || {}
      要是不设置exports的实参就会是：
      global.$ = global.$ || {}, global.$.fn = {}
      原来的$.fn在本插件内被就清空了
      */
      extend: true,
      name: "$.fn",
      file: './dist/jquery.smartresizeandscroll.js',
      format: 'umd',
      globals: {
        jquery: '$'
      }
    })
  });
});

gulp.task('default', ['build']);

