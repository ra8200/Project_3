import React from "react";
import { QUERY_GET_ME } from "../utils/queries";
import NoteForm from "../components/AddNotes";
import NotesList from "../components/NotesList";
import { useQuery } from "@apollo/client";
import { useParams, Redirect } from "react-router-dom";
import Auth from "../utils/auth";
const Profile = () => {
  const { loading, data } = useQuery(QUERY_GET_ME);
  const userData = data?.me || data?.user || {};

  if (Auth.loggedIn()) {
    console.log("log");
    return (
      <div>
        <div>
          <NotesList notes={userData.notes} isLoggedInUser={true} />
          <div>
            <NoteForm />
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
