import React from "react";
import { Link } from "react-router-dom";

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
                <Link to={`/movie/${item.id}`}>
                  <div
                    className="flex-none w-52 mr-5 bg-[#050E12] rounded-lg"
                    key={item.id}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                      alt={item.title}
                      className="rounded-lg"
                    />
                    <div className="flex flex-col items-start px-3 py-5 overflow-hidden text-ellipsis">
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
    </section>
  );
};

export default Carousel;
