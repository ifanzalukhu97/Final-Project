// Load movies array object from db/dbMovies.js
let db_movies = movies;

// by default, get all movies with "action" genre
let movieSelectByGenre = db_movies.filter(movie => movie.genre == "action");

$(document).ready(() => {
  // Show options of movie which "action" genre as default
  showMovieOptions();

  // show movie price depend on movie option selected
  setMoviePrice();

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

    // update movie price depend on movie option selected
    setMoviePrice();
  });
});

// Update movie price every movie options selected
$(".movie-options").change(() => {
  setMoviePrice();
});

// Update total payment every ticket qty changed
$(".ticket-movie-qty").change(() => {
  setTotalPayment();
});

let showMovieOptions = () => {
  $(".movie-options").empty();

  movieSelectByGenre.forEach(movie => {
    $(".movie-options").append(createOption(movie.title));
  });
};

let setMoviePrice = () => {
  let movieTitleOptionSelected = $(".movie-options")
    .find(":selected")
    .text();

  let selectedMoviePrice = movieSelectByGenre.filter(
    movie => movie.title == movieTitleOptionSelected
  );

  $(".movie-price").val(selectedMoviePrice[0].price);

  setTotalPayment();
};

let setTotalPayment = () => {
  let ticketMovieQty = parseInt($(".ticket-movie-qty").val());
  if (isNaN(ticketMovieQty)) {
    ticketMovieQty = 0;
  }
  let selectedMoviePrice = parseInt($(".movie-price").val());
  $(".total-payment").val(ticketMovieQty * selectedMoviePrice);
};

// ======= HTML Templating ========
let createOption = movieTitle => {
  return `<option>${movieTitle}</option>`;
};
// ======= End HTML Templating ========
