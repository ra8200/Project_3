import Notes from "./Notes";
import AddNote from "./AddNotes";
import React from "react";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      <AddNote />
    </div>
  );
};

export default NotesList;
