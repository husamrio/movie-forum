import React from "react";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, vote_average, overview }) => (
  <div className="movie">


    <div className="movie-header">
    <img src={IMG_PATH + poster_path} alt={title} />
    </div>
    
  </div>
);

export default Movie;
