import React, { useEffect } from "react";
import Content from "../components/Content";
import Intro from "../components/Intro";
import Menu from "../components/Menu";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Intro />
      <Content />
      <Menu />
    </div>
  );
}

export default Home;
