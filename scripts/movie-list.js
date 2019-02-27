// Load movies array object from db/dbMovies.js
let db_movies = movies;

// Maks cards in every rows / card groups movie list
const COLUMN_CARD_IN_ROW = 5;

$(document).ready(() => {
  showAllCardMoviesList();
});

let showAllCardMoviesList = () => {
  let moviesRow = 1;
  db_movies.forEach((movie, index) => {
    // If card in rows > 5, create new card groups movie list
    // Else append card in last of card groups movie list
    if ((index + 1) % COLUMN_CARD_IN_ROW == 0) {
      moviesRow++;
      $(".movies-container").append(createCardGroups(moviesRow));
    }

    $(`.movies-row-${moviesRow}`).append(
      createMovieCard(movie.poster_path, movie.title, movie.id)
    );
  });
};

// ====== HTML Templating ======
let createMovieCard = (poster_path, title, id) =>
  `<div class="card p-2 color-primary text-light">
  <img
    src=${poster_path}
    class="card-img-top"
  />
  <div class="card-body">
    <h6 class="card-title">${title}</h6>
    <button id="${id}" class="btn btn-block btn-sm color-secondary btn-detail" data-toggle="modal"
    data-target=".bd-example-modal-lg">Detail</button>
  </div>
</div>`;

let createCardGroups = moviesRow =>
  `<div class="card-deck text-center mt-3 movies-row-${moviesRow}"></div>`;
// ====== End HTML Templating ======
