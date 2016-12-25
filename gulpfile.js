const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');


const breakpoints = [
{ prefix: 'xs-', mediaQuery: '(max-width: 480px)' },
{ prefix: 'sm-', mediaQuery: '(min-width: 480px)' },
{ prefix: 'md-', mediaQuery: '(min-width: 630px)' },
{ prefix: 'nrw-', mediaQuery: '(min-width: 720px)' },
{ prefix: 'lg-', mediaQuery: '(min-width: 800px)' },
{ prefix: 'mn-', mediaQuery: '(min-width: 960px)' },
{ prefix: 'xl-', mediaQuery: '(min-width: 1200px)' },
{ prefix: 'hdr-', mediaQuery: '(min-width: 1440px)' },
];


const processors = [
  require('postcss-import'),
  require('postcss-custom-properties'),
  require('postcss-custom-media'),
  require('postcss-nested'),
  require('postcss-pseudoelements'),
  require('postcss-responsify')({ breakpoints }),
  require('autoprefixer')({browsers: ['last 1 version']}),
];


gulp.task('css', () => {
  return gulp.src('./src/index.pcss')
    .pipe(postcss(processors))
    .pipe(rename(path => {
      path.extname = '.css';
      return path;
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['css'], () => {
  gulp.watch('src/**/*.pcss', ['css']);
});
