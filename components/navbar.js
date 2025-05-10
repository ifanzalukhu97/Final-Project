/**
 * Shared Navigation Component
 * This script injects a consistent navigation bar across all pages
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get the current page path
  const currentPath = window.location.pathname;
  
  // Determine which nav item should be active
  const isHome = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath.endsWith('Final-Project/');
  const isMovieList = currentPath.includes('movie-list.html');
  const isBooking = currentPath.includes('booking-ticket.html');
  
  // Create the navigation HTML
  const navHTML = `
    <nav class="navbar-custom">
      <div class="container-fluid">
        <div class="row">
          <div class="col-4">
            <a href="${isHome ? '' : '../index.html'}" class="d-block">
              <i class="material-icons navbar-icons ${isHome ? 'active' : ''}">home</i>
              <span class="nav-label">Home</span>
            </a>
          </div>
          <div class="col-4">
            <a href="${isHome ? './pages/movie-list.html' : isMovieList ? '' : './movie-list.html'}" class="d-block">
              <i class="material-icons navbar-icons ${isMovieList ? 'active' : ''}">movie_creation</i>
              <span class="nav-label">Movies</span>
            </a>
          </div>
          <div class="col-4">
            <a href="${isHome ? './pages/booking-ticket.html' : isBooking ? '' : './booking-ticket.html'}" class="d-block">
              <i class="material-icons navbar-icons ${isBooking ? 'active' : ''}">today</i>
              <span class="nav-label">Bookings</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;
  
  // Find the navbar container and insert the navigation
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = navHTML;
  }
});
