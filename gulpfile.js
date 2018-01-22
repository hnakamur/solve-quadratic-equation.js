var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var open = require('gulp-open');
var mocha = require('gulp-mocha');

// default task is browser test
gulp.task('default', ['browser-test']);

// browser test
gulp.task('browser-test', function (callback) {
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = 'eval';

  new WebpackDevServer(webpack(myConfig), {
    publicPath: '/' + myConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8080, 'localhost', function (err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);

    gulp.src('./test/index.html')
      .pipe(open('', {url: 'http://localhost:8080/webpack-dev-server/test/index.html'}));
  });
});

// node.js test
gulp.task('test', function (callback) {
  gulp.src('test/solve-quadratic-equation_test.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

