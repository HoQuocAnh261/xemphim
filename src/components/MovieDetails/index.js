import moment from "moment";
import React, { useEffect } from "react";
import { BiMoviePlay } from "react-icons/bi";
import { FaTrailer } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useViewport } from "../../hooks";
import { getMovieTrailer, setMovieDetails } from "../../store/actions";
import Button from "../Button";

function MovieDetails(props) {
  const { movie } = props;
  const dispatch = useDispatch();
  const params = useParams();
  const [windowDimensions] = useViewport();
  const { width } = windowDimensions;

  const urlBgImage = width > 600 ? movie?.backdrop_path : movie?.poster_path;

  const { movieTrailer } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(setMovieDetails(params.id));
    dispatch(getMovieTrailer(params.id));
  }, [dispatch, params.id]);

  let arrMovieGenres = "";
  movie?.genres.forEach((genre) => {
    arrMovieGenres += genre.name + ", ";
  });

  arrMovieGenres = arrMovieGenres.substring(0, arrMovieGenres.length - 2);
  return (
    <>
      <MovieDetailsWrapper>
        <div
          className="container"
          style={
            movie
              ? {
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${urlBgImage})`,
                  backgroundSize: "cover",
                }
              : {}
          }
        >
          <div className="infoMovie">
            <h1 className="title">{movie && (movie.title || movie.name)}</h1>
            <p className="statistical">
              <span className="rating">
                Điểm IMDb:{" "}
                <strong className="ratingScores">
                  {movie && Number(movie.vote_average).toFixed(1)}
                </strong>
              </span>
              <span className="popularity">
                Thể Loại: {movie && arrMovieGenres}
              </span>
            </p>
            <p className="releaseDate">
              Ngày phát hành:{" "}
              {movie &&
                (moment(movie.release_date).format("DD/MM/YYYY") ||
                  moment(movie.first_air_date).format("DD/MM/YYYY"))}
            </p>

            <p className="episode">
              {movie &&
                (movie.number_of_episodes
                  ? " Episodes: " + movie.number_of_episodes
                  : "") &&
                (movie.number_of_seasons
                  ? " Seasons: " + movie.number_of_seasons
                  : "")}
            </p>
            <p className="overview">{movie && movie.overview}</p>
          </div>

          <div className="btnContainer">
            <div className="btnItem">
              <Button
                link={`/watch-trailer/${movieTrailer && movieTrailer[0]?.key}`}
                bgColor="#5BC0DE"
                color="#FFFFFF"
              >
                <FaTrailer /> Xem Trailer
              </Button>
            </div>

            <div className="btnItem">
              <Button
                link={`/watch-movie/${movie && movie.id}`}
                bgColor="#DD003F"
                color="#FFFFFF"
              >
                <BiMoviePlay /> Xem Phim
              </Button>
            </div>
          </div>
        </div>
      </MovieDetailsWrapper>
    </>
  );
}

export default MovieDetails;
const MovieDetailsWrapper = styled.div`
  .container {
    position: relative;
    width: 100%;
    height: 90vh;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%, transparent);
    @media only screen and (max-width: 1184px) {
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.95) 40%,
        rgba(0, 0, 0, 0.733),
        transparent
      );
    }
    @media only screen and (max-width: 980px) {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 50%, transparent);
    }
    @media only screen and (max-width: 600px) {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.88) 60%, transparent);
    }
    .infoMovie {
      width: 50%;
      height: 100%;
      padding-left: 46px;
      color: #fff;
      font-size: 20px;
      padding-top: 40px;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.88) 60%, transparent);
      @media only screen and (max-width: 600px) {
        font-size: 16px;
        width: 80%;
        padding-left: 12px;
      }
      .title {
        margin-top: 30px;
      }
      .statistical {
        margin-top: 20px;
        display: flex;
        .rating {
          color: var(--color-green-modal);

          .ratingScores {
            color: black;
            border-radius: 4px;
            background-color: #e3b71e;
            padding: 4px;
          }
        }
        .popularity {
          margin-left: 12px;
          color: yellow;
        }
      }
      .releaseDate,
      .runtime,
      .episode {
        margin-top: 12px;
      }
      .overview {
        margin-top: 20px;
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.4;
        font-size: 18px;
        height: 20vh;
        overflow: hidden;
        @media only screen and (max-width: 600px) {
          font-size: 14px;
        }
      }
    }

    .btnContainer {
      position: absolute;
      bottom: 64px;

      display: flex;
      justify-content: space-around;
      align-items: center;
      @media only screen and (max-width: 600px) {
        bottom: 24px;
      }

      .btnItem {
        margin-left: 24px;
      }
    }
  }
`;
