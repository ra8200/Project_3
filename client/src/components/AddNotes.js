import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_NOTES } from "../utils/mutations";
import { QUERY_GET_ME, QUERY_NOTES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";

const NoteForm = ({ noteId }) => {
  const [noteText, addNoteText] = useState("");
  // const [addNotes, { error }] = useMutation(ADD_NOTES, {
  //   update(cache, { data: { addNotes } }) {
  //     try {
  //       const { notesQ } = cache.readQuery({ query: QUERY_NOTES });
  //       cache.writeQuery({
  //         query: QUERY_NOTES,
  //         data: { notesQ: [addNotes, ...notesQ] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }

  //     const { meQ } = cache.readQuery({ query: QUERY_GET_ME });
  //     cache.writeQuery({
  //       query: QUERY_GET_ME,
  //       data: { meQ: { ...meQ, notes: [...meQ.notes, addNotes] } },
  //     });
  //   },
  // });
  const [addNotes, { error }] = useMutation(ADD_NOTES);
  const handleSaveClick = async (event) => {
    event.preventDefault();
    try {
      const data = await addNotes({
        variables: {
          noteId: Auth.getProfile().data.username,
          noteText,
        },
      });
      addNoteText("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <div className="note new">
          <textarea
            rows="10"
            cols="20"
            placeholder="Type to add a note..."
            value={noteText}
            onChange={(event) => addNoteText(event.target.value)}
          ></textarea>
          <div className="note-footer">
            <button className="save" onClick={handleSaveClick}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <p>please sign up</p>
      )}
    </div>
  );
};

export default NoteForm;
