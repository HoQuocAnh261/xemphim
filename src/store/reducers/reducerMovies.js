import * as Types from "../type";
const reducerMoviesInitialState = {
  netflixOriginals: null,
  trendingMovies: null,
  topRatedMovies: null,
  actionMovies: null,
  animeMovies: null,
  horrorMovies: null,
  marvelMovies: null,
  comedyMovies: null,
  movieDetails: null,
  searchMovies: null,
  movieTrailer: null,
};

const reducerMovies = (
  state = reducerMoviesInitialState,
  { type, payload }
) => {
  switch (type) {
    case Types.GET_NETFLIX_ORIGINALS:
      return { ...state, netflixOriginals: payload };
    case Types.GET_TRENDING_MOVIES:
      return { ...state, trendingMovies: payload };
    case Types.GET_TOP_RATED_MOVIES:
      return { ...state, topRatedMovies: payload };
    case Types.GET_ACTION_MOVIES:
      return { ...state, actionMovies: payload };
    case Types.GET_ANIME_MOVIES:
      return { ...state, animeMovies: payload };
    case Types.GET_HORROR_MOVIES:
      return { ...state, horrorMovies: payload };
    case Types.GET_MARVEL_MOVIES:
      return { ...state, marvelMovies: payload };
    case Types.GET_COMEDY_MOVIES:
      return { ...state, comedyMovies: payload };

    case Types.SET_MOVIE_DETAILS:
      return { ...state, movieDetails: payload };

    case Types.RESET_MOVIE_DETAILS:
      return { ...state, movieDetails: null };
    case Types.GET_SEARCH_MOVIES:
      return { ...state, searchMovies: payload };
    case Types.GET_VIDEO_TRAILER:
      return { ...state, movieTrailer: payload };
    case Types.RESET_SEARCH_MOVIES_:
      return { ...state, searchMovies: null };
    default:
      return state;
  }
};

export default reducerMovies;
