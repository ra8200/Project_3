import React from "react";
import image from "../rhythmrBg.jpg";
import Piano from "../components/Piano";
import Toolbox from "./toolbox";
import LessonMenu from "../components/Lessons/LessonMenu";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Home"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:64 px-8">
        <div>
          <h1 className="text-6xl text-white font-bold styleMe leading-none lg:leading-snug home-name">
            Welcome to RhythmR
          </h1>
        </div>
        <div>
          <LessonMenu />
        </div>
      </section>
    </main>
  );
}
