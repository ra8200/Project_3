import React from "react";
import { QUERY_GET_ME } from "../utils/queries";
import NoteForm from "../components/AddNotes";
import NotesList from "../components/NotesList";
import { useQuery } from "@apollo/client";
import { useParams, Redirect } from "react-router-dom";
import Auth from "../utils/auth";
import Piano2 from './Piano2';

const Profile = () => {
  const { loading, data } = useQuery(QUERY_GET_ME);
  const userData = data?.me || data?.user || {};

  return (
    <div className="relative flex justify-center min-h-screen pt-12 lg:64 px-8">
      <div className="relative flex justify-center min-h-screen pt-12 lg:64 px-8 bg-gray-700 text-white">
        <div>
          <NotesList notes={userData.notes} isLoggedInUser={true} />
          <div>
            <NoteForm />
          </div>
          <br></br>
          <p className='text-xl text-center'>Click on the piano to activate it!</p>
          <br></br>
          <Piano2 />
        </div>
      </div>
    </div>  
  );
 }


export default Profile;
