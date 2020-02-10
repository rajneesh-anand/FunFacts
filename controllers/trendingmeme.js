const axios = require("axios");

let searchTerm = "trending meme";
let sortBy = "hot";
let searchLimit = "25";

const options = {
	url: `https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`,
	method: "GET",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
};

exports.getTrendingMemes = (req, res, next) => {
	axios(options)
		.then(response => {
			let memeArray = [];
			response.data.data.children.map(posts => {
				memeArray.push(posts.data);
			});

			//console.log(memeArray);
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
