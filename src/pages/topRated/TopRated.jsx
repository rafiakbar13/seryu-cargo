import React from "react";
import Heading from "../../components/Heading";
import useFetch from "../../hooks/useFetch";
import noPoster from "../../assets/no-poster.png";
import { MovieCard } from "../../components/MovieCard";
const TopRated = () => {
  const { data, loading } = useFetch("/movie/top_rated");
  const skeletonItem = () => <div className="w-52 h-80 skeleton"></div>;
  return (
    <section className="mt-14">
      <article className="w-5/6 mx-auto">
        <Heading title="Top Rated" />
        <div className="flex flex-wrap gap-5 mt-10 lg:justify-between">
          {loading ? (
            Array(20)
              .fill()
              .map((item, index) => skeletonItem(index))
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-between">
              {data?.results.map((item) => {
                const releaseYear = item.release_date
                  ? new Date(item.release_date).getFullYear()
                  : "";

                return (
                  <MovieCard
                    item={item}
                    noPoster={noPoster}
                    releaseYear={releaseYear}
                    key={item.id}
                  />
                );
              })}
            </div>
          )}
        </div>
      </article>
    </section>
  );
};

export default TopRated;
