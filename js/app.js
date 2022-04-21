const displayMoviesContainer = document.getElementById('display-movies');

const fetchMovies = async () => {
    const movieData = await fetch('https://api.tvmaze.com/shows/1/episodes')
    const response = await movieData.json();
    let output = "";
    response.forEach(movie => {
        output += `
        <div class="movie-row">
        <img src="${movie.image.medium}" />
        <h4>${movie.name}  <span>${movie.type}</span></h4>
         </div>
        `;
        displayMoviesContainer.innerHTML = output;
    });
}

fetchMovies()