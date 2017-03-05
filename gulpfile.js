const gulp = require('gulp'),
  prettyError = require('gulp-prettyerror'),
  htmlBeautify = require('gulp-html-beautify'),
  imagemin = require('gulp-imagemin'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCSS = require('gulp-clean-css'),
  path = require('path'),
  zip = require('gulp-zip')

//------ path
const paths = {
  scss: {
    watch: './scss/**/*.{scss, sass}',
    src: './scss/**/!(_)*.{scss,sass}',
    dest: './static/style/'
  },
  ico: {
    src: './dist/static/favicon.ico',
    dest: './dist/'
  },
  images: {
    src: './dist/static/images/',
    dest: './dist/static/images/'
  },
  html: {
    src: './dist/*.html',
    dest: './dist/'
  }
};

//------ directive

const buildIcon = () => {
  return gulp
    .src(paths.ico.src)
    .pipe(prettyError())
    .pipe(gulp.dest(paths.ico.dest))
}

const buildImage = () => {
  return gulp
    .src(paths.images.src)
    .pipe(prettyError())
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest))
}

const buildHtml = () => {
  return gulp
    .src(paths.html.src)
    .pipe(prettyError())
    .pipe(htmlBeautify({
      indent_size: 2
    }))
    .pipe(gulp.dest(paths.html.dest))
}

gulp.task('build:html', buildHtml)

const devStyles = () => {
  return gulp
    .src(paths.scss.src)
    .pipe(prettyError())
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
      includePaths: require('node-reset-scss').includePath
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 5 versions', '> 5%']
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scss.dest))
}

gulp.task('build:styles', devStyles)

gulp.task('watch:styles', () => {
  gulp.watch(paths.scss.watch, devStyles).on('change', (path) => {
    console.log(`${path} on Changed!`);
  });
});

const buildZip = () => {
  const
    today = new Date(),
    month = today.getMonth() + 1,
    day = today.getDate()
  return gulp
    .src('./dist/**/*')
    .pipe( zip(`build-${month}-${day}.zip`) )
    .pipe(gulp.dest('./dist'));
}

gulp.task('build:zip', buildZip)

gulp.task('default', gulp.series(
  buildHtml,
  buildImage,
  buildIcon
))
