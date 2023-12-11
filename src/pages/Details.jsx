import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Recommedations from "../components/Recommedations";
import CircleRating from "../components/CircleRating";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { IoMdBookmark, IoIosHeart } from "react-icons/io";
import { GlobalContext } from "../context/GlobalState";
const Details = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`/movie/${id}`);
  if (!data) {
    return null;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  const {
    addMovieToFavorites,
    favorites,
    addMovieToWatchList,
    watchList,
    removeMovieFromWatchList,
    removeMovieFromFavorites,
  } = useContext(GlobalContext);

  const isFavorite = favorites.some((favorite) => favorite.id === data.id);
  const isWatch = watchList.some((watch) => watch.id === data.id);
  const genres = data.genres.map((item) => item.name).join(", ");

  // convert minutes to hours
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const releaseYear = data.release_date
    ? new Date(data.release_date).getFullYear()
    : "";

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    if (isWatch) {
      removeMovieFromWatchList(data.id);
    } else {
      addMovieToWatchList(data);
    }
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (isFavorite) {
      removeMovieFromFavorites(data.id);
    } else {
      addMovieToFavorites(data);
    }
  };

  return (
    <section>
      <article className="relative">
        <div className="h-[700px] md:h-[500px]">
          <img
            src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
            alt=""
            className="object-cover w-full h-full bg-no-repeat bg-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="absolute w-5/6 p-8 space-y-8 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
          <div className="flex flex-col md:flex-row gap-x-2 sm:gap-x-4">
            <div className="flex-shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                alt=""
                className="object-contain  h-full rounded-md w-36 sm:w-48 md:max-w-[240px]"
              />
            </div>
            <div className="pt-5 space-y-3">
              <h1 className="text-lg font-bold uppercase md:text-4xl font-poppins">
                {data.original_title} ({releaseYear})
              </h1>
              {/* infor */}
              <div className="flex items-center gap-x-2">
                <p className="font-normal text-[14px]">{data.release_date}</p>
                <svg height="5" width="5">
                  <circle cx="2.5" cy="2.5" r="2" fill="white" />
                </svg>
                <p className="font-normal text-[14px]">{genres}</p>
                <svg height="5" width="5">
                  <circle cx="2.5" cy="2.5" r="2" fill="white" />
                </svg>
                <p className="font-normal text-[14px]">
                  {toHoursAndMinutes(data.runtime)}
                </p>
              </div>
              {/* Rating */}
              <div className="flex items-center gap-x-7">
                <div className="flex items-center gap-x-2">
                  <CircleRating rating={data.vote_average.toFixed(1)} />
                  <span className="w-5 text-white text-xs font-normal font-['Roboto']">
                    User Score
                  </span>
                </div>
                <div className="flex items-center gap-x-3">
                  {/* Bookmark Icon */}
                  <button onClick={handleBookmarkClick}>
                    {isWatch ? (
                      <IoMdBookmark className="inline-block w-6 h-6 text-white " />
                    ) : (
                      <FaRegBookmark className="inline-block w-6 h-6 text-white " />
                    )}
                  </button>
                  {/* Heart Icon */}
                  <button onClick={handleFavoriteClick}>
                    {isFavorite ? (
                      <IoIosHeart className="inline-block w-6 h-6 ml-2 text-white " />
                    ) : (
                      <FaRegHeart className="inline-block w-6 h-6 ml-2 text-white" />
                    )}
                  </button>
                </div>
              </div>
              {/* Overview */}
              <div>
                <h1 className="text-sm italic font-normal text-white font-roboto">
                  {data.tagline}
                </h1>
                <div className="pt-3 pb-2">
                  <h1 className="text-sm font-bold text-white font-roboto">
                    Overview
                  </h1>
                  <p>{data.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Recommedations id={id} />
    </section>
  );
};

export default Details;
