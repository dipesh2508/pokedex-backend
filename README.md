# Pokedex Backend

This project is a backend service that provides data for 151 Pokémon of the Kanto region (1st generation). It is created using Express and Node.js.

## Features

- Retrieve data for all 151 Kanto Pokémon.
- Retrieve data for individual Pokémon by their ID.

## Endpoints

### Get All Pokémon

- **URL:** `http://localhost:8000/pokemon`
- **Method:** `GET`
- **Description:** Returns data for all 151 Pokémon in the Kanto region.

### Get Individual Pokémon

- **URL:** `http://localhost:8000/pokemon/:id`
- **Method:** `GET`
- **Description:** Returns data for a specific Pokémon by their ID.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/pokedex-backend.git
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Run the project
   ```sh
    npm run dev
   ```

## Technologies Used

1. Node.js
2. Express
