import React from "react";
import Piano from "../Piano";
import * as Tone from 'tone';

const sine = new Tone.Oscillator(220, 'sine').toMaster();
const now = Tone.now();

export default function LessonOne() {
  return (
    <div className='relative flex justify-center min-h-screen pt-12 lg:64 px-8'>
      <div>
        <h1 className='text-6xl font-bold styleMe leading-none lg:leading-snug home-name'>Types of Notes: Whole, Half, and Quarter</h1>
        <br></br>
        <p className='text-xl text-center'>
          As we previously discussed, measures are divided into notes and rests.
          There are several different types of notes and each has a different
          number of beats. For this lesson, we will only focus on three of the
          many types: WHOLE NOTES, HALF NOTES, and QUARTER NOTES.
        </p>
        <p className='text-xl text-center'>
          As we also discussed, in common time each measure has 4 beats. Go
          ahead and tap your foot FOUR times at a steady pace.
        </p>
        <br></br>
        <h2 className='text-4xl font-bold styleMe leading-none'>Whole Notes</h2>
        <img className='w-48 h-auto' src="https://e7.pngegg.com/pngimages/909/793/png-clipart-whole-note-musical-note-eighth-note-rest-quarter-note-musical-notes-logo-monochrome.png" alt="A Single Whole Note"></img>
        <br></br>
        <p className='text-xl text-center'>
          A WHOLE NOTE is a note that lasts for FOUR beats. Therefore, a WHOLE
          NOTE takes up a WHOLE measure in common time.
        </p>
        <p className='text-xl text-center'>
          EXERCISE: Go ahead and sing the word "ONE" while tapping your foot for
          FOUR beats. Don't worry about sounding silly, as this is a necessary
          task in order to understand how music works. Play along with the example at 60 beats per minute!
        </p>
        <button className='w-72 rounded bg-green-600 hover:bg-green-800 font-bold py-2 px-4 border-solid border-2 border-green-700' style={{ cursor: 'pointer '}} onClick={() => {sine.start(now) 
          sine.stop(now+4)}}>Play a Whole Note</button>
        <br></br>
        <h2 className='text-4xl font-bold styleMe leading-none'>Half Notes</h2>
        <img className='w-48 h-48' src="https://www.seekpng.com/png/detail/125-1252686_beths-music-notes-half-note-transparent-background.png" alt="A Single Half Note"></img>
        <br></br>
        <p className='text-xl text-center'>
          As you may have guessed, a HALF NOTE is equal to one HALF of a WHOLE
          NOTE. This means each HALF NOTE gets TWO BEATS. Therefore two HALF
          NOTES take up a measure in common time.
        </p>
        <p className='text-xl text-center'>
          EXERCISE: We sang the word "ONE" for a WHOLE NOTE. This exercise will
          start with the word "ONE" for TWO taps of your foot, and then we will
          sing "THREE" for two taps of your foot. This is because beats "TWO"
          and "FOUR" are not yet present with our current note values. Don't
          worry, this will make much more sense soon enough. Play along with the example at 60 beats per minute!
        </p>
        <button className='w-72 rounded bg-green-600 hover:bg-green-800 font-bold py-2 px-4 border-solid border-2 border-green-700' style={{ cursor: 'pointer '}} onClick={() => {sine.start(now) 
          sine.stop(now+2)}}>Play a Half Note</button>
        <br></br>
        <h2 className='text-4xl font-bold styleMe leading-none'>Quarter Notes</h2>
        <img className='w-48 h-48' src="https://e7.pngegg.com/pngimages/552/896/png-clipart-quarter-note-musical-note-stem-rest-eighth-note-quarter-note-musical-notation-half-note.png" alt="A Single Quarter Note"></img>
        <br></br>
        <p className='text-xl text-center'>
          A QUARTER NOTE is equal to one QUARTER of a WHOLE NOTE. Think of it
          like four QUARTERS equals one WHOLE dollar. Therefore, there are FOUR
          QUARTER NOTES in one measure of common time. If you've been tapping
          along, you will notice that a QUARTER NOTE corresponds with each tap
          of your foot at this point.
        </p>
        <p className='text-xl text-center'>
          EXERCISE: Ready to take this to the next level? With the "Z" key on
          your keyboard, which corresponds to the note "C" on the piano below,
          tap your foot and play the note FOUR times in a row, while counting
          ONE...TWO...THREE...FOUR. Experiment with different notes on the piano
          while counting to four. Be sure to stay consistent while tapping your
          foot and counting! Play along with the example at 60 beats per minute!
        </p>
        <button className='w-72 rounded bg-green-600 hover:bg-green-800 font-bold py-2 px-4 border-solid border-2 border-green-700' style={{ cursor: 'pointer '}} onClick={() => {sine.start(now) 
          sine.stop(now+1)}}>Play a Quarter Note</button>
      </div>
      <div>
        <Piano />
      </div>
    </div>
  );
}
