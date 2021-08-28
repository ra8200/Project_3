const { Schema, model } = require("mongoose");

const notesSchema = new Schema({
  text: {
    type: String,
    minlength: 1,
    maxlength: 200,
    trim: true,
  },
});

const Notes = model("Notes", notesSchema);
module.exports = Notes;
