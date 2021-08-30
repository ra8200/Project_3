import React from "react";
import Piano2 from "../Piano2";
import * as Tone from 'tone';
import '../../App.css';

const sine = new Tone.Oscillator(220, "sine").toMaster();
const now = Tone.now();

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

export default function LessonOne() {
  return (
    <div className="relative flex justify-center min-h-screen pt-12 lg:64 px-8 bg-gray-700 text-white">
      <div>
        <h1 className="text-6xl font-bold styleMe leading-none lg:leading-snug home-name">
          Types of Notes: Whole, Half, and Quarter
        </h1>
        <br></br>
        <p className="text-xl text-center">
          As we previously discussed, measures are divided into notes and rests.
          There are several different types of notes and each has a different
          number of beats. For this lesson, we will only focus on three of the
          many types: WHOLE NOTES, HALF NOTES, and QUARTER NOTES.
        </p>
        <p className="text-xl text-center">
          As we also discussed, in common time each measure has 4 beats. Go
          ahead and tap your foot FOUR times at a steady pace.
        </p>
        <br></br>
        <h2 className="text-4xl font-bold styleMe leading-none">Whole Notes</h2>
        <img
          className="w-48 h-auto"
          src="https://media.istockphoto.com/vectors/whole-music-note-icon-vector-id1225831908?k=20&m=1225831908&s=612x612&w=0&h=vfPETPVCbnJrS7LvNNmiOxpabsKeLZutJUs0WLpD1G0="
          alt="A Single Whole Note"
        ></img>
        <br></br>
        <p className="text-xl text-center">
          A WHOLE NOTE is a note that lasts for FOUR beats. Therefore, a WHOLE
          NOTE takes up a WHOLE measure in common time.
        </p>
        <p className="text-xl text-center">
          EXERCISE: Go ahead and sing the word "ONE" while tapping your foot for
          FOUR beats. Don't worry about sounding silly, as this is a necessary
          task in order to understand how music works. Play along with the
          example at 60 beats per minute!
        </p>
        <button
          className="w-72 rounded bg-blue-600 hover:bg-blue-800 font-bold py-2 px-4 border-solid border-2 border-blue-700"
          style={{ cursor: "pointer " }}
          onClick={() => {
            sine.start(now);
            sine.stop(now + 4);
          }}
        >
          Play a Whole Note
        </button>
        <br></br>
        <h2 className="text-4xl font-bold styleMe leading-none">Half Notes</h2>
        <img
          className="w-48 h-auto"
          src="data:image/jpeg;base64,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"
          alt="A Single Half Note"
        ></img>
        <br></br>
        <p className="text-xl text-center">
          As you may have guessed, a HALF NOTE is equal to one HALF of a WHOLE
          NOTE. This means each HALF NOTE gets TWO BEATS. Therefore two HALF
          NOTES take up a measure in common time.
        </p>
        <p className="text-xl text-center">
          EXERCISE: We sang the word "ONE" for a WHOLE NOTE. This exercise will
          start with the word "ONE" for TWO taps of your foot, and then we will
          sing "THREE" for two taps of your foot. This is because beats "TWO"
          and "FOUR" are not yet present with our current note values. Don't
          worry, this will make much more sense soon enough. Play along with the
          example at 60 beats per minute!
        </p>
        <button
          className="w-72 rounded bg-blue-600 hover:bg-blue-800 font-bold py-2 px-4 border-solid border-2 border-blue-700"
          style={{ cursor: "pointer " }}
          onClick={() => {
            sine.start(now);
            sine.stop(now + 2);
          }}
        >
          Play a Half Note
        </button>
        <br></br>
        <h2 className="text-4xl font-bold styleMe leading-none">
          Quarter Notes
        </h2>
        <img
          className="w-48 h-auto"
          src="https://openclipart.org/image/800px/92875"
          alt="A Single Quarter Note"
        ></img>
        <br></br>
        <p className="text-xl text-center">
          A QUARTER NOTE is equal to one QUARTER of a WHOLE NOTE. Think of it
          like four QUARTERS equals one WHOLE dollar. Therefore, there are FOUR
          QUARTER NOTES in one measure of common time. If you've been tapping
          along, you will notice that a QUARTER NOTE corresponds with each tap
          of your foot at this point.
        </p>
        <p className="text-xl text-center">
          EXERCISE: Ready to take this to the next level? With the "Z" key on
          your keyboard, which corresponds to the note "C" on the piano below,
          tap your foot and play the note FOUR times in a row, while counting
          ONE...TWO...THREE...FOUR. Experiment with different notes on the piano
          while counting to four. Be sure to stay consistent while tapping your
          foot and counting! Play along with the example at 60 beats per minute!
        </p>
        <button
          className="w-72 rounded bg-blue-600 hover:bg-blue-800 font-bold py-2 px-4 border-solid border-2 border-blue-700"
          style={{ cursor: "pointer " }}
          onClick={() => {
            sine.start(now);
            sine.stop(now + 1);
          }}
        >
          Play a Quarter Note
        </button>
        <br></br>
        <p className="text-xl text-center">Click in the piano first to activate it!</p>
				<br></br>
        <Piano2 />
      </div>
    </div>
  );
}
