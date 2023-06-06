import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./modal.css";

const Modal = ({ movie, onClick }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const initialData = user ? JSON.parse(user) : {};
  const [data, setData] = useState(initialData);
  const booking = user
    ? [
        ...initialData?.bookings,
        {
          name: movie.show.name,
          time: movie.show.schedule.days,
          image: movie.show.image.medium,
          language: movie.show.language,
        },
      ]
    : [
        {
          name: movie.show.name,
          time: movie.show.schedule?.days,
          image: movie.show.image?.medium,
          language: movie.show?.language,
        },
      ];
  const checkout = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...data,
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
          <label>Name</label>

          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, Name: e.target.value }))
            }
            value={data.Name}
            type="text"
          />

          <label>No. of Persons</label>
          <input
            type="number"
            value={data.persons}
            onChange={(e) =>
              setData((prev) => ({ ...prev, persons: e.target.value }))
            }
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
