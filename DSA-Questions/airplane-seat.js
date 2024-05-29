function getSeatType(seatNumber) {
  // Define seat positions
  const seatTypes = ["window", "middle", "aisle", "aisle", "middle", "window"];

  const seatsPerRow = 6;

  // Determine The Row Index & Seat Index
  let seatIndex = (seatNumber - 1) % seatsPerRow;

  // Determine Seat Type
  let seatType = seatTypes[seatIndex];

  // Return The Seat Type
  return seatType;
}

// Example Usage:
console.log(getSeatType(1)); // "window"
console.log(getSeatType(2)); // "middle"
console.log(getSeatType(3)); // "aisle"
console.log(getSeatType(4)); // "aisle"
console.log(getSeatType(5)); // "middle"
console.log(getSeatType(6)); // "window"
