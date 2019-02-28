// Load movies array object from db/dbMovies.js
let db_movies = movies;

let movieDetailSelected;
let modalDetailMovie;

// Maks cards in every rows / card groups movie list
const COLUMN_CARD_IN_ROW = 5;

$(document).ready(() => {
  showAllCardMoviesList();

  showCardMoviesParallax(1);
  showCardMoviesParallax(2);

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
      createMovieCard(movie.poster_path, movie.title, movie.id, movie.genre)
    );
  });
};

// ====== Parallax Effect ======
let showCardMoviesParallax = movieRowIndex => {
  $(`.movies-row-${movieRowIndex} .card`).each((index, cardElement) => {
    setTimeout(() => {
      $(cardElement).addClass("show-card-groups-movies");
    }, 300 * (index + 1));
  });
};

$(window).scroll(() => {
  let scrollCurrentPosition = $(this).scrollTop();

  if (scrollCurrentPosition > $(".movies-row-2").offset().top - 100) {
    showCardMoviesParallax(3);
  }

  if (scrollCurrentPosition > $(".movies-row-3").offset().top - 100) {
    showCardMoviesParallax(4);
  }
});
// ====== End Parallax Effect ======

// ====== HTML Templating ======
let createMovieCard = (poster_path, title, id, genre) => {
  let badgeGenreColor;
  if (genre == "comedy") {
    badgeGenreColor = "badge-success";
  } else if (genre == "action") {
    badgeGenreColor = "badge-warning";
  } else if (genre == "drama") {
    badgeGenreColor = "badge-primary";
  } else if (genre == "romance") {
    badgeGenreColor = "badge-pink";
  } else {
    badgeGenreColor = "badge-light";
  }

  return `<div class="card p-2 color-primary text-light">
  <img
    src=${poster_path}
    class="card-img-top"
  />
  <div class="card-body">
    <h6 class="card-title">${title}</h6>
    <button id="${id}" class="btn btn-block btn-sm color-primary-dark font-secondary btn-detail" data-toggle="modal"
    data-target=".bd-example-modal-lg">Detail</button>
  </div>
  <div><span class="badge badge-genre ${badgeGenreColor}">${genre}</span></div>
</div>`;
};

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
