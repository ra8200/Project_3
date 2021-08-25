import React from "react";
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons";

export default function NavBar () {
    return (
        <header className="bg-green-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"
                    exact
                    activeClassName="text-white"
                    className="inline-flex items center py-6 px-3 mr-4 text-white text-4xl font-bold styleMe tracking-widest"
                    >
                       RhythmR     
                    </NavLink>
                    <NavLink to="/project"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-black"
                    activeClassName="bg-blue-800"
                    >
                        Login/Sign-Up
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}