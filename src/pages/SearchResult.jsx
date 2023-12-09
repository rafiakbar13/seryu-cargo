import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import InfiniteScroll from "react-infinite-scroll-component";
import noPoster from "../assets/no-poster.png";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/movie?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/movie?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <section className="container py-8 mx-auto">
      {loading && (
        <h1 className="text-2xl font-bold text-center">Loading...</h1>
      )}
      {!loading && (
        <div className="flex flex-col w-5/6 mx-auto">
          {data?.results.length > 0 ? (
            <>
              <div className="mb-4 text-2xl font-bold">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<div className="text-center">Loading...</div>}
              >
                {data?.results.map((item) => {
                  if (item.media_type === "person") return null;
                  const releaseYear = item.release_date
                    ? new Date(item.release_date).getFullYear()
                    : "";
                  return (
                    <Link to={`/movie/${item.id}`} key={item.id}>
                      <div className="bg-[#050E12] rounded-lg overflow-hidden">
                        <img
                          src={
                            item.poster_path
                              ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                              : noPoster
                          }
                          alt={item.title}
                          className="w-full rounded-lg"
                        />
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
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="text-2xl font-bold">Sorry, Results not found</span>
          )}
        </div>
      )}
    </section>
  );
};

export default SearchResult;
