const api = 'api_key=1128ecbff69b87398bf97daf1d7d2927&page=1';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${api}`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?${api}&
query="`;

const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(API_URL);


async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();

	showMovies(data.results);
}

function showMovies(movies) {
	main.innerHTML = '';
}

form.addEventListener('submit', e => {
	e.preventDefault();

	const searchTerm = search.value;

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_API + searchTerm)

		search.value = '';
	} else {
		window.location.reload() //Recargar la Pagina
	}
})