/* gulp dependencies */
var gulp        = require('gulp');

var del         = require('del');
var browserify  = require('browserify');
var babelify    = require('babelify');
var sourcemaps  = require('gulp-sourcemaps');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var notify      = require('gulp-notify');
var browserSync = require('browser-sync');
var uglify      = require('gulp-uglify');
var stylus      = require('gulp-stylus');
var minify      = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');

/* gulp task */

// clean
gulp.task('clean', function(){
	del(['./dist/*.*'], {force: true}, null);
});

// scripts
var handleErrors = function(){
	var args = Array.prototype.slice.call(arguments);

	notify.onError({
		title: 'Compile error',
		message: '<%= error.message %>'
	}).apply(this, args);

	this.emit('end');
}

gulp.task('browserify', function(){
	var sources = browserify({
		entries: 'src/js/app.js',
		debug: true
	})
	.transform(babelify.configure());

	return sources.bundle()
	.pipe(source('build.js'))
	.pipe(buffer())
	//.pipe(uglify())
	.pipe(gulp.dest('dist/'));
});

 /* stylus */
 gulp.task('styles', function(){

	return gulp.src('./src/app.styl')
	.pipe(stylus({
		'include css': true
	}))
	.on('error', handleErrors)
	.pipe(sourcemaps.init())
	.pipe(minify())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.reload({stream: true}));

});

/* HTML */
gulp.task('html', function(){
	var opts = {
		conditionals : true,
		spare : true
	};
	return gulp.src('./src/*.html')
	.pipe(minifyHTML(opts))
	.pipe(gulp.dest('./dist'));
});


/* pages */
gulp.task('pages', function(){
	var opts = {
		conditionals : true,
		spare : true
	};
	return gulp.src('./src/pages/*.html')
	.pipe(minifyHTML(opts))
	.pipe(gulp.dest('./dist/pages/'));
});

// build
gulp.task('build', [
	'clean',
	'html',
	'styles',
	'browserify',
	'pages'
]);

// watch
gulp.task('watch', ['build'], function(){
	browserSync.init({
		server : './dist'
	});

	gulp.watch(['./src/**/*.html'], ['pages']);
	gulp.watch(['./src/*.html'], ['html']);
	gulp.watch(['./src/**/*.js'], ['browserify']);
	gulp.watch(['./src/**/*.styl'], ['styles']);
});

// default
gulp.task('default', ['watch']);
