# How to create a similar application

### Database

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