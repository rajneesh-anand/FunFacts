const Request = require("request");
require("dotenv").config();
const fetch = require("node-fetch");
const axios = require("axios");

let myInit = {
	method: "GET",
	headers: {
		"Content-Type": "application/json"
	},
	mode: "cors",
	cache: "default"
};

const fetchJokes = new Request(
	`${process.env.BASE_URL}/data/home.json`,
	myInit
);

exports.getRandomFacts = (req, res) => {
	fetch(fetchJokes)
		.then(response => {
			return response.json();
		})
		.then(json => {
			let memeArray = [];

			json.map(posts => {
				memeArray.push(posts);
			});

			let randomfacts = memeArray[Math.floor(Math.random() * memeArray.length)];

			console.log(randomfacts);
			res.render("home", {
				facts: randomfacts,
				pageTitle: "Breaking News Blogs ",
				Desc: "Trending News Jokes meme and funny Blogs"
			});
		})
		.catch(err => {
			console.log(err);
		});
};

const options = {
	url: `${process.env.BASE_URL}/data/home.json`,
	method: "GET",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
};

exports.getAllFacts = (req, res, next) => {
	axios(options)
		.then(response => {
			//console.log(response);
			let memeArray = [];
			response.data.map(posts => {
				memeArray.push(posts);
			});

			//console.log(memeArray);
			res.render("home", {
				facts: memeArray,
				pageTitle: "Trending News TikTok Sports Blogs ",
				Desc: "Breaking News Jokes Meme and funny Blogs"
			});
		})

		.catch(err => {
			console.log(err);
		});
};

// exports.getDataFromApi = (req, res) => {
// 	let inputSearch = "burgers";
// 	let sortBy = "hot";
// 	let searchLimit = "5";
// 	let requestUrl = `http://www.reddit.com/search.json?q=${inputSearch}&sort=${sortBy}&limit=${searchLimit}`;
// 	console.log(requestUrl);
// 	fetch(requestUrl)
// 		.then(response => {
// 			return response.json();
// 		})
// 		.then(data => {
// 			console.log(data);
// 			res.data;
// 		});
// };
