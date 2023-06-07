import React, { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import Modal from "../components/Modal";
import { Movies_Data } from "../data";
import "./MovieDetail.css";

const MovieDetail = () => {
  const { movies } = useContext(Movies_Data);
  const { movieId } = useParams();
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal((prev) => !prev);
  };

  if (!movies) return <div>Loading...</div>;

  let movie = movies?.find((movie) => movie.show.id === Number(movieId));
  let summary = movie?.show.summary.replace(/<[^>]+>/g, "");
  let { image, rating, schedule, status, name, genres, language } = movie?.show;

  return (
    // <div className="container">
    <div className="movie_detail_container">
      {openModal && <Modal movie={movie} onClick={openModalHandler} />}
      <img src={image.original} alt="movie image" />

      <div className="sub_container">
        <div className="heading">
          <p>{name}</p>
          {rating.average && (
            <div className="rating">
              <div className={"star"}></div>
              <p>{rating.average}/10</p>
            </div>
          )}
        </div>

        <div className="language">{language}</div>
        <div className="genres">
          {genres.map((genre) => (
            <span key={genre} className="genre">
              {genre}
            </span>
          ))}
        </div>
        <div className={"summary"}>
          <p>Summary</p>
          {summary}
        </div>
        {schedule.time && status === "Running" ? (
          <div className="show_head">
            <p>show time</p>
            <div className={"showTime"}>
              <div className={"shows"}>
                <p>{schedule.days}</p>
                <p>{schedule.time}</p>
              </div>
              <button className="btn" onClick={openModalHandler}>
                Book
              </button>
            </div>
          </div>
        ) : (
          <div className={"noShows"}>
            <p>NO SHOWS AVAILABLE</p>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};

export default MovieDetail;
