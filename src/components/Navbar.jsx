import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Home
      </Link>

      <Link className="link" to="/bookings">
        Movie Booking
      </Link>
    </div>
  );
};

export default Navbar;
