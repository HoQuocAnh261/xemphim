import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { useParams } from "react-router-dom";

function TrailerVideo() {
  const params = useParams();

  return (
    <>
      <Iframe
        // url={`https://www.youtube.com/embed/${
        //   movieTrailer[0] && movieTrailer[0].key
        // }`}
        url={`https://v2.vidsrc.me/embed/${params.id}`}
        width="640px"
        height="320px"
        id="myFrame"
        className=""
        display="block"
        position="relative"
        allowFullScreen
      />
    </>
  );
}

export default TrailerVideo;
