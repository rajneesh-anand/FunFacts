const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const exphbs = require("express-handlebars");
const routes = require("./routes/routeHandler");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

var hbs = exphbs.create({
	defaultLayout: "main",
	helpers: {
		hello: function() {
			let count = Math.floor(Math.random() * Math.floor(15));
			return `humor${count}.jpg`;
		},
		headimage: function() {
			return Math.floor(Math.random() * Math.floor(10));
		},
		domain_url: process.env.BASE_URL,
		desc: "funny memes tredning tiktok videos",
		title: "funny memes trending tiktok",
		fb_id: process.env.FB_ID,
		isEqual: function(arg1, arg2, options) {
			return arg1 == arg2 ? options.fn(this) : options.inverse(this);
		}
	}
});

// set view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));

// Set the static folder
app.use(express.static(path.join(__dirname, "public")));

// Data parsing
app.use(
	express.urlencoded({
		extended: false
	})
);
app.use(express.json());

app.use(cors());
app.use("/", routes);

// Server start
app.listen(PORT, () => {
	console.log(`The server is running on port ${PORT}`);
});
