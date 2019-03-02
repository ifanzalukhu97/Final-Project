// Load movies array object from db/dbMovies.js
let db_movies = movies;

// by default, get all movies with "action" genre
let movieSelectByGenre = db_movies.filter(movie => movie.genre == "action");

let detailsBookingTicket = {};

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

// Update total payment every ticket qty changed
$(".ticket-movie-qty").change(() => {
  setTotalPayment();
});

$(".btn-booking-ticket").click(() => {
  getDetailBookingTicket();

  $(".modal-detail-ticket").empty();

  createFormGroup("Username", detailsBookingTicket.username);
  createFormGroup("Email", detailsBookingTicket.email);
  createFormGroup("Price", detailsBookingTicket.price);
  createFormGroup("Qty", detailsBookingTicket.qty);
  createFormGroup("Total", detailsBookingTicket.total_payment);

  $(".modal-detail-poster").attr("src", detailsBookingTicket.poster_path);
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

let getDetailBookingTicket = () => {
  let movieTitleSelected = $(".movie-options")
    .find(":selected")
    .val();

  let movieSelected = movieSelectByGenre.filter(
    movie => movie.title == movieTitleSelected
  );

  detailsBookingTicket.username = $(".username").val();
  detailsBookingTicket.email = $(".email").val();
  detailsBookingTicket.price = movieSelected[0].price;
  detailsBookingTicket.qty = $(".ticket-movie-qty").val();
  detailsBookingTicket.total_payment = $(".total-payment").val();
  detailsBookingTicket.poster_path = movieSelected[0].poster_path;
};

// ======= HTML Templating ========
let createOption = movieTitle => {
  return `<option>${movieTitle}</option>`;
};

let createFormGroup = (label, value) => {
  let visibilty = "readonly";
  if (label == "Username" || label == "Email") {
    visibilty = `placeholder = ${label} required`;
  }

  let formGroup = `<div class="form-group row">
  <label class="col-sm-4 col-form-label">
    ${label}
  </label>
  <div class="col-sm-8">
    <input
      name=${label}
      ${visibilty}
      class="form-control-plaintext text-white"
      value="${value}"
    />
  </div>
</div>`;

  $(".modal-detail-ticket").append(formGroup);
};
// ======= End HTML Templating ========
