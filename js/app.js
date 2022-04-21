const displayMoviesContainer = document.getElementById('display-movies');

const fetchMovies = async () => {
    const movieData = await fetch('https://api.tvmaze.com/shows/1/episodes')
    const response = await movieData.json();
    let output = "";
    response.forEach(movie => {
        output += `
        <div class="movie-row">
        <img src="${movie.image.medium}" />
        <h4>${movie.name}  <span>${movie.season}</span></h4>
         </div>
        `;
        displayMoviesContainer.innerHTML = output;
    });
}

const searchMovies = async () => {
    const searchButton = document.getElementById('search-btn');
    const searchInput = document.getElementById('search');
    searchButton.addEventListener('click', async () => {
        displayMoviesContainer.innerHTML = '';
        const searchValue = searchInput.value;
        if (searchValue.trim() !== '') {
            const searchData = await fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
            const res = await searchData.json()
            let searchOutput = "";
            res.forEach((searchMovie) => {
                    searchOutput += `
                    <div class="movie-row">
                   <img src="${searchMovie.show.image.medium}" />
                  <h4>${searchMovie.show.name}  <span>${searchMovie.show.language}</span></h4>
                  </div>
                 `;
                 displayMoviesContainer.innerHTML = searchOutput;
                 searchInput.value = '';
            });
        }else {
            displayMoviesContainer.innerHTML = 'Please Type the Name of the Movie'
        }
    })
}

searchMovies()
fetchMovies()