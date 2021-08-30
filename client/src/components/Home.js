import React from "react";
import image from "../rhythmrBg.jpg";

export default function Home() {
  return (
    <main>
      <body className="bg-gray-700">
        <img
          src={image}
          alt="Home"
          className="absolute object-cover w-full h-full"
        />
        <section className="relative flex justify-center min-h-screen pt-12 lg:64 px-8">
          <div>
            {/* <h1 className="text-2xl text-white font-bold styleMe leading-none lg:leading-snug home-name">
              Welcome to RhythmR
            </h1> */}
          </div>
        </section>
      </body>
    </main>
  );
}
