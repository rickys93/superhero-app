# Debug assignment 3 - instructions

In this assignment, you'll be editing an existing software project. There are several problems in the code, and it's your job to find and fix them all.

## Rules

- Do not ask your classmates (verbally or through any other communication method) for help
- Do not copy/paste any code from someone else or from any online resource
- Do not edit any files in the `instructions` folder

## Process

- This repository has been automatically created for you
- **Clone** it onto your machine (**do not** fork it)
- Work on the `main` branch, and make all your commits there
- Run `git push` to sync your local changes with the remote repository
- A pull request (PR) has been automatically created on the remote repository for you (**do not** delete this)
- When you have made your final commits (and pushed), request a review on the PR from your assigned reviewer

## Project context

You may recall having to fix the code of a **superhero Rankings** back-end project for your debug assignment 2. 

This time around, you will be fixing the front-end code for the *superhero Rankings* project. 

The front-end allows users to:
 - View their favourite superheroes
 - Vote on their favourite superheroes
 - View the top-voted superhero
 - Create a new superhero
 - Delete a superhero

This full-stack project has three key elements:

- An API that allows users to vote on superheroes and see a list of superheroes with their total votes
- A React-based front-end for interacting with the API
- A database storing the superhero data

**The database is not provided to you for this project; you'll need to [configure](#database) your own.**

## Instructions

Get the front-end code working without any error messages and with full functionality as described below.

**IMPORTANT NOTE** - You **DO NOT** have to fix the API / change any of the code in it. Your focus should be on the client to fix the React front-end code. 

### API - Reminder

You should be familiar with the API codebase, as you had to fix if for your debug assignment 2. However, make sure to read the below and explore the code to understand all the routes and functionalities of the API. 

The API is runnable with a single command (`npm run dev`). When the server is running, it should listen for requests on port 3000.

The API has the following routes and functionalities:

| Route | Method | Response |
| --- | --- | --- |
| `/` | `GET` | Returns a JSON object describing the API. |
| `/superheroes` | `GET` | Returns a JSON object containing all the superheroes. |
| `/superheroes` | `POST` | Accepts a JSON object and uses it to create and store a new superhero. |
| `/superheroes/top` | `GET` | Returns a JSON object representing the superhero with the most votes. |
| `/superheroes/:id` | `GET` | Returns a JSON object representing a single superhero from the collection, selected by `:id`. |
| `/superheroes/:id` | `PATCH` | Updates a specific superhero, incrementing or decrementing its vote count. |
| `/superheroes/:id` | `DELETE` | Deletes a specific superhero, selected by `:id`. |

Use an API testing platform such as Hoppscotch, Postman or Insomnia to test the API, if you need to.

### Database

The API codebase contains a setup script for a database, but no database is currently connected.

As part of the assignment, you'll need to connect a database by:
    - Creating an `.env` file
    - Adding `PORT` and `DB_URL` keys
    - Create a database instance on ElephantSQL
    - Copy the database url and paste it into the `.env` file
    - Run the `npm run setup-db` script to setup the database and connect to it

### Client

The client consists of a React app with five distinct pages:

- A "homepage", which introduces the site
- A "superheroes" page, which lists all the superheroes and allows users to filter superheroes in various ways as well as delete any superheroes
- A "superhero" page, accessible from the "superheroes" page, which displays an individual superhero
- A "best superhero" page, which displays the current most highly-voted superhero
- An "add a superhero" page, which allows users to create a new superhero by adding a superhero name and description as well as categorising them as 'healthy' or 'vegetarian' 
- A "not found" page, which is displayed when a user attempts to visit a page that does not exist

When the "not found" page is displayed, users should see a short message and a link that leads back to the homepage.

All controls and links on every page should be functional.

[Watch this video](https://lafosseassociatesltd-my.sharepoint.com/:v:/g/personal/sarah_soutoul_lafosse_com/ETFB8HPUAztEuz2qlmFiD-QB5bJmJQegCJUIPVoz-0VzQg?e=wyWLtx) to see the expected functionality.

### README

The project README should contain clear information on the following:

1. How to install the required libraries
2. How to run the server
3. Any remaining bugs in the project

---

[Back](../README.md)

---
