import React from "react";
// import image from "../background.jpg";

export default function Home() {
  return (
    <main>
      {/* <img
        src={image}
        alt="Home"
        className="absolute object-cover w-full h-full"
      /> */}
      <section className="relative flex justify-center min-h-screen pt-12 lg:64 px-8">
        <h1 className="text-6xl text-blue-500 font-bold styleMe leading-none lg:leading-snug home-name">
          RhythmR
        </h1>
      </section>
    </main>
  );
}
