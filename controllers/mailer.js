const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
	auth: {
		api_key: process.env.MAILGUN_API_KEY || "hjfdghjdfg",
		domain: process.env.MAILGUN_DOMAIN || "hjkdsfghjkhfg"
	}
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (username, email, message, cb) => {
	const mailOptions = {
		from: email,
		to: "rajneesh.k.anand@hotmail.com",
		subject: "thefunfactsclub " + " - " + username,
		text: message
	};

	transporter.sendMail(mailOptions, function(err, data) {
		if (err) {
			return cb(err, null);
		}
		return cb(null, data);
	});
};

module.exports = sendMail;
