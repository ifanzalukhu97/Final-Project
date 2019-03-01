// Load movies array object from db/dbMovies.js
let db_movies = movies;

// by default, get all movies with "action" genre
let movieSelectByGenre = db_movies.filter(movie => movie.genre == "action");

$(document).ready(() => {});

// ======= HTML Templating ========
let createOption = movieTitle => {};
// ======= End HTML Templating ========
