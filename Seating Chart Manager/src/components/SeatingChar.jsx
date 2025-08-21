import { useState } from "react";
import "../App.css";

const rows = 5;
const cols = 6;

export default function SeatingChartManager() {
  const [seats, setSeats] = useState(
    Array.from({ length: rows }, (_, r) =>
      Array.from({ length: cols }, (_, c) => ({
        id: `${String.fromCharCode(65 + r)}${c + 1}`,
        reserved: false,
      }))
    )
  );

  const toggleSeat = (rowIndex, colIndex) => {
    setSeats((prev) =>
      prev.map((row, r) =>
        row.map((seat, c) =>
          r === rowIndex && c === colIndex
            ? { ...seat, reserved: !seat.reserved }
            : seat
        )
      )
    );
  };

  const resetSeats = () => {
    setSeats((prev) =>
      prev.map((row) => row.map((seat) => ({ ...seat, reserved: false })))
    );
  };

  const reservedSeats = seats.flat().filter((seat) => seat.reserved).length;
  const totalSeats = rows * cols;
  const availableSeats = totalSeats - reservedSeats;

  return (
    <div className="seating-container">
      <h2>🎟 Seating Chart Manager</h2>

      <div className="seat-summary">
        <span>Total: {totalSeats}</span>
        <span>Reserved: {reservedSeats}</span>
        <span>Available: {availableSeats}</span>
      </div>

      <div className="seating-grid">
        {seats.map((row, rIdx) => (
          <div className="seat-row" key={rIdx}>
            {row.map((seat, cIdx) => (
              <div
                key={seat.id}
                className={`seat ${seat.reserved ? "reserved" : "available"}`}
                onClick={() => toggleSeat(rIdx, cIdx)}
                title={`Seat ${seat.id}`}
                aria-label={`Seat ${seat.id} ${
                  seat.reserved ? "Reserved" : "Available"
                }`}
              >
                {seat.id}
              </div>
            ))}
          </div>
        ))}
      </div>

      <button className="reset-btn" onClick={resetSeats}>
        Reset All
      </button>

      <div className="legend">
        <span className="legend-box available"></span> Available
        <span className="legend-box reserved"></span> Reserved
      </div>
    </div>
  );
}
