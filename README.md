# Procedural Map Generation Script

## Overview

The Procedural Map Generation Script is a tool for generating random map layouts consisting of rooms within a grid. It uses a procedural approach to create dynamic map designs, making it suitable for various applications, such as game development, simulations, or procedural content generation.

## Features

- Generates random maps with rooms and corridors.
- Supports adjustable map dimensions, room sizes, and the number of rooms.
- Ensures rooms are placed with proper spacing and do not overlap.
- Outputs the generated map as text.

## Usage

1. Clone or download the repository to your local machine.

2. Open the script in your preferred code editor.

3. Customize the following constants to configure map generation:

   - `mapWidth`: Width of the map grid.
   - `mapHeight`: Height of the map grid.
   - `minRoomSize`: Minimum size of a room.
   - `maxRoomSize`: Maximum size of a room.
   - `maxRooms`: Maximum number of rooms.

4. Run the script using a JavaScript runtime environment (e.g., Node.js):

   ```bash
   node map-generator.js
   ```
