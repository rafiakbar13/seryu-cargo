import React, { useContext } from "react";
import Heading from "../components/Heading";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../components/MovieCard";
const Watchlist = () => {
  const { watchList } = useContext(GlobalContext);
  return (
    <section className="mt-10">
      <article className="w-5/6 mx-auto">
        <Heading title="Watchlist" />
        {watchlist.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5">
            {watchList.map((watch) => (
              <MovieCard watch={watch} key={item.id} />
            ))}
          </div>
        ) : (
          <p className="mt-5 text-center text-white">
            Your watchlist is empty. Add some movies to watchlist.
          </p>
        )}
      </article>
    </section>
  );
};

export default Watchlist;
