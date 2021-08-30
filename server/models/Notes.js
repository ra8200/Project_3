const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
  noteId: {
    type: String,
  },
  noteText: {
    type: String,
    trim: true,
  },
});
const Notes = model("Notes", noteSchema);
module.exports = Notes;
