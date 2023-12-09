import React from "react";
import Heading from "../../components/Heading";
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
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
                  <Link to={`/movie/${item.id}`}>
                    <div
                      className="flex-none w-56 bg-[#050E12] rounded-lg"
                      key={item.id}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        alt={item.title}
                        className="rounded-lg"
                      />
                      <div className="flex flex-col items-start px-3 py-5 overflow-hidden truncate ">
                        <h3 className="text-lg font-semibold truncate text-secondary">
                          {item.title}
                        </h3>
                        <p className="text-tertiary font-normal text-[12px]">
                          {releaseYear}
                        </p>
                      </div>
                    </div>
                  </Link>
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
