# How to create a similar application

Contributors: @GabrielleMonaen and @Rickys93.

1. Create the `.env` file with the DB_URL and PORT environment variables, as below:
```
cd superhero-app/api && touch .env
```
Contents of the `.env` file:
```
DB_URL=url_link
PORT=3000
```
The url_link above is replaced with the ElephantSQL database link.
2. Run the `npm run setup-db` command in GitHub to set up the database.
3. Install dependencies for server:
```
cd superhero-app/api
npm init -y
npm install
```
4. Install dependencies for client:
```
cd superhero-app/client
npm init -y
npm install
```
5. Run the api server
```
cd superhero-app/api
npm run dev
```
6. Run the vite app
```
cd superhero-app/client
npm run dev
```
7. See the application in broswer at http://localhost:5173.
8. To deploy the application, follow the instructions below. These instructions have not been tested and you may need to adjust them.
    1. To deploy the application, replace all localhost server links with the render.com app link. 
    2. To add the dependencies in the render.com and netlify.com settings, type as follows.
    3. For server on render.com: `cd superhero-app/api && npm init -y && npm install && npm run setup-db`. And to run the server on render.com, type `npm run dev`.
    4. For client on netlify.com: `cd superhero-app/client && npm init -y && npm install`. And to run vite on netlify.com, type `npm run dev`.

Happy coding!