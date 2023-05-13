// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Link = require('./models/Link');
const controller = require('./controllers/linkController');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 6000;

// Export port
module.exports = { port };

const dbUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', controller.getPage);

app.post('/', controller.createLink);

app.get('/:code', controller.redirect);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
