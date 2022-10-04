import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Content from "../components/Content";
import Intro from "../components/Intro";
import Menu from "../components/Menu";
import MovieDetails from "../components/MovieDetails";

function Home() {
  const { movieDetails } = useSelector((state) => state.infoMovies);
  const [isShowModal, setIsShowModal] = useState(false);
  useEffect(() => {
    setIsShowModal(movieDetails ? true : false);
  }, [movieDetails]);
  return (
    <div>
      <Intro />
      <Content />
      <Menu />
      <MovieDetails movie={movieDetails} showModal={isShowModal} />
    </div>
  );
}

export default Home;
