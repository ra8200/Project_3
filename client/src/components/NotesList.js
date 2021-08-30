import React from "react";
import { QUERY_GET_ME } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { REMOVE_NOTES } from "../utils/mutations";

const NotesList = ({ notes, isLoggedInUser = false }) => {
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
  const handleRemoveNotes = async (notes) => {
    try {
      const { data } = await removeNotes({
        variables: { notes },
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="note-list">
      {notes &&
        notes.map((note) => (
          <div key={note}>
            <span>{note}</span>
            {isLoggedInUser && (
              <button onClick={() => handleRemoveNotes(note)}>X</button>
            )}
          </div>
        ))}
    </div>
  );
};

export default NotesList;
