import React from "react";
import { Link } from "react-router-dom";

import "./movieList.css";

const Movie = ({ movie }) => {
  const { show } = movie;
  return (
    <div className="movie_container">
      <Link to={`/movie/${show.id}`}>
        <img className="movie_image" src={show.image.medium} />
      </Link>
      <div className="movie_body">
        {show.rating.average ? (
          <div className="rating">
            <div className={"star"}></div>
            {show.rating.average}
          </div>
        ) : (
          <p>0</p>
        )}
        <div className="rest">
          <p className="movie_name">{show.name}</p>
          <p className="language">{show.language}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
