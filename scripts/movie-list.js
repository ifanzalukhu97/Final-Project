// Load movies array object from db/dbMovies.js
let db_movies = movies;

let movieDetailSelected;
let modalDetailMovie;

// Maks cards in every rows / card groups movie list
const COLUMN_CARD_IN_ROW = 5;

$(document).ready(() => {
  showAllCardMoviesList();

  // ====== Show Modal Detail Movie ======
  $(`.btn-detail`).each((index, btnElement) => {
    $(btnElement).on("click", () => {
      // Remove old modal before append new modal
      $(".modal").remove();

      // filter db_movies by id button detail selected
      movieDetailSelected = db_movies.filter(
        movie => movie.id == parseInt(btnElement.id)
      );

      // Create new modal with movie detail selected
      modalDetailMovie = createModalDetailMovie(
        movieDetailSelected[0].poster_path,
        movieDetailSelected[0].title,
        movieDetailSelected[0].overview,
        movieDetailSelected[0].release_date
      );

      // Append new modal in body
      $("body").append(modalDetailMovie);
    });
  });
  // ====== End Show Modal Detail Movie ======
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

let createModalDetailMovie = (
  poster_path,
  title,
  overview,
  release_date
) => `<div class="modal fade bd-example-modal-lg" tabindex="-1"
  role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl color-primary-light p-2">
    <div class="modal-content">
      <div class="card color-primary-dark">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src=${poster_path} class="card-img"/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="card-title mb-4"> <h3 class="font-secondary"> ${title} </h3> </div>
              <h5 class="card-text text-light"> Overview </h5>
              <p class="card-text text-secondary text-justify"> ${overview} </p>
              <h5 class="card-text text-light"> Release</h5>
              <p class="card-text"> <small class="text-muted"> ${release_date} </small> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>`;
// ====== End HTML Templating ======
