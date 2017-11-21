var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	cssnano = require('gulp-cssnano'),
	sourcemaps = require('gulp-sourcemaps'),
	notify = require('gulp-notify'),
	clean = require('gulp-clean'),
	browserSync = require('browser-sync').create();


gulp.task('default', ['clean'], function(){
	gulp.run('dev');
});

gulp.task('production', ['clean'], function() {
	gulp.run('build');
});

gulp.task('dev', ['build', 'watch', 'browser-sync']);

gulp.task('build', ['html', 'sass', 'js', 'fonts', 'img']);
// Задача 'watch' следит за всеми нашими файлами в проекте и при изменении тех или иных перезапустает соответсвующую задачу.
gulp.task('watch', function() {
	gulp.watch('src/css/**/*.scss', ['sass']); //стили
    gulp.watch('src/js/**/*.js', ['js']); //скрипты
    gulp.watch('src/index.html', ['html']); // html
    gulp.watch('src/fonts/*.*', ['fonts']); // fonts
    gulp.watch('src/img/*.*', ['img']); //наши локальные файлы(картинки, шрифты)
    gulp.watch('src/**/*.*').on('change', browserSync.reload); //Перезапуск browserSynс
});

// переносим html
gulp.task('html', function ()  {
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('build'));
});

// переносим sass
gulp.task('sass', function ()  {
	return gulp.src('./src/css/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on('error', notify.onError({
            title: 'Style'
        }))
		.pipe(autoprefixer({
            browsers:[
            'last 3 version',
            '> 1%',
            'ie 8',
            'ie 9',
            'Opera 12.1'
            ]
        }))
		.pipe(concat('main.css'))
		.pipe(cssnano())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/css'));
});
// переносим js
gulp.task('js', function ()  {
	return gulp.src('./src/js/**/*.*')
		.pipe(gulp.dest('build/js'));
});

// переносим шрифты
gulp.task('fonts', function ()  {
	return gulp.src('./src/fonts/*.*')
		.pipe(gulp.dest('build/fonts'));
});
// переносим картинки
gulp.task('img', function ()  {
	return gulp.src('./src/img/**/*.*')
		.pipe(gulp.dest('build/img'));
});
//Задача для удаление папки build.
gulp.task('clean', function() {
	return gulp.src('build/')
		.pipe(clean());
})
//Задача для запуска сервера.
gulp.task('browser-sync', function() {
	return browserSync.init({
		server: {
			baseDir: './build/'
		}
	});
});