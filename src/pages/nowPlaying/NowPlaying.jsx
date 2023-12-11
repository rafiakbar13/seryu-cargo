import React from "react";
import Heading from "../../components/Heading";
import useFetch from "../../hooks/useFetch";
import Carousel from "../../components/Carousel";
const NowPlaying = () => {
  const { data, loading } = useFetch("/movie/now_playing");
  return (
    <section className="mt-10">
      <article className="w-5/6 mx-auto">
        <Heading title="Now Playing" />
        <Carousel data={data?.results} loading={loading} />
      </article>
    </section>
  );
};

export default NowPlaying;
