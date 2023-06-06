import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { Movies_Data } from "./data.jsx";
import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";
import Booking from "./routes/Booking";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const fetchData = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    return data;
  };
  const { setMovies } = useContext(Movies_Data);
  useEffect(() => {
    fetchData().then((res) => setMovies(res));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route path="/bookings" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
