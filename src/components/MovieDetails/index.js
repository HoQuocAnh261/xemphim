import moment from "moment";
import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useViewport } from "../../hooks";
import { setMovieDetails } from "../../store/actions";
import * as Types from "../../store/type";
import Button from "../Button";

function MovieDetails(props) {
  const { movie } = props;
  const dispatch = useDispatch();
  const params = useParams();
  const [windowDimensions] = useViewport();

  const { width } = windowDimensions;

  const urlBgImage = width > 600 ? movie?.backdrop_path : movie?.poster_path;

  useEffect(() => {
    dispatch(setMovieDetails(params.id));
  }, [dispatch, params.id]);

  return (
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
                {movie && movie.vote_average}
              </strong>
            </span>
            <span className="popularity">
              Thể Loại:{" "}
              {movie &&
                movie.genres.map((item, index) => {
                  return <span key={index}>{item.name}, </span>;
                })}
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

        <div className="btnWatchMovie">
          <Button
            link={`/watch-movie/${movie && movie.id}`}
            bgColor="#DD003F"
            color="#FFFFFF"
          >
            Xem Phim
          </Button>
        </div>
      </div>
    </MovieDetailsWrapper>
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
      width: 100%;
    }
    @media only screen and (max-width: 600px) {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.88) 60%, transparent);
    }
    .infoMovie {
      width: 65%;
      height: 100%;
      padding-left: 24px;
      color: #fff;
      font-size: 20px;
      padding-top: 30px;
      @media only screen and (max-width: 600px) {
        font-size: 16px;
        width: 80%;
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
        @media only screen and (max-width: 600px) {
          font-size: 14px;
        }
      }
    }

    .btnWatchMovie {
      position: absolute;
      bottom: 80px;
      right: 80px;
    }
  }
`;
