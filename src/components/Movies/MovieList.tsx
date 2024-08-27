import React from "react";
import { useMovies } from "./useMovies";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const MovieList = React.memo(() => {
  const { movies } = useMovies();
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <MovieCard {...movie} />
        </div>
      ))}
    </div>
  );
});

export default MovieList;
