import React, { useContext } from "react";
import MovieList from "../components/MovieList";
import { Movies_Data } from "../data";

import "./home.css";

const Home = () => {
  const { movies } = useContext(Movies_Data);
  if (!movies) return <div>Loading...</div>;
  return (
    <div className="container">
      {movies.map((movie) => (
        <MovieList movie={movie} key={movie.show.id} />
      ))}
    </div>
  );
};

export default Home;
