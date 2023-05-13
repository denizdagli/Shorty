# Shorty
Shorty is a web application for creating short URLs that redirect to long URLs. It's built with Node.js, Express.js, and MongoDB.

Features
Create short URLs that redirect to long URLs


Installation
Clone the repository:
git clone https://github.com/your-username/shorty.git

Install dependencies:
npm install

Create a .env file in the root directory of the project and add the following variables:
makefile
Copy code
PORT=3000
DB_HOST=localhost
DB_PORT=27017
DB_NAME=shorty

Start the server:
npm start
Usage
Open your web browser and go to http://localhost:3000
Enter a long URL in the input field and click the "Shorten" button
Copy the generated short URL and use it to redirect to the long URL