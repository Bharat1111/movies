import React from "react";

import "./booking.css";

const Booking = () => {
  const data = localStorage.getItem("data");
  const res = JSON.parse(data);
  const bookings = res?.bookings;
  if (!bookings) {
    return (
      <div className="none">
        <p>No Bookings</p>
      </div>
    );
  }
  return (
    <div className="booking_container">
      <p>Bookings</p>
      <div className="bookings">
        {bookings.map((booking) => (
          <div key={booking.name} className="booking">
            <img src={booking?.image} />
            <div>
              <p>{booking?.name}</p>
              <p>{booking?.language}</p>
            </div>
            <p>{booking?.time}</p>
            <div>
              <p>Persons</p>
              <p>{booking?.persons}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
