/**
 * Created by humorHan on 16/11/3.
 */
var gulp = require('gulp');
var path = require('path');
var webpack = require('webpack');
var gulpUtil = require('gulp-util');
var webpackConfig = require('./webpack-config.js');
var del = require('del');
var vinylPaths = require('vinyl-paths');

//发布图片资源--开发
gulp.task('publish-img-dev', function () {
    return gulp.src(path.join(__dirname, '/src/img/**/*.*'))
        .pipe(gulp.dest(path.join(__dirname, '/assets/img/')));
});

//开发
gulp.task('bundle', ['publish-img-dev'], function (done) {
    webpack(webpackConfig(true, true), function (err, stats) {
        if (err) {
            throw new gulpUtil.PluginError('webpack', err);
        }
        gulpUtil.log('[webpack]', stats.toString({colors: true}));
        //done();
    });
});