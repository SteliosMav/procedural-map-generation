// Constants
const mapWidth = 80;
const mapHeight = 20;
const minRoomSize = 2;
const maxRoomSize = 6;
const maxRooms = 14;

// Calculate the maximum number of rooms that can fit
const maxRoomsPossible = Math.floor(
  (((mapWidth - 2) / (maxRoomSize + 4)) * (mapHeight - 2)) / (maxRoomSize + 4)
);

// Check if maxRooms is greater than the maximum possible
if (maxRooms > maxRoomsPossible) {
  console.error(
    `Error: Cannot generate ${maxRooms} rooms. Maximum possible rooms for this map size is ${maxRoomsPossible}.`
  );
  process.exit(1); // Exit the script with an error code
}

// Create an empty map filled with '#'
const map = Array.from({ length: mapHeight }, () => Array(mapWidth).fill("#"));

// Helper function to check if a room overlaps with existing rooms
function doesOverlap(room) {
  for (let y = room.y - 1; y < room.y + room.height + 1; y++) {
    for (let x = room.x - 1; x < room.x + room.width + 1; x++) {
      if (map[y] && map[y][x] !== "#") return true;
    }
  }
  return false;
}

// Generate and place rooms
const randomNumberOfRooms = Math.floor(Math.random() * (maxRooms + 1));
for (let roomNumber = 1; roomNumber <= randomNumberOfRooms; roomNumber++) {
  const roomWidth =
    Math.floor(Math.random() * (maxRoomSize - minRoomSize + 1)) + minRoomSize;
  const roomHeight =
    Math.floor(Math.random() * (maxRoomSize - minRoomSize + 1)) + minRoomSize;
  let x, y;

  // Ensure rooms are placed with proper spacing
  do {
    x = Math.floor(Math.random() * (mapWidth - roomWidth - 2)) + 2;
    y = Math.floor(Math.random() * (mapHeight - roomHeight - 2)) + 2;
  } while (doesOverlap({ x, y, width: roomWidth, height: roomHeight }));

  // Place the room by updating the map
  for (let i = y; i < y + roomHeight; i++) {
    for (let j = x; j < x + roomWidth; j++) {
      map[i][j] = ".";
    }
  }

  // Number the room
  const roomNumberArray = roomNumber.toString().split("");
  roomNumberArray.forEach((roomNumberChar, idx) => {
    map[y][x + idx] = roomNumberArray[idx];
  });
}

const mapText = map.map((row) => row.join("")).join("\n");

console.log(mapText);
