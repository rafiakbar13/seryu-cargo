import React from "react";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
export function MovieCard({ item, noPoster, releaseYear }) {
  return (
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
          <FaRegBookmark className="inline-block w-6 h-6 text-white " />
          {/* Heart Icon */}
          <FaRegHeart className="inline-block w-6 h-6 ml-2 text-white" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate text-secondary">
            {item.title}
          </h3>
          <p className="text-tertiary font-normal text-[12px]">{releaseYear}</p>
        </div>
      </div>
    </Link>
  );
}
