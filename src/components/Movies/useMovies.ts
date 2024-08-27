import { useEffect, useState } from "react";
import { Movie } from "../../interfaces/movies";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch("/book.json");
      const data = await response.json();
      setMovies(data.movies);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  
  return {
    movies,
  };
};
