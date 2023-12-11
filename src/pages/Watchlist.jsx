import React, { useContext } from "react";
import Heading from "../components/Heading";
import { MovieCard } from "../components/MovieCard";
import noPoster from "../assets/no-poster.png";
import { GlobalContext } from "../context/GlobalState";
const Watchlist = () => {
  const { watchList } = useContext(GlobalContext);
  const filteredWatchlist = watchList.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  return (
    <section className="mt-10">
      <article className="w-5/6 mx-auto">
        <Heading title="Watchlist" />
        <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-between">
          {filteredWatchlist.map((item) => {
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
      </article>
    </section>
  );
};

export default Watchlist;
