import axios from "axios";
import * as Types from "../type";

const API_KEY = "6682265e8b13bbb174a6430fec0c9fbe";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNetflixOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213&language=vi-VN`
    );
    dispatch({
      type: Types.GET_NETFLIX_ORIGINALS,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Netflix api error", error);
  }
};

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=vi-VN`
    );
    dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get trending movies api error", error);
  }
};

export const getTopRatedMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=vi-VN`
    );
    dispatch({
      type: Types.GET_TOP_RATED_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get top rated movies api error", error);
  }
};

export const getActionMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28&language=vi-VN`
    );
    dispatch({ type: Types.GET_ACTION_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get action movies api error", error);
  }
};

export const getAnimeMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&language=vi-VN`
    );
    dispatch({ type: Types.GET_ANIME_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get trending movies api error", error);
  }
};

export const getHorrorMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27&language=vi-VN`
    );
    dispatch({ type: Types.GET_HORROR_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get horror movies api error", error);
  }
};

export const getMarvelMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=vi-VN&sort_by=popularity.desc&page=1&with_keywords=180547`
    );
    dispatch({ type: Types.GET_MARVEL_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get marvel movies api error", error);
  }
};

export const getComedyMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35&language=vi-VN`
    );
    dispatch({
      type: Types.GET_COMEDY_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get trending movies api error", error);
  }
};

export const setMovieDetails = (id) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=vi-VN`
    );
    dispatch({ type: Types.SET_MOVIE_DETAILS, payload: result.data });
  } catch (error) {
    console.log("Get movies api error", error);
  }
};

export const getSearchMovies = (keyword) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=vi-VN&include_adult=false&query=${keyword}`
    );
    dispatch({ type: Types.GET_SEARCH_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("search movies api error", error);
  }
};

export const getMovieTrailer = (movie_id) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
    );
    dispatch({ type: Types.GET_VIDEO_TRAILER, payload: result.data.results });
  } catch (error) {
    console.log("get video movie api error", error);
  }
};
