// app.js
const express = require('express');
require('dotenv').config();
require('./src/config/dbConnect');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Link = require('./src/models/Link');
const controller = require('./src/controllers/linkController');



const app = express();
const port = process.env.PORT || 6000;

// Export port
module.exports = { port };
// Set view engine
app.set('view engine', 'ejs');
//middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', controller.getPage);

app.post('/', controller.createLink);

app.get('/:code', controller.redirect);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
