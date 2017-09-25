const express = require("express");
const path = require("path");
const router = express.Router();

router.use(function timeLog(req, res, next) {
	console.log("req originalUrl: ", req.originalUrl);
	console.log("Time: ", Date.now());
	next();
});

router.get("/css/foundation.min.css", function(req, res) {
	res.sendFile(path.join(
		__dirname,
		"../app",
		"assets",
		"foundation",
		"css",
		"foundation.min.css"));
});

router.get("/js/jquery.js", function(req, res) {
	res.sendFile(path.join(
		__dirname,
		"../app",
		"assets",
		"foundation",
		"js",
		"vendor",
		"jquery.js"));
});

router.get("/js/what-input.js", function(req, res) {
	res.sendFile(path.join(
		__dirname,
		"../app",
		"assets",
		"foundation",
		"js",
		"vendor",
		"what-input.js"));
});

router.get("/js/foundation.min.js", function(req, res) {
	res.sendFile(path.join(
		__dirname,
		"../app",
		"assets",
		"foundation",
		"js",
		"vendor",
		"foundation.min.js"));
});

module.exports = router;
