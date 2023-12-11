import React, { useContext } from "react";
import Heading from "../components/Heading";
import noPoster from "../assets/no-poster.png";
import { MovieCard } from "../components/MovieCard";
import { GlobalContext } from "../context/GlobalState";

const Favorite = () => {
  const { favorites } = useContext(GlobalContext);
  const filteredFavorites = favorites.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  return (
    <section className="mt-10">
      <article className="w-5/6 mx-auto">
        <Heading title="Favorite" />
        <div className="flex flex-wrap gap-5 mt-10 lg:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-between">
            {filteredFavorites.map((item) => {
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
        </div>
      </article>
    </section>
  );
};

export default Favorite;
