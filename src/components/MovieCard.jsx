import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { IoMdBookmark, IoIosHeart } from "react-icons/io";
import { GlobalContext } from "../context/GlobalState";

export function MovieCard({ item, noPoster, releaseYear }) {
  const { addMovieToFavorites, favorites, addMovieToWatchList, watchList } =
    useContext(GlobalContext);

  const isFavorite = favorites.some((favorite) => favorite.id === item.id);
  const isWatch = watchList.some((watch) => watch.id === item.id);
  return (
    <section>
      <Link to={`/movie/${item.id}`} key={item.id}>
        <div className="relative bg-[#050E12] rounded-lg overflow-hidden flex-none w-56 mr-5 group">
          <img
            src={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                : noPoster
            }
            alt={item.title}
            className="w-full rounded-lg"
          />
          <div className="absolute p-4 transition-opacity duration-300 opacity-0 right-2 bottom-20 group-hover:opacity-100">
            {/* Bookmark Icon */}
            <button
              onClick={(e) => {
                e.preventDefault();
                addMovieToWatchList(item);
              }}
            >
              {isWatch ? (
                <IoMdBookmark className="inline-block w-6 h-6 text-white" />
              ) : (
                <FaRegBookmark className="inline-block w-6 h-6 text-white" />
              )}
            </button>
            {/* Heart Icon */}
            <button
              onClick={(e) => {
                e.preventDefault();
                addMovieToFavorites(item);
              }}
            >
              {isFavorite ? (
                <IoIosHeart className="inline-block w-6 h-6 ml-2 text-white" />
              ) : (
                <FaRegHeart className="inline-block w-6 h-6 ml-2 text-white" />
              )}
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold truncate text-secondary">
              {item.title}
            </h3>
            <p className="text-tertiary font-normal text-[12px]">
              {releaseYear}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}
