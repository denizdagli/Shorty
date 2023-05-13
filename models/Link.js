const mongoose = require('mongoose');
const linkSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Link = mongoose.model('Link', linkSchema);
module.exports = Link;
