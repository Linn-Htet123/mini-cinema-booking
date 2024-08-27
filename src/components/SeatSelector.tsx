import React, { useState } from "react";
import classNames from "classnames";
import "./SeatSelector.scss";
import { Movie } from "../interfaces/movies";

type SeatSelectorProps = {
  selectedMovie: Movie;
};

const SeatSelector: React.FC<SeatSelectorProps> = ({ selectedMovie }) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const isSeatSelected = (seatId: string): boolean =>
    selectedSeats.includes(seatId);

  const isSeatBooked = (seatId: string): boolean =>
    selectedMovie !== null && selectedMovie.bookedSeats.includes(seatId);

  return (
    <div className="seat-selector">
      <div className="seat-grid">
        {["A", "B", "C", "D", "E"].map((seat, rowIndex) => (
          <div key={rowIndex + seat.length + seat} className="seat-row">
            {Array.from({ length: 7 }).map((_, colIndex) => {
              const seatId = `${seat}${colIndex + 1}`;
              return (
                <div
                  key={seatId}
                  className={classNames("seat", {
                    selected: isSeatSelected(seatId),
                    booked: isSeatBooked(seatId),
                  })}
                  onClick={() =>
                    !isSeatBooked(seatId) && handleSeatClick(seatId)
                  }
                >
                  {seatId}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="seat-info">
        <div>
          <p>Total Price: ${selectedSeats.length * selectedMovie.price}</p>
        </div>
        <div className="checkout-btn">Check out</div>
      </div>
    </div>
  );
};

export default SeatSelector;
