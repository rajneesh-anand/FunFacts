const Request = require("request");
require("dotenv").config();
const fetch = require("node-fetch");

let myInit = {
	method: "GET",
	headers: {
		"Content-Type": "application/json"
	},
	mode: "cors",
	cache: "default"
};

const fetchMeme = new Request(
	`${process.env.BASE_URL}/data/trendingjokes.json`,
	myInit
);

exports.getTrendingMemes = (req, res) => {
	fetch(fetchMeme)
		.then(response => {
			return response.json();
		})
		.then(json => {
			let memeArray = [];
			console.log(json);

			json.map(posts => {
				memeArray.push(posts);
			});
			console.log(memeArray);
			res.render("trendingmeme", {
				memes: memeArray,
				pageTitle: "Trending TikTok News Blogs ",
				Desc: "Trending News Jokes meme and funny Blogs"
			});
		})
		.catch(err => {
			console.log(err);
		});
};
