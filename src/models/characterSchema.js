const mongoose = require('mongoose');

const characterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    specie: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
  }
);

module.exports = mongoose.model('Characters', characterSchema);
