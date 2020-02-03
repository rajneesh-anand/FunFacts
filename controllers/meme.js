const request = require("request");
const fetch = require('node-fetch');

exports.memeDetails = (req, res) =>{

    const weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&apikey=6ac54ee2441a100a2510fba517e5eeed";
    fetch(weatherURL)
    .then(response => response.json())
    .then(data => {
        res.json(data);
        console.log(data)
    })
    .catch(err => {console.log(err)})

}
