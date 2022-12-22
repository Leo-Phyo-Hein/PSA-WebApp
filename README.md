## Setup Instructions
- Open the zip and open the extracted folder in Visual Studio Code
-	Open the db_init.sql file, paste it on the query and run it on the Workbench by clicking on the lightning icon
  - If you cannot open the file, open the SQL file in a text editor and copy and paste the contents on the query
-	On the databaseConfig.js file located in the model folder, change the password to your own password that you usually use in the Workbench
-	Install all the required node packages using “npm install”
-	Refer to README.md for more details about the code
-	First Method:
  - Right click the respective "client" and "server" folders and click on the 'Open in Integrated Terminal' option for each of the folders
  - Run nodemon on each of the terminals
  - If nodemon does not work, run the command node index.js and node server.js for the client terminal and server terminal respectively
- Second Method:
  - Create two new terminals on your VSCode workstation
  - Run two commands: cd server and cd client for each terminal
  - Run nodemon on both terminals
  - If nodemon does not work, run the command node index.js and node server.js for the client terminal and server terminal respectively

