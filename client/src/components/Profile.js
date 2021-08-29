import React from "react";
import { QUERY_GET_ME, QUERY_NOTES, QUERY_SINGLE_USER } from "../utils/queries";
import NoteForm from "../components/AddNotes";
import NotesList from "../components/NotesList";
import { useQuery } from "@apollo/client";
import { useParams, Redirect } from "react-router-dom";
import Auth from "../utils/auth";
const Profile = () => {
  // const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_GET_ME);
  const user = data?.me || data?.user || {};
  console.log("this", user);
  if (Auth.loggedIn()) {
    return <Redirect to="/profile" />;
  }
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>
        <NotesList notes={user.notes} isLoggedInUser={true} />
        <div>
          <NoteForm userId={user._id} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
