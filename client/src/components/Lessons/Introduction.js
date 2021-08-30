import React from "react";

export default function Introduction() {
  return (
    <div className="relative flex justify-center min-h-screen pt-12 lg:64 px-8 z-0 bg-gray-700 text-white">
      <div>
        <h1 className="text-6xl font-bold styleMe leading-none lg:leading-snug home-name">
          Introduction to Rhythm
        </h1>
        <br></br>
        <h2 className="text-4xl font-bold styleMe leading-none">
          What is RHYTHM?
        </h2>
        <p className="text-xl text-center">
          RHYTHM is an emphasis on a beat or pulse in a regular pattern. This is
          noted by an a series of stronger and weaker sounds in most modern
          music.
        </p>
        <p className="text-xl text-center">
          Like a clock that ticks regularly, RHYTHM is the combination of both
          sounds and silences at a steady pulse and movement.
        </p>
        <br></br>
        <h2 className="text-4xl font-bold styleMe leading-none">
          Why learn Rhythm? Can't we just Sing-a-long?
        </h2>
        <p className="text-xl text-center">
          Rhythm allows us to understand the division of beats. This is what
          distinguishes it from a pulse.
        </p>
        <p className="text-xl text-center">
          Rhythm is read on a musical staff with NOTES and RESTS. These each
          have separate values that are easily divisible and understood.
        </p>
        <p className="text-xl text-center">
          In the first couple of lessons, we will go over simple notes and
          rests.
        </p>
        <br></br>
        <h2 className="text-4xl font-bold styleMe leading-none">
          How to we measure TIME?
        </h2>
        <p className="text-xl text-center">
          TIME, in music, is shown by placing notes in small containers, called
          MEASURES, that divide up a musical staff into a pre-determined amount
          of beats. Time can depending on the composers intentions, however, for
          this tutorial, we will only use common time. This means each measure
          has FOUR beats, and the QUARTER NOTE gets the beat.
        </p>
      </div>
    </div>
  );
}
