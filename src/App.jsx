import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MoviePage from "./pages/MoviePage";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [movies, setMovies] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 

  const fetchMovies = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=654ce072`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]); 

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home movies={movies} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/MoviePage" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
