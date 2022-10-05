import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SmoothHorizontalScrolling } from "../../utils";
import { useViewport } from "../../hooks";
import { useDispatch } from "react-redux";
import { setMovieDetails } from "../../store/actions";
import { useNavigate } from "react-router-dom";

function MovieRow(props) {
  const { movies, title, isNetflix, idSection } = props;
  const sliderRef = useRef();
  const moviesRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [windowDimensions] = useViewport();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectMovie = (id) => {
    dispatch(setMovieDetails(id));
    navigate("/xemphim/info");
  };

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft)
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        moviesRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0)
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -moviesRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
  };

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);

  const onDragStart = (e) => {
    setDragDown(e.screenX);
    setIsDrag(true);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };
  return (
    <MovieContainer draggable="false" id={idSection}>
      <h2 className="heading">{title}</h2>
      <MoviesSlider
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length}, ${
                  windowDimensions.width > 1200
                    ? "360px"
                    : windowDimensions.width > 992
                    ? "300px"
                    : windowDimensions.width > 768
                    ? "250px"
                    : "200px"
                })`,
              }
            : {}
        }
      >
        {movies &&
          movies.map((movie, index) => {
            if (movie.backdrop_path && movie.poster_path !== null) {
              const imgUrl = isNetflix
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  key={index}
                  className="movieItem"
                  ref={moviesRef}
                  draggable="false"
                  onClick={() => handleSelectMovie(movie.id)}
                >
                  <img src={imgUrl} alt="" draggable="false" />
                  <div className="movieName">{movie.name || movie.title}</div>
                </div>
              );
            }
          })}
      </MoviesSlider>
      <div
        className={`btnLeft ${isNetflix && "isNetflix"}`}
        onClick={handleScrollLeft}
      >
        <FiChevronLeft />
      </div>
      <div
        className={`btnRight ${isNetflix && "isNetflix"}`}
        onClick={handleScrollRight}
      >
        <FiChevronRight />
      </div>
    </MovieContainer>
  );
}

export default MovieRow;

const MovieContainer = styled.div`
  position: relative;
  padding: 20px 20px 0;
  background-color: var(--color-background);
  color: var(--color-white);
  width: 100%;
  height: 100%;

  .heading {
    font-size: 18px;
    user-select: none;
  }

  .btnLeft,
  .btnRight {
    position: absolute;
    top: 50%;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);

    height: 50px;
    width: 40px;
    transform: translateY(-20%);
    display: flex;
    align-items: center;
    border-radius: 4px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      color: white;
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
    &.isNetflix {
      height: 100px;
      width: max-content;
    }
  }
  .btnLeft {
    left: 30px;
  }

  .btnRight {
    right: 30px;
  }
`;

const MoviesSlider = styled.div`
  display: grid;
  gap: 6px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  &:hover .movieItem {
    opacity: 0.5;
  }
  .movieItem {
    cursor: pointer;
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;
    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 10;
      -webkit-filter: brightness(1) !important;
      filter: brightness(1) !important;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .movieName {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 4px;
      background-color: rgba(0, 0, 0, 0.65);
      text-align: center;
      font-size: 14px;
    }
  }
`;
