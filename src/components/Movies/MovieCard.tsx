import React, { useState } from "react";
import "./MovieCard.css";
import { Movie } from "../../interfaces/movies";
import MovieDrawer from "../Drawer/Drawer";
import SeatSelector from "../SeatSelector";

const MovieCard: React.FC<Movie> = React.memo((movie) => {
  const { thumbNail, name, rating, cover, price } = movie;
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <MovieDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}>
        <div
          className="movie-cover"
          style={{ backgroundImage: `url(${cover})` }}
        ></div>
        <div className="movie-details">
          <h4 className="movie-name">{name}</h4>
          <p className="movie-price">Price: ${price}</p>
        </div>

        <SeatSelector selectedMovie={movie}/>
      </MovieDrawer>
      <div className="movie-card" onClick={() => toggleDrawer()}>
        <img src={thumbNail} alt={name} className="movie-thumbnail" />
        <div className="movie-info">
          <h3>{name}</h3>
          <p>Rating: {rating}/10</p>
        </div>
      </div>
    </div>
  );
});

export default MovieCard;
