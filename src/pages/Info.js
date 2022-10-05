import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieDetails from "../components/MovieDetails";

function Info() {
  const { movieDetails } = useSelector((state) => state.infoMovies);
  const [isShowModal, setIsShowModal] = useState(false);
  useEffect(() => {
    setIsShowModal(movieDetails ? true : false);
  }, [movieDetails]);
  return (
    <div>
      <MovieDetails movie={movieDetails} showModal={isShowModal} />
    </div>
  );
}

export default Info;
