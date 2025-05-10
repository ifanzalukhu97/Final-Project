// Load movies array object from db/dbMovies.js
let db_movies = movies;

// by default, get all movies with "action" genre
let movieSelectByGenre = db_movies.filter(movie => movie.genre == "action");

let detailsBookingTicket = {};

$(window).on("load", () => {
  // Show form fields with animation
  animateFormFields();
});

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
  
  // Update movie price every movie options selected
  $(".movie-options").change(() => {
    setMoviePrice();
  });

  // Update total payment every ticket qty changed
  $(".ticket-movie-qty").change(() => {
    setTotalPayment();
  });

  // Handle booking button click
  $(".btn-booking-ticket").click(() => {
    getDetailBookingTicket();
    updateModalContent();
  });
});

// Animate form fields on page load
function animateFormFields() {
  $(`.booking-group-hidden`).each((index, element) => {
    setTimeout(() => {
      $(element).addClass("form-group-show");
    }, 200 * (index + 1));
  });
}

// Show movie options based on selected genre
function showMovieOptions() {
  $(".movie-options").empty();

  movieSelectByGenre.forEach(movie => {
    $(".movie-options").append(createOption(movie.title));
  });
}

// Set movie price based on selected movie
function setMoviePrice() {
  let movieTitleOptionSelected = $(".movie-options")
    .find(":selected")
    .text();

  let selectedMoviePrice = movieSelectByGenre.filter(
    movie => movie.title == movieTitleOptionSelected
  );

  if (selectedMoviePrice && selectedMoviePrice.length > 0) {
    $(".movie-price").val(selectedMoviePrice[0].price);
    setTotalPayment();
  }
}

// Calculate and set total payment
function setTotalPayment() {
  let ticketMovieQty = parseInt($(".ticket-movie-qty").val());
  if (isNaN(ticketMovieQty) || ticketMovieQty < 1) {
    ticketMovieQty = 1;
    $(".ticket-movie-qty").val(1);
  }
  
  let selectedMoviePrice = parseInt($(".movie-price").val());
  $(".total-payment").val(ticketMovieQty * selectedMoviePrice);
}

// Get booking details for modal
function getDetailBookingTicket() {
  let movieTitleSelected = $(".movie-options")
    .find(":selected")
    .val();

  let movieSelected = movieSelectByGenre.filter(
    movie => movie.title == movieTitleSelected
  );

  if (movieSelected && movieSelected.length > 0) {
    detailsBookingTicket.username = $(".username").val();
    detailsBookingTicket.email = $(".email").val();
    detailsBookingTicket.price = movieSelected[0].price;
    detailsBookingTicket.qty = $(".ticket-movie-qty").val();
    detailsBookingTicket.total_payment = $(".total-payment").val();
    detailsBookingTicket.poster_path = movieSelected[0].poster_path;
    detailsBookingTicket.title = movieSelected[0].title;
  }
}

// Update modal content with booking details
function updateModalContent() {
  $(".modal-detail-ticket").empty();
  
  if (detailsBookingTicket.poster_path) {
    $(".modal-detail-poster").attr("src", detailsBookingTicket.poster_path);
    
    // Create form fields in modal
    createTicketFormGroup("Movie", detailsBookingTicket.title);
    createTicketFormGroup("Username", detailsBookingTicket.username);
    createTicketFormGroup("Email", detailsBookingTicket.email);
    createTicketFormGroup("Price", formatCurrency(detailsBookingTicket.price));
    createTicketFormGroup("Quantity", detailsBookingTicket.qty);
    createTicketFormGroup("Total", formatCurrency(detailsBookingTicket.total_payment));
  }
}

// Format currency for display
function formatCurrency(value) {
  return "Rp " + parseInt(value).toLocaleString('id-ID');
}

// ======= HTML Templating ========
function createOption(movieTitle) {
  return `<option>${movieTitle}</option>`;
}

function createTicketFormGroup(label, value) {
  let inputType = "text";
  let readonlyAttr = "readonly";
  let inputValue = value || "";
  
  // Make username and email editable in the modal
  if (label === "Username" || label === "Email") {
    readonlyAttr = "required";
    if (label === "Email") inputType = "email";
  }

  let formGroup = `
  <div class="ticket-form-group">
    <label for="ticket-${label.toLowerCase()}">${label}</label>
    <input 
      type="${inputType}"
      id="ticket-${label.toLowerCase()}"
      name="${label}"
      class="ticket-form-control"
      value="${inputValue}"
      ${readonlyAttr}
    >
  </div>`;

  $(".modal-detail-ticket").append(formGroup);
}
// ======= End HTML Templating ========
