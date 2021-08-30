import React from "react";
import Piano from "../Piano";

export default function LessonThree() {
  return (
    <div>
      <div>
        <h1>Alternating Note Types</h1>
        <p>Congrats on finishing Lesson Two!</p>
        <p>
          Now that we have a solid grip on the basic NOTES and RESTS, we can
          combine them to make more interesting melodies.
        </p>
        <h2>Whole, Half, Quarter</h2>
        <p>
          In this exercise, we will count and sing THREE measures. The first of
          which is a WHOLE NOTE, followed by TWO HALF NOTES, and then FOUR
          QUARTER NOTES.
        </p>
        <p>In the first measure we will only sing "ONE" for FOUR beats.</p>
        <p>
          In the second measure we will sing "ONE" and "THREE" each for TWO
          beats.
        </p>
        <p>In the third measure we will sing "ONE..TWO..THREE..FOUR.."</p>
        <p>Remember to tap your foot as you go along!</p>
        <h2>SPOTLIGHT FOCUS!</h2>
        <p>
          In this exercise, use the following tune below along with the piano.
          The notes have been labeled for you.
        </p>
        <p>
          Remember to tap your feet while you play, and try to count along with
          each rhythm.
        </p>
      </div>
      <div>
        <image src="/" />
      </div>
      <div>
        <Piano />
      </div>
    </div>
  );
}
