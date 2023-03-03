# Snack Rankings App Server
The Snack Rankings App is a web application that consists of both a frontend and a backend. The backend is responsible for processing requests and serving data to the frontend, while the frontend is responsible for rendering the user interface.

The server is built using Node.js and Express, a popular framework for building web applications. The server communicates with a PostgreSQL database, where all snacks data is stored.

## Installing Required Libraries
To install the required libraries, follow these steps:

1. Open a terminal.
2. Navigate to the `<project-directory>/api` directory.
3. Type `npm install`.

## Setting Up The Environment
In the `<project-directory>/api` directory, create a file named `.env`.
Add the following lines to the file:
```bash
PORT=3000
DB_URL=postgres://<db-username>:<db-password>@<hostname>/<db-name>
```
Replace the placeholders of DB_URL with the appropriate values.

## Setting Up The Database
To set up the database, follow these steps:
1. Open a terminal.
2. Navigate to the `<project-directory>/api` directory.
3. Type `npm run setup-db`.

Once completed, the terminal should read: `Set-up complete.`

## Running the Server
To run the server, follow these steps:

1. Open a terminal.
2. Navigate to the `<project-directory>/api` directory.
3. Type `npm start`.

## Interacting with the API
API URL base: `http://localhost:3000/`

The API has the following routes and functionalities:
- `/`	`GET`	Returns a JSON object describing the API.
- `/snacks`	`GET`	Returns a JSON object containing all the snacks.
- `/snacks`	`POST`	Accepts a JSON object and uses it to create and store a new snack.
- `/snacks/top`	`GET`	Returns a JSON object representing the snack with the most votes.
- `/snacks/:id`	`GET`	Returns a JSON object representing a single snack from the collection, selected by `:id`.
- `/snacks/:id`	`PATCH`	Updates a specific snack, incrementing or decrementing its vote count.
- `/snacks/:id`	`DELETE`	Deletes a specific snack, selected by `:id`.

Use an API testing platform such as Hoppscotch to test the API.

## Known Bugs
Please note that there may be some bugs in the project, including the following:

1. More error handling may be needed.