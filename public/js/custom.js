const textSearch = document.getElementById("searchInput");
const searchButton = document.getElementById("searchbutton");

// function for materialize css left slider
$(document).ready(function() {
	$(".sidenav").sidenav();
});

(function($) {
	$(function() {
		$(".sidenav").sidenav();
	}); // end of document ready
})(jQuery); // end of jQuery name space

// ends here

// ---- function for trending meme data from reddit

// const searchTerm = document.querySelector("a[href='/trendingmeme']");
// console.log(searchTerm);

// searchTerm.addEventListener("click", e => {
// 	const searchTerm = "Trending meme";

// 	// if (searchTerm === "") {
// 	// 	textSearch.focus();
// 	// }
// 	// console.log(searchTerm);

// 	getDataFromApi.search(searchTerm, "30", "hot").then(results => {
// 		let output = '<div class="card-columns">';
// 		console.log(results);
// 		results.forEach(post => {
// 			// Check for image
// 			let image = post.preview
// 				? post.preview.images[0].source.url
// 				: "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
// 			console.log(image);
// 			output += `
// 		  <div class="card mb-2">
// 		  <img class="card-img-top" src="${image}" alt="Card image cap">
// 		  <div class="card-body">
// 			<h5 class="card-title">${post.title}</h5>
// 			<p class="card-text">${truncateString(post.selftext, 100)}</p>
// 			<a href="${post.url}" target="_blank
// 			" class="btn btn-primary">Read More</a>
// 			<hr>
// 			<span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
// 			<span class="badge badge-dark">Score: ${post.score}</span>
// 		  </div>
// 		</div>
// 		  `;
// 		});
// 		output += "</div>";
// 		document.getElementById("results").innerHTML = output;
// 	});

// 	e.preventDefault();
// });

// function truncateString(myString, limit) {
// 	const shortened = myString.indexOf(" ", limit);
// 	if (shortened == -1) return myString;
// 	return myString.substring(0, shortened);
// }

// const getDataFromApi = {
// 	search: function(searchTerm, searchLimit, sortBy) {
// 		return fetch(
// 			`https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`
// 		)
// 			.then(res => res.json())
// 			.then(data => {
// 				return data.data.children.map(data => data.data);
// 			})
// 			.catch(err => console.log(err));
// 	}
// };
