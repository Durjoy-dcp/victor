import React from "react";
import Typewriter from "typewriter-effect";
const Tpyeanim: React.FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          " Add your tasks everyday",
          " It's easy to rember your task",
          " Make your life easy with Victor ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
        delay: 65,
      }}
    />
  );
};

export default Tpyeanim;
