import React from "react";
import { NavLink, Link } from "react-router-dom";
import Auth from "../utils/auth";
import LessonMenu from "./Lessons/LessonMenu";

export default function NavBar() {
  return (
    <header className="bg-pink-400">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items center py-6 px-3 mr-4 text-black text-4xl font-bold styleMe tracking-widest"
          >
            RhythmR
          </NavLink>
          {Auth.loggedIn() ? (
            <>
              <NavLink onClick={Auth.logout} 
              activeClassName="text-white"
              className="inline-flex items-center py-3 px-3 my-6 text-black hover:text-black" 
              to="/">
                Logout
              </NavLink>
              <NavLink
                to="/profile"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-black"
                activeClassName="bg-blue-800"
              >
                Profile
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-black"
              activeClassName="bg-blue-800"
            >
              Login
            </NavLink>
          )}

          <NavLink
            to="/signup"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-black"
            activeClassName="bg-blue-800"
          >
            Sign Up
          </NavLink>

          <NavLink
            to="/tutoring"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-black"
            activeClassName="bg-blue-800"
          >
            Tutoring
          </NavLink>
          <div
            className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-black"
            activeClassName="bg-blue-800"
          >
            <LessonMenu className="inline-flex items-center top-2 py-3 px-3 my-6 z-10" />
          </div>
        </nav>
      </div>
    </header>
  );
}
