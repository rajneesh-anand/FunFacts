const express = require("express");
const router = express.Router();
const { getMemes } = require("../controllers/meme");
const { getTrendingMemes } = require("../controllers/trendingmeme");
const sendMail = require("../controllers/mailer");

const axios = require("axios");

// router.get("/", (req, res, next) => {
// 	const weatherURL = "https://api.github.com/users";

// 	axios
// 		.get(weatherURL)

// 		.then(Response => {
// 			let postArray = [];

// 			Response.data.map(posts => {
// 				postArray.push(posts);
// 			});
// 			res.render("home", {
// 				posts: postArray
// 			});
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// });

router.get("/privacypolicy", function(req, res) {
	res.sendFile("privacypolicy.html", { root: "./public/static" });
});

router.get("/termofuse", function(req, res) {
	res.sendFile("termsofuse.html", { root: "./public/static" });
});

// router.get("/jokes", function(req, res) {
// 	res.render("jokes");
// });
router.get("/jokes", getMemes);

router.get("/", function(req, res) {
	res.render("home");
});

router.get("/contact", function(req, res) {
	res.render("contactus");
});

router.post("/contact", (req, res) => {
	const { username, email, message } = req.body;

	console.log("Data: ", req.body);

	sendMail(username, email, message, function(err, data) {
		if (err) {
			console.log("ERROR: ", err);
			return res
				.status(500)
				.render("confirm", { message: `${err.message} : Email not sent !` });
		}
		console.log("Email Sent Successfully");
		res.render("confirm", { message: "Email Sent" });
	});
});

router.get("/trendingmeme", getTrendingMemes);

router.get("*", function(req, res) {
	res.render("error", { title: `${process.env.websiteUrl} - Fun Facts` });
});

module.exports = router;
