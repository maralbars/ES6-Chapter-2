const	gulp	= require('gulp'),
		babel	= require('gulp-babel'),
		eslint	= require('gulp-eslint');

gulp.task('default', function(){
	//	запуск ESLint
	gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());
	//	Исходный код для Node.js
	gulp.src('es6/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
	//	Исходный код для браузера
	gulp.src('public/es6/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('public/dist/'));
});