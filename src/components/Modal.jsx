import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./modal.css";

const Modal = ({ movie, onClick }) => {
  const navigate = useNavigate();
  const stored_data = localStorage.getItem("data");
  const initialData = stored_data ? JSON.parse(stored_data) : {};

  const [persons, setPersons] = useState(1);
  const booking = stored_data
    ? [
        ...initialData?.bookings,
        {
          name: movie.show.name,
          time: movie.show.schedule.days,
          image: movie.show.image.medium,
          language: movie.show.language,
          persons,
        },
      ]
    : [
        {
          name: movie.show.name,
          time: movie.show.schedule?.days,
          image: movie.show.image?.medium,
          language: movie.show?.language,
          persons,
        },
      ];
  const checkout = () => {
    localStorage.setItem(
      "data",
      JSON.stringify({
        bookings: booking,
      })
    );
    onClick();
    navigate("/bookings");
  };

  return (
    <div className="modal_container">
      <div className="backdrop" onClick={onClick}></div>
      <div className="innerContainer">
        <p className="header_summary">Details</p>
        <div className="showw">
          <img className="image_show" src={movie.show.image.medium} />
          <div>
            <p>{movie.show.name}</p>
            <p>{movie.show.language}</p>
          </div>
        </div>
        <div className="inputs">
          <label>No. of Persons</label>
          <input
            type="number"
            value={persons}
            onChange={(e) => setPersons(e.target.value)}
          />
        </div>
        <button className="btn" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Modal;
