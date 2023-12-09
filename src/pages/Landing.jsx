import React from "react";
import Heading from "../components/Heading";
import NowPlaying from "./nowPlaying/NowPlaying";
import TopRated from "./topRated/TopRated";

const Landing = () => {
  return (
    <>
      <NowPlaying />
      <TopRated />
    </>
  );
};

export default Landing;
