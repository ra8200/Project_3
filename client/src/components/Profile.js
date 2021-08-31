import React from "react";
import { QUERY_GET_ME } from "../utils/queries";
import NoteForm from "../components/AddNotes";
import NotesList from "../components/NotesList";
import { useQuery } from "@apollo/client";
import { useParams, Redirect } from "react-router-dom";
import Auth from "../utils/auth";
const Profile = () => {
  const data = useQuery(QUERY_GET_ME);
  const userData = data?.notes || data?.user || {};

  if (Auth.loggedIn()) {
    console.log("log");
    return (
      <div>
        <div>
          <NotesList />
          <div>
            <NoteForm />
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
