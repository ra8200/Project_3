import React from "react";
import { QUERY_GET_ME, QUERY_NOTES } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { REMOVE_NOTES } from "../utils/mutations";

// const NotesList = ({ notes }) => {
//   const [removeNotes, { error }] = useMutation(REMOVE_NOTES, {
//     update(cache, { data: { removeNotes } }) {
//       try {
//         cache.writeQuery({
//           query: QUERY_GET_ME,
//           data: { me: removeNotes },
//         });
//       } catch (e) {
//         console.error(e);
//       }
//       const{me}=cache.readQuery({query:QUERY_NOTES});
//       cache.writeQuery({
//         query:QUERY_NOTES,
//         data:{me:[...me, removeNotes]}
//       })
//     },
//   });
const NotesList = () => {
  const data = useQuery(QUERY_NOTES);
  const [removeNotes, { error }] = useMutation(REMOVE_NOTES);
  // const userData = data?.me || {};
  console.log("this is", data);
  // console.log("this", userData);
  // const handleRemoveNotes = async (notes) => {
  //   try {
  //     const { data } = await removeNotes({
  //       variables: { notes },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  return (
    <div>
      {data.notes?.map((notes) => (
        <div key={notes._id} className="note new">
          <textarea rows="10" cols="20" placeholder="Type to add a note...">
            {notes.noteText}
          </textarea>

          {/* <button onClick={() => handleRemoveNotes(notes._id)}>X</button> */}
        </div>
      ))}
    </div>
  );
};

export default NotesList;
