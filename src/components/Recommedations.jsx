import React from "react";
import Heading from "./Heading";
import useFetch from "../hooks/useFetch";
import Carousel from "./Carousel";
const Recommedations = ({ id }) => {
  const { data, loading } = useFetch(`/movie/${id}/recommendations`);
  return (
    <section className="mt-10">
      <article className="w-5/6 mx-auto">
        <Heading title="Recommendations" />
        <Carousel data={data?.results} loading={loading} />
      </article>
    </section>
  );
};

export default Recommedations;
