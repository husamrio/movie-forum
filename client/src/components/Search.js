import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search tv show, movies, animations..." onChange={handleSearch} />
    </div>
  );
}

export default Search;

