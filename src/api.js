// base url
const base_url = "https://api.themoviedb.org/3/";

var api = process.env.REACT_APP_API_KEY;

// popular, upcoming and top-rated movies
const popular_movies = `movie/popular?api_key=${api}`;
const upcoming_movies = `movie/upcoming?api_key=${api}`;
const top_rated_movies = `movie/top_rated?api_key=${api}`;

export const popularMoviesURL = () => `${base_url}${popular_movies}`;
export const upcomingMoviesURL = () => `${base_url}${upcoming_movies}`;
export const topRatedMoviesURL = () => `${base_url}${top_rated_movies}`;

export const movieDetailsURL = (movie_id) =>
  `${base_url}movie/${movie_id}?api_key=${api}`;

export const SearchMovieURL = (movie_name) =>
  `${base_url}search/movie?api_key=${api}&query=${movie_name}`;

export const movieReviewURL = (movie_id) =>
  `${base_url}movie/${movie_id}/reviews?api_key=${api}`;

export const recommendationsMovieURL = (movie_id) =>
  `${base_url}movie/${movie_id}/recommendations?api_key=${api}`;
