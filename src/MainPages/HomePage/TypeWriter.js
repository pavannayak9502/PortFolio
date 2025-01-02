import React from "react";
import TypeWriter from "typewriter-effect"; // /* npm i typewriter-effect */  install it in your node package.

let Type = () => {
  return (
    <>
      <TypeWriter
        options={{
          strings: [
            "Frontend Developer !",
            "Full Stack Web Developer !",
            "Mern Stack Developer !",
            "FreeLancer !",
          ],
          autoStart: true,
          loop: true,
          deletespeed: 50,
        }}
      />
    </>
  );
};
export default Type;
