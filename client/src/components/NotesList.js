import AddNote from "./AddNotes";
import React from "react";
import { QUERY_GET_ME, QUERY_NOTES } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { REMOVE_NOTES } from "../utils/mutations";

const NotesList = ({ notes }) => {
  const [removeNotes, { error }] = useMutation(REMOVE_NOTES, {
    update(cache, { data: { removeNotes } }) {
      try {
        cache.writeQuery({
          query: QUERY_GET_ME,
          data: { me: removeNotes },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const handleRemoveNotes = async (note) => {
    try {
      const { data } = await removeNotes({
        variables: { note },
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {notes &&
        notes.map((note) => (
          <div key={note}>
            <span>{note}</span>
            <button onClick={() => handleRemoveNotes(note)}>X</button>
          </div>
        ))}
    </div>
  );
};

export default NotesList;
