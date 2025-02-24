# Coffee REST API

A simple REST API for managing coffee products. Built with Node.js and Express.

## Features

- CRUD operations for coffee products
- RESTful endpoint structure
- JSON response format
- In-memory data storage

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sgrisak/coffee-rest-api.git
cd coffee-rest-api
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node app.js
```

The server will start running at `http://localhost:3000`.

## API Documentation

### Base URL

All endpoints are relative to: `http://localhost:3000/api`

### Endpoints

#### Get All Coffees

- **URL:** `/coffees`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content Example:**
    ```json
    [
      {
        "id": 1,
        "name": "Ethiopian Yirgacheffe",
        "roast": "Light",
        "price": 16.99,
        "origin": "Ethiopia"
      },
      {
        "id": 2,
        "name": "Colombian Supremo",
        "roast": "Medium",
        "price": 14.99,
        "origin": "Colombia"
      }
    ]
    ```

#### Get Single Coffee

- **URL:** `/coffees/:id`
- **Method:** `GET`
- **URL Params:** `id=[integer]`
- **Success Response:**
  - **Code:** 200
  - **Content Example:**
    ```json
    {
      "id": 1,
      "name": "Ethiopian Yirgacheffe",
      "roast": "Light",
      "price": 16.99,
      "origin": "Ethiopia"
    }
    ```
- **Error Response:**
  - **Code:** 404
  - **Content:** `{ "message": "Coffee not found" }`

#### Create Coffee

- **URL:** `/coffees`
- **Method:** `POST`
- **Data Params:**
  ```json
  {
    "name": "Sumatra Mandheling",
    "roast": "Dark",
    "price": 15.99,
    "origin": "Indonesia"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:** Returns the created coffee object with ID

#### Update Coffee

- **URL:** `/coffees/:id`
- **Method:** `PUT`
- **URL Params:** `id=[integer]`
- **Data Params:** Any of the following fields:
  ```json
  {
    "name": "string",
    "roast": "string",
    "price": "number",
    "origin": "string"
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:** Returns the updated coffee object
- **Error Response:**
  - **Code:** 404
  - **Content:** `{ "message": "Coffee not found" }`

#### Delete Coffee

- **URL:** `/coffees/:id`
- **Method:** `DELETE`
- **URL Params:** `id=[integer]`
- **Success Response:**
  - **Code:** 204
- **Error Response:**
  - **Code:** 404
  - **Content:** `{ "message": "Coffee not found" }`

## Future Improvements

- Add database integration
- Add input validation
- Add filtering and search capabilities
- Add Swagger/OpenAPI documentation
- Add cURL examples
