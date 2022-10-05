import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
import { useViewport } from "../../hooks";
import { getSearchMovies, setMovieDetails } from "../../store/actions";

function SearchMovies() {
  const [windowDimensions] = useViewport();
  const { searchMovies } = useSelector((state) => state.infoMovies);
  const location = useLocation();
  const keyword = location.search.split("?keyword=")[1];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (keyword) {
      dispatch(getSearchMovies(keyword));
    }
  }, [dispatch, keyword]);
  return (
    <SearchPane>
      {searchMovies && searchMovies.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridTemplateColumns: `repeat(${
              windowDimensions.width > 1200
                ? 5
                : windowDimensions.width > 992
                ? 4
                : windowDimensions.width > 768
                ? 3
                : windowDimensions.width > 600
                ? 2
                : 1
            },auto)`,
          }}
        >
          {searchMovies.map((movie, index) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              return (
                <div
                  className="movieItem"
                  key={index}
                  onClick={() => {
                    dispatch(setMovieDetails(movie.id));
                    navigate("/xemphim/info");
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt={movie.title || movie.name}
                  />
                  <span>{movie.title || movie.name}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <NotFound>
          <h1>
            Nếu không thấy phim cần tìm, hãy thử{" "}
            <a href="https://www.google.com/?hl=vi">tìm với Google</a>
          </h1>
        </NotFound>
      )}
    </SearchPane>
  );
}

export default SearchMovies;

const SearchPane = styledComponents.div`
    width:100%;
    padding-top:80px;
    background:var(--color-background);
    transition:all 0.3s linear;

    .searchContent {
        padding:40px 60px;
        display:grid;
        gap:16px;

        &:hover .movieItem {
            opacity: 0.7;
          }
          .movieItem {
            position: relative;
            max-width: 400px;
            width: 100%;
            height: 200px;
            margin: 20px 0;
            border-radius: 12px;
            overflow: hidden;
            transform: scale(1);
            transition: all 0.3s ease;
            cursor:pointer;
            &:hover {
              transform: scale(1.2);
              z-index: 10;
              opacity: 1;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            span {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              text-align: center;
              padding: 4px;
              background: rgba(0, 0, 0, 0.5);
              color: var(--color-white);
        }    }
    }
`;

const NotFound = styledComponents.div`
    padding:5rem 8rem;
    color:var(--color-white);

    a{
        color:#428BCA;
        text-decoration:underline;
    }
`;
