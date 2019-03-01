// Load movies array object from db/dbMovies.js
let db_movies = movies;

// by default, get all movies with "action" genre
let movieSelectByGenre = db_movies.filter(movie => movie.genre == "action");

$(document).ready(() => {
  // Show options of movie which "action" genre as default
  showMovieOptions();
});

let showMovieOptions = () => {
  $(".movie-options").empty();

  movieSelectByGenre.forEach(movie => {
    $(".movie-options").append(createOption(movie.title));
  });

  // Every options genre changed, update options of movie
  // Just show options movie from current selected genre
  $(".select-genre").change(() => {
    let selectedGenre = $(".select-genre")
      .find(":selected")
      .text()
      .toLocaleLowerCase();

    // Update movie options from current selected genre
    movieSelectByGenre = db_movies.filter(
      movie => movie.genre == selectedGenre
    );

    // Show options of movie which current selected genre
    showMovieOptions();
  });
};

// ======= HTML Templating ========
let createOption = movieTitle => {
  return `<option>${movieTitle}</option>`;
};
// ======= End HTML Templating ========
