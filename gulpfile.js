// Various helper modules
var gulp = require("gulp");
var plug = require("gulp-load-plugins")();

var source = [
		'app/**/*.js', 
		"!app/vendor/**/*.*"
	];

gulp.task('webserver', function() {
	return gulp
		.src('app')										// root
		.pipe(plug.webserver({
			livereload: true,							// livereload
			directoryListing: true,
			open: "http://localhost:8000/index.html"	// index.html
	}));
});

gulp.task('ngAnnotate', function () {
	return gulp
		.src(source)
		
		// ngAnnotate
		.pipe(plug.ngAnnotate({add: true, single_quotes: false}))
		
		// Rename file
		// .pipe(plug.rename(function(path) {
		// 	path.extname = ".annotated.js"
		// }))

		// uglify
		.pipe(plug.uglify({mangle: true}))

		.pipe(gulp.dest('./build'));
});

// The default task is 'webserver'
gulp.task("default", ["webserver"]);

/*  
	if you don't use the default name if gulpfile.js,
	run gulp like this:
	gulp --gulpfile youFileName taskname
*/