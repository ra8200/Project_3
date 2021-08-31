import React from "react";
import { QUERY_GET_ME } from "../utils/queries";
import NoteForm from "../components/AddNotes";
import NotesList from "../components/NotesList";
import { useQuery } from "@apollo/client";
// import { useParams, Redirect } from "react-router-dom";
import Auth from "../utils/auth";
import Piano2 from "./Piano2";

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
          <br></br>
          <p className="text-xl text-center">
            Click on the piano to activate it!
          </p>
          <br></br>
          <Piano2 />
        </div>
      </div>
    );
  }
};


export default Profile;
