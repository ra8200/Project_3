import React from "react";
import image from "../rhythmrBg.jpg";
import Piano from "../components/Piano";
import Toolbox from "./toolbox";

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
          <Piano />
        </div>
        <div>
          <Toolbox />
        </div>
      </section>
    </main>
  );
}
