// Load movies array object from db/dbMovies.js
let db_movies = movies;

let movieDetailSelected;
let modalDetailMovie;

$(document).ready(() => {
  showAllCardMoviesList();
  initializeParallaxEffect();

  // ====== Show Modal Detail Movie ======
  $(document).on("click", ".btn-detail:not([data-dismiss='modal'])", function() {
    // Remove old modal before append new modal
    $(".modal").remove();

    // filter db_movies by id button detail selected
    const btnId = $(this).attr("id");
    movieDetailSelected = db_movies.filter(
      movie => movie.id == parseInt(btnId)
    );

    // Make sure we found a movie before proceeding
    if (movieDetailSelected && movieDetailSelected.length > 0) {
      // Create new modal with movie detail selected
      modalDetailMovie = createModalDetailMovie(
        movieDetailSelected[0].poster_path,
        movieDetailSelected[0].title,
        movieDetailSelected[0].overview,
        movieDetailSelected[0].release_date
      );

      // Append new modal in body
      $("body").append(modalDetailMovie);
      
      // Show the modal
      $(".detail-movie-modal").modal('show');
    }
  });
  // ====== End Show Modal Detail Movie ======
});

let showAllCardMoviesList = () => {
  // Clear existing content
  $(".movies-container").empty();
  
  // Define how many movies we want per row (consistent number)
  const moviesPerRow = 6;
  
  // Calculate how many rows we need
  const totalMovies = db_movies.length;
  const totalRows = Math.ceil(totalMovies / moviesPerRow);
  
  // Create all rows first
  for (let i = 1; i <= totalRows; i++) {
    $(".movies-container").append(createCardGroups(i));
  }
  
  // Distribute movies evenly across rows
  db_movies.forEach((movie, index) => {
    // Calculate which row this movie belongs to
    const rowNumber = Math.floor(index / moviesPerRow) + 1;
    
    // Add the movie card to the appropriate row
    $(`.movies-row-${rowNumber}`).append(
      createMovieCard(movie.poster_path, movie.title, movie.id, movie.genre)
    );
  });
};

// ====== Parallax Effect ======
let initializeParallaxEffect = () => {
  // Show first two rows immediately
  showCardMoviesParallax(1);
  showCardMoviesParallax(2);
  
  // Set up scroll event for remaining rows
  $(window).scroll(function() {
    let scrollCurrentPosition = $(this).scrollTop();
    
    // Get all rows and check if they should be animated
    $(".movies-grid").each(function(index) {
      // Skip first two rows as they're already shown
      if (index > 1) {
        const rowNumber = index + 1;
        const rowOffset = $(this).offset().top;
        
        if (scrollCurrentPosition > rowOffset - 400) {
          showCardMoviesParallax(rowNumber);
        }
      }
    });
  });
};

let showCardMoviesParallax = movieRowIndex => {
  // Check if this row has already been animated
  if ($(`.movies-row-${movieRowIndex}`).hasClass('animated')) {
    return;
  }
  
  // Mark this row as animated
  $(`.movies-row-${movieRowIndex}`).addClass('animated');
  
  // Animate each card in the row
  $(`.movies-row-${movieRowIndex} .movie-card`).each((index, cardElement) => {
    setTimeout(() => {
      $(cardElement).addClass("show-card-groups-movies");
    }, 150 * (index + 1));
  });
};
// ====== End Parallax Effect ======

// ====== HTML Templating ======
let createMovieCard = (poster_path, title, id, genre) => {
  let badgeClass;
  
  switch(genre) {
    case "comedy":
      badgeClass = "badge-comedy";
      break;
    case "action":
      badgeClass = "badge-action";
      break;
    case "drama":
      badgeClass = "badge-drama";
      break;
    case "romance":
      badgeClass = "badge-romance";
      break;
    default:
      badgeClass = "badge-other";
  }

  return `
  <div class="movie-card">
    <div class="movie-poster">
      <div class="movie-overlay"></div>
      <img src="${poster_path}" alt="${title}" />
      <span class="movie-badge ${badgeClass}">${genre}</span>
    </div>
    <div class="movie-info">
      <h3 class="movie-title">${title}</h3>
      <button id="${id}" class="btn btn-detail">Details</button>
    </div>
  </div>`;
};

let createCardGroups = moviesRow =>
  `<div class="movies-grid movies-row-${moviesRow}"></div>`;

let createModalDetailMovie = (
  poster_path,
  title,
  overview,
  release_date
) => `<div class="modal fade detail-movie-modal" tabindex="-1"
  role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl color-primary-light p-2">
    <div class="modal-content color-primary-dark">
      <div class="card color-primary-dark border-0">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src=${poster_path} class="card-img" style="border-radius: 8px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="card-title mb-4"> <h3 class="font-secondary"> ${title} </h3> </div>
              <h5 class="card-text text-light"> Overview </h5>
              <p class="card-text text-secondary text-justify"> ${overview} </p>
              <h5 class="card-text text-light"> Release</h5>
              <p class="card-text"> <small class="text-muted"> ${release_date} </small> </p>
              <button type="button" class="btn btn-detail mt-3" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>`;
// ====== End HTML Templating ======
