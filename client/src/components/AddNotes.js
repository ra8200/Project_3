import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_NOTES, ADD_USER } from "../utils/mutations";
import { QUERY_GET_ME, QUERY_NOTES } from "../utils/queries";
import Auth from "../utils/auth";

const AddNote = () => {
  const [noteText, addNoteText] = useState("");
  const [characterLimit, setCharacterLimit] = useState(0);

  const [addNotes, { error }] = useMutation(ADD_NOTES, {
    update(cache, { data: { addNotes } }) {
      try {
        const { notes } = cache.readQuery({ query: QUERY_NOTES });

        cache.writeQuery({
          query: QUERY_NOTES,
          data: { notes: [addNotes, ...notes] },
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_GET_ME });
      cache.writeQuery({
        query: QUERY_GET_ME,
        data: { me: { ...me, notes: [...me.notes, addNotes] } },
      });
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "text" && value.length <= 200) {
      addNoteText(value);
      setCharacterLimit(value.length);
    }
  };

  const handleSaveClick = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addNotes({
        variables: {
          noteText,
        },
      });
      addNoteText("");
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
