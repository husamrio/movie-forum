import Moviecard from "./Moviecard";
import "./Movie.css";
// import { useEffect, useState } from "react";
// import Search from "./Search";

function Movielist({movies}) {

  return (
    <div className="movies">
      <div className="main">

      {movies.map((movie) => (
        <Moviecard key={movie.id} {...movie}/>
      ))}
      </div>
    </div>
  );
}

export default Movielist;