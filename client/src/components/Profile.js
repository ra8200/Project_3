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

<<<<<<< HEAD
  return (
    <div className="relative flex justify-center min-h-screen pt-12 lg:64 px-8">
=======
  if (Auth.loggedIn()) {
    console.log("log");
    return (
>>>>>>> 156d3462e0f8ac0074c7d984f3e1cbc843c7567a
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
