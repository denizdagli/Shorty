// app.js
const express = require('express');
require('dotenv').config();
require('./src/config/dbConnect');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const linkRoute = require('./src/routes/linkRoute');
const pageRoute = require('./src/routes/pageRoute');
/* const userRoute = require('./src/routes/userRoute'); */
const app = express();
const port = process.env.PORT || 6000;

// Export port
module.exports = { port };
// Set view engine
app.set('view engine', 'ejs');
//middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/api',pageRoute);
app.use('/api',linkRoute);
/* app.use('/api',userRoute); */

app.listen(port, () => {

  console.log(`Server is listening on port ${port}`);
});
