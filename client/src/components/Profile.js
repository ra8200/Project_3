import React from "react";
import { QUERY_GET_ME, QUERY_NOTES, QUERY_SINGLE_USER } from "../utils/queries";
import NoteForm from "../components/AddNotes";
import NotesList from "../components/NotesList";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
const Profile = () => {
  const userId = useParams();
  const { loading, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_GET_ME,
    {
      variables: { userId: userId },
    }
  );
  const user = data?.me || data?.user || [];
  return (
    <div>
      <NotesList notes={user.notes} />
      <div>
        <NoteForm uesrId={user._id} />
      </div>
    </div>
  );
};

export default Profile;
