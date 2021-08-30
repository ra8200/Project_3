import React, { useState } from "react";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Key from './Key';
import Introduction from "./Lessons/Introduction";
import LessonMenu from "./Lessons/LessonMenu";
import LessonOne from "./Lessons/LessonOne";
import LessonTwo from './Lessons/LessonTwo';
import LessonThree from './Lessons/LessonThree';
import LoginForm from './LoginForm';
import NotesList from './NotesList';
import Piano from './Piano';
import Profile from './Profile';
import SignUp from './SignUp';
import Tutoring from './Tutoring';
import '../index.css'
import '../App.css'

export default function Container() {
	const [currentPage, setCurrentPage] = useState('homepage');

	const renderPage = () => {
		if (currentPage === 'Home') {
			return <Home />
		}
		if (currentPage === 'About') {
			return <About />
		}
		if (currentPage === 'Introduction') {
			return <Introduction />
		}
		if (currentPage === 'LessonOne') {
			return <LessonOne />
		}
		if (currentPage === 'LessonTwo') {
			return <LessonTwo />
		}
		if (currentPage === 'LessonThree') {
			return <LessonThree />
		}
		if (currentPage === 'LoginForm') {
			return <LoginForm />
		}
		if (currentPage === 'Profile') {
			return <Profile />
		}
		if (currentPage === 'SignUp') {
			return <SignUp />
		}
		if (currentPage === 'Tutoring') {
			return <Tutoring />
		}
	}

	const handlePageChange = (page) => setCurrentPage(page);

	return(
		<div>
			<NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
			{renderPage()}
		</div>
	);
}