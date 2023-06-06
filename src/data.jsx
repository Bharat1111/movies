import { createContext, useState } from "react";

export const Movies_Data = createContext(null);
const Context = ({ children }) => {
  const [movies, setMovies] = useState(null);

  return (
    <Movies_Data.Provider value={{ movies, setMovies }}>
      {children}
    </Movies_Data.Provider>
  );
};

export default Context;
