Technologies Used
-JavaScript
-React
-Redux
-Node
-Html
-CSS
-Sequelize

Getting Started
1. Clone this repo: Surround-Sound-Repo
2. Install dependencies in the root directory: npm install
3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL
4. CREATE USER <name> WITH CREATEDB PASSWORD <'password'>
5. Create a .env file in the backedn directory based on the .env.example found in the .env.example
6. Enter your own username and password information in your .env file as well as a personal database name
7. Create a secured JWT_SECRET, and a PORT number
8. In your package.json file within the frontend directory add the following "proxy": "http://localhost:5000" to your code, usually after the last comma separated object in the file. (},)
9. While in your 'backend' folder:
- Create your database by running npx dotenv sequelize db:create
- Migrate your tables by running npx dotenv sequelize db:migrate
- Seed your models with hardcoaded data npx dotenv sequelize db:seed:all
10. Start the backend server by running npm start
11. Navigate to your 'frontend' folder and also run npm start to begin it's server, which should be running on "http://localhost:3000"
12. Application will be ready to use, feel free to use the convenient demo user "Devo" to test.

Features
Logged in users will be able to:
- Create/Update/View/Delete Songs
- Create/Update/View/Delete Playlists
