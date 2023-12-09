import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search"
        className="w-40 h-8 p-3 px-2 text-sm text-black bg-white rounded-md focus:outline-none"
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
      />
    </div>
  );
};

export default SearchInput;
