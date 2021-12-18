import axios from "axios";
import {
  popularMoviesURL,
  upcomingMoviesURL,
  topRatedMoviesURL,
  SearchMovieURL,
} from "../api";

//Action Creator
export const loadMovies = () => async (dispatch) => {
  //Fetch axios
  const popularData = await axios.get(popularMoviesURL());
  const topRatedData = await axios.get(topRatedMoviesURL());
  const upcomingData = await axios.get(upcomingMoviesURL());
  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      top_rated: topRatedData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(SearchMovieURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
