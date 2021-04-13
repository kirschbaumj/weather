import gulp from "gulp";
import gulpLoadPlugins from "gulp-load-plugins";

const plugins = gulpLoadPlugins({lazy:true});

gulp.task("default", function() {
	//Do Gulp things here...
});

gulp.task("lint", function(){
	var lint = plugins.eslint;
	//Lint all JS files not in the node_modules folder or the Babel-generated files
	return gulp.src(["**/*.js","!node_modules/**", "!dist/**"])
		.pipe(lint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(lint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failAfterError last.
		.pipe(lint.failAfterError());
});


gulp.task("transpile", function(){
	var babel = plugins.babel;
	var sourcemaps = plugins.sourcemaps;
	var concat = plugins.concat;

	return gulp.src("src/**/*.js")
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ["env"]
		}))
		.pipe(concat("all.js"))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("dist"));
});

gulp.task("watch", function(){
	gulp.watch("src/**/*.js", ["transpile"]);
});
