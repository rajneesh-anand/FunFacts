const exphbs = require("express-handlebars");
const hbs = exphbs.create({
	defaultLayout: "main",
	helpers: {
		hello: function() {
			let count = Math.floor(Math.random() * Math.floor(15));
			return `humor${count}.jpg`;
		},
		headimage: function() {
			return Math.floor(Math.random() * Math.floor(12));
		},
		domain_url: process.env.BASE_URL,
		fbDesc: "What best thing will happen with you in 2020",
		title: "Liked it ? Click here to know more ",
		fb_id: process.env.FB_ID,
		isEqual: function(arg1, arg2, options) {
			return arg1 == arg2 ? options.fn(this) : options.inverse(this);
		},

		image: function(arg1) {
			return arg1
				? arg1.images[0].source.url
				: "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
		},
		truncateString: function(myString, limit) {
			const shortened = myString.indexOf(" ", limit);
			if (shortened == -1) return myString;
			return myString.substring(0, shortened);
		},
		counter: function() {
			let url = window.location.pathname;
			return (url += 1);
		}
	}
});

module.exports = hbs;
