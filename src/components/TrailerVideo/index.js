import React, { useEffect } from "react";
import Iframe from "react-iframe";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styledComponents from "styled-components";
import { RESET_SEARCH_MOVIES_ } from "../../store/type";

function TrailerVideo() {
  const params = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname.slice(1, location.pathname.lastIndexOf("/"));
  let urlWatch = "";
  if (path == "watch-movie") {
    urlWatch = `https://v2.vidsrc.me/embed/${params.id}`;
  } else if (path === "watch-trailer") {
    urlWatch = `https://www.youtube.com/embed/${params.key}`;
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch({ type: RESET_SEARCH_MOVIES_ });
  }, []);
  return (
    <InfoMovie>
      <div className="iframe">
        <Iframe
          src={urlWatch}
          width="640px"
          height="320px"
          id="myFrame"
          className=""
          display="block"
          position="relative"
          allowFullScreen
          frameBorder={0}
        />
      </div>
    </InfoMovie>
  );
}

export default TrailerVideo;

const InfoMovie = styledComponents.div`
  position: relative;
  padding-top: 56.25%;
  width:100%;
  background:var(--color-background);

  .iframe {
    position:  absolute;
    top: 80px;
    left: 80px;
    right: 80px;
    bottom: 80px;
    @media only screen and (max-width: 600px) {
      left: 16px;
    right: 16px;
    bottom: 16px;
    }

    Iframe {
      width:100%;
      height:100%;
    }
  }

`;
