import React from "react";
import Piano from "../Piano";

export default function LessonTwo() {
  return (
    <div>
      <div>
        <h1>Types of Rests: Whole Rest, Half Rest, and Quarter Rest</h1>
        <p>Congrats on finishing Lesson One!</p>
        <p>
          As we noted in the introduction, Rhythm is made up of both SOUNDS and
          SILENCES. In this lesson, we will discuss the SILENCES, or RESTS.
          RESTS may look a lot different than their opposite, however,
          functionally they work the same. There are many kinds of RESTS, but in
          this lesson we will focus on WHOLE RESTS, HALF RESTS, and QUARTER
          RESTS.
        </p>
        <h2>Whole Rests</h2>
        <p>
          A WHOLE REST is very similar to a WHOLE NOTE and has the same value,
          however, it indicates a lack of sound for FOUR beats. Therefore, a
          WHOLE REST will last a WHOLE measure in common time.
        </p>
        <p>
          EXERCISE: Four this exercise, we are going to sing the word "ONE" for
          a WHOLE NOTE while tapping our feet for four beats and then NOT SING
          for FOUR more beats. As you may notice, this will take up EIGHT beats
          which is TWO measures in common time.
        </p>
        <h2>Half Rests</h2>
        <p>
          Once again, similar to a HALF NOTE, but lacking sound; A HALF REST is
          silence for TWO beats. Therefore, we can assume two HALF RESTS can
          take up an entire measure. OR, additionally, a HALF REST and a HALF
          NOTE can take up the same measure together.
        </p>
        <p>
          EXERCISE: For this exercise, we will once again count for EIGHT beats,
          or TWO measures. However we will use a alternating series of HALF
          NOTES and HALF RESTS. Therefore we will sing "ONE" for two beats, REST
          for TWO beats, and because the next half note will be on the next
          measure, we will sing "ONE" again for TWO beats followed by another
          REST for TWO beats.
        </p>
        <h1>Quarter Rests</h1>
        <p>
          A QUARTER REST, like a QUARTER NOTE, is one QUARTER of a WHOLE REST.
          Therefore, in common time, a QUARTER REST gets ONE beat.
        </p>
        <p>
          EXERCISE: For this exercise, we will once again utilize the piano at
          the bottom of the page. With the "z" and "c" keys on your keyboard,
          which correlate to the notes "C" and "E", we will play alternating
          QUARTER NOTES and QUARTER RESTS. Ex. "C, Rest, E, Rest" for TWO
          measures. All the while, you should be counting
          "ONE...TWO...THREE...FOUR..." while tapping your foot to the beat.
        </p>
      </div>
      <div>
        <Piano />
      </div>
    </div>
  );
}
