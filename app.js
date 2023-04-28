const express = require('express');
require('dotenv').config();
const ejs = require('ejs');
const pageController = require('./controllers/pageController');
const app = express();

const port = process.env.PORT || 6000;
//TEMPLATE ENGINE
app.set('view engine', 'ejs');


//Middlewares
app.use(express.static('public')); 

app.get('/', pageController.getHomePage);
app.listen(port, () => {
  console.log(`Server is listening on ${port} port`);
});
