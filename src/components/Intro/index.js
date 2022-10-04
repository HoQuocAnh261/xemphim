import React, { useState } from "react";
import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import styled from "styled-components";

function Intro(props) {
  const [isMuted, setIsMuted] = useState(false);

  const isMutedHandler = () => setIsMuted((prev) => !prev);
  return (
    <IntroContainer>
      <ReactPlayer
        playing={true}
        width="100%"
        height="100%"
        controls={true}
        loop={true}
        volume={1}
        muted={isMuted}
        url="https://vimeo.com/276483121"
        className="videoIntro"
      />
      <div className="infoIntro">
        <h1 className="headingIntro">부산행 TRAIN TO BUSAN</h1>
        <p className="overviewIntro">
          Client : Feelgood Entertainment Trailer : Train To Busan Post
          Production Coordinator : Angel Ballas Editor : Alexis Quantas
        </p>
      </div>
      {!isMuted ? (
        <VscUnmute className="btnVolume" onClick={isMutedHandler} />
      ) : (
        <VscMute className="btnVolume" onClick={isMutedHandler} />
      )}
      <div className="fadeBottom"></div>
    </IntroContainer>
  );
}

export default Intro;

const IntroContainer = styled.div`
  background-color: var(--color-background);
  color: var(--color-white);
  position: relative;
  padding-top: 56%;

  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }

  .infoIntro {
    position: absolute;
    top: 140px;
    left: 30px;

    @media screen and (max-width: 800px) {
      top: 120px;
      left: 25px;
    }
    @media screen and (max-width: 600px) {
      top: 100px;
      left: 15px;
    }

    .headingIntro {
      font-size: 60px;
      transition: all 0.3s;
      @media screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media screen and (max-width: 600px) {
        font-size: 24px;
      }
    }
    .overviewIntro {
      max-width: 550px;
      width: 100%;
      line-height: 1.3;
      padding-top: 25px;
      font-size: 18px;
      @media screen and (max-width: 800px) {
        font-size: 16px;
      }
      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }

  .btnVolume {
    z-index: 100;
    position: absolute;
    top: 50%;
    right: 10%;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid #bbb;
    color: #bbb;
    padding: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: scale(1);

    &:hover {
      color: white;
      transform: scale(1.2);
      background-color: rgba(211, 211, 211, 0.18);
    }

    @media screen and (max-width: 800px) {
      height: 30px;
      width: 30px;
      padding: 4px;
    }
    @media screen and (max-width: 600px) {
      height: 20px;
      width: 20px;
      padding: 2px;
    }
  }

  .fadeBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;

    background-image: linear-gradient(
      180deg,
      rgba(15, 15, 15, 0.6),
      rgb(17, 17, 17),
      transparent
    );
  }
`;
