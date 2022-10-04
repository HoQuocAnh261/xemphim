import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { animateScroll } from "react-scroll/modules";
import { useScroll } from "../../hooks";
import {
  getAnimeMovies,
  getComedyMovies,
  getHorrorMovies,
  getMarvelMovies,
  getNetflixOriginals,
  getActionMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../../store/actions";
import MovieRow from "./MovieRow";
import styledComponents from "styled-components";

const handleScrollToTop = () => {
  animateScroll.scrollToTop();
};

function Content() {
  const scrollY = useScroll();
  const dispatch = useDispatch();
  const {
    netflixOriginals,
    trendingMovies,
    topRatedMovies,
    animeMovies,
    actionMovies,
    horrorMovies,
    marvelMovies,
    comedyMovies,
  } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(getNetflixOriginals());
    dispatch(getTrendingMovies());
    dispatch(getTopRatedMovies());
    dispatch(getActionMovies());
    dispatch(getAnimeMovies());
    dispatch(getHorrorMovies());
    dispatch(getMarvelMovies());
    dispatch(getComedyMovies());
  }, [dispatch]);
  return (
    <>
      {" "}
      <MovieRow
        movies={netflixOriginals}
        title="Phim Đề Cử"
        isNetflix={true}
        idSection="netflix"
      />
      <MovieRow
        movies={trendingMovies}
        title="Hiện Đang Thịnh Hành"
        idSection="trending"
      />
      <MovieRow
        movies={topRatedMovies}
        title="Top Rating Cao"
        idSection="topRated"
      />
      <MovieRow
        movies={actionMovies}
        title="Phim Hành Động"
        idSection="popular"
      />
      <MovieRow movies={animeMovies} title="Phim Hoạt Hình" idSection="anime" />
      <MovieRow movies={horrorMovies} title="Phim Kinh Dị" idSection="horror" />
      <MovieRow movies={marvelMovies} title="Phim Marvel" idSection="marvel" />
      <MovieRow movies={comedyMovies} title="Phim Hài" idSection="comedy" />
      <GoToTop
        onClick={() => handleScrollToTop()}
        style={{ visibility: `${scrollY > 600 ? "visible" : "hidden"}` }}
      >
        <BsFillArrowUpCircleFill />
      </GoToTop>
    </>
  );
}

export default Content;

const GoToTop = styledComponents.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 50px;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
    cursor:pointer;
  }
  @media screen and (max-width: 600px) {
    right: 40px;
  }
`;
