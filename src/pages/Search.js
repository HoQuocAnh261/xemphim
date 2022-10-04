import React from "react";
import { useSelector } from "react-redux";
import MovieDetails from "../components/MovieDetails";
import SearchMovies from "../components/SearchMovies";

function Search() {
  const { movieDetails } = useSelector((state) => state.infoMovies);
  return (
    <>
      <SearchMovies />
      <MovieDetails
        showModal={movieDetails ? true : false}
        movie={movieDetails}
      />
    </>
  );
}

export default Search;
