const { src, dest, series } = require("gulp"),
	clean = require("gulp-clean"),
	usemin = require("gulp-usemin"),
	cssmin = require("gulp-cssmin"),
	htmlmin = require("gulp-htmlmin");

function cleanDist() {
	return src("dist/", { read: false, allowEmpty: true }).pipe(clean());
}

function copyDist() {
	return src(["src/**/*", "!src/assets/css/**"]).pipe(dest("dist/"));
}

function buildHtml() {
	return src("src/**/*.html")
		.pipe(
			usemin({
				css: [cssmin],
				html: [htmlmin({ collapseWhitespace: true })],
			})
		)
		.pipe(dest("dist/"));
}

exports.default = series(cleanDist, copyDist, buildHtml);
