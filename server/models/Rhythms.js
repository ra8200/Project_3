const { Schema } = require("mongoose");

const rhythmsSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  id: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
  },
  counting: {
    type: Number,
  },
});

module.exports = rhythmsSchema;
