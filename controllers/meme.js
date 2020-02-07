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

const fetchJokes = new Request(
	`${process.env.BASE_URL}/data/jokes.json`,
	myInit
);

exports.getMemes = (req, res) => {
	fetch(fetchJokes)
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
			res.render("jokes", {
				memes: memeArray,
				pageTitle: "Jokes Humor News Fun",
				Desc: "Trending News Jokes and Funny Blogs"
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
