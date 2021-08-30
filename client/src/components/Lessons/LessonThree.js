import React from "react";
import Piano2 from "../Piano2";
import LessonThreePart1 from './LessonThreePart1.png';
import Mary from './Mary.JPG';
import playNote from '../Piano2';
import * as Tone from 'tone';
import '../../App.css';

window.addEventListener('keydown', playNote);

function play(note) {
  const piano = new Tone.Sampler({
    urls: {
      C4: 'C4.mp3',
      'D#4': 'Ds4.mp3',
      'F#4': 'Fs4.mp3',
      A4: 'A4.mp3',
    },
    release: 1,
    baseUrl: 'https://tone.js.github.io/audio/salamander',
  }).toDestination();
  Tone.loaded().then(() => {
    piano.triggerAttackRelease(`{note}`, 4);
  }); 
}

export default function LessonThree() {
  return (
    <div className="relative flex justify-center min-h-screen pt-12 lg:64 px-8 bg-gray-700 text-white">
      <div>
        <h1 className="text-6xl font-bold styleMe leading-none lg:leading-snug home-name">
          Alternating Note Types
        </h1>
        <br></br>
        <h3 className="text-3xl font-bold text-center">
          Congrats on finishing Lesson Two!
        </h3>
        <br></br>
        <p className="text-xl text-center">
          Now that we have a solid grip on the basic NOTES and RESTS, we can
          combine them to make more interesting melodies.
        </p>
        <br></br>
        <h2 className="text-4xl font-bold styleMe leading-none">
          Whole, Half, Quarter
        </h2>
        <p className="text-xl text-center">
          In this exercise, we will count and sing THREE measures. The first of
          which is a WHOLE NOTE, followed by TWO HALF NOTES, and then FOUR
          QUARTER NOTES.
        </p>
        <p className="text-xl text-center">
          In the first measure we will only sing "ONE" for FOUR beats.
        </p>
        <p className="text-xl text-center">
          In the second measure we will sing "ONE" and "THREE" each for TWO
          beats.
        </p>
        <p className="text-xl text-center">
          In the third measure we will sing "ONE..TWO..THREE..FOUR.."
        </p>
        <p className="text-xl text-center">
          Remember to tap your foot as you go along!
        </p>
        <br></br>
        <h2 className="text-4xl font-bold styleMe leading-none">
          SPOTLIGHT FOCUS!
        </h2>
        <p className="text-xl text-center">
          In this exercise, use the following tune below along with the piano.
          The notes have been labeled for you.
        </p>
        <p className="text-xl text-center">
          Remember to tap your feet while you play, and try to count along with
          each rhythm.
          <Piano2 />
        </p>
				<br></br>
				<img className='h-auto w-full' src={Mary} alt='Notated version of Mary Had A Little Lamb'></img>
      </div>
    </div>
  );
}
