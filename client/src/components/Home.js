import React from "react";
<<<<<<< HEAD
import image from "../rhythmrBg.jpg";
=======
import Buttons from "./buttons";
import Staff from "./staff";
// import image from "../background.jpg";
>>>>>>> 123305fa89a9a3d9c42d284b0b28cfd4a35b1cf5

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Home"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:64 px-8">
        <h1 className="text-6xl text-blue-500 font-bold styleMe leading-none lg:leading-snug home-name">
          RhythmR
        </h1>
      </section>
      <section>
        <Staff />
      </section>
      <section>
        <Buttons />
      </section>
    </main>
  );
}
