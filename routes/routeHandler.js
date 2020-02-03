const express = require('express');
const router = express.Router();
const { memeDetails} = require('../controllers/meme');
const axios = require('axios')

router.get('/', (req, res, next) => {

    const weatherURL = "https://api.github.com/users";

    axios.get(weatherURL)

    .then(Response => {
            let postArray = [];

            Response.data.map(posts => {
                postArray.push(posts);
            });
            res.render('home', {
                posts: postArray
            })
    })
    .catch(err =>{
        console.log(err)
    });

  
   
});





router.get('/privacypolicy', function (req, res) {
    res.sendFile('privacypolicy.html', { root: './public/static' })
});

router.get('/termofuse', function (req, res) {
    res.sendFile('termsofuse.html', { root: './public/static' })
});


router.get('*', function(req, res) {  
    res.render('error', {title: `${process.env.websiteUrl} - Fun Facts`});
});

module.exports = router;
