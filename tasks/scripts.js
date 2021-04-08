import gulp from 'gulp'
import webpack from 'webpack-stream'
import { webpackConfig } from './webpack'

gulp.task('scripts', function () {
  return gulp.src('./scripts/index.js')
    .pipe(webpack(webpackConfig, null, function (err, stats) {
      /* Use stats to do more things if needed */
      // console.log(stats)
    }))
    .pipe(gulp.dest('./src'));
})
