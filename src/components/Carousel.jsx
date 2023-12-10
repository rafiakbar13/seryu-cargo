import React from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "./MovieCard";
import noPoster from "../assets/no-poster.png";
const Carousel = ({ data, loading }) => {
  const skeletonItem = () => <div className="w-52 h-80 skeleton"></div>;

  return (
    <section className="py-4 mt-5 overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-300">
      <div className="flex space-x-3">
        {loading ? (
          Array(5)
            .fill()
            .map((item, index) => skeletonItem(index))
        ) : (
          <div className="flex">
            {data?.map((item) => {
              const releaseYear = item.release_date
                ? new Date(item.release_date).getFullYear()
                : "";

              return (
                <MovieCard
                  item={item}
                  noPoster={noPoster}
                  releaseYear={releaseYear}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Carousel;
