import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Animatedtxt from "./Animatedtxt";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipanimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipanimation.to(".mask-clip-path", {
      width: "100%",
      height: "100%",
      borderRadius: 0,
    });
  });

  return (
    <div className="min-h-screen relative w-screen" id="about">
      <div className="flex flex-col  items-center relative mt-36 mb-8 gap-5 ">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome To Zentry
        </h2>
        <Animatedtxt
          title=" Discb<b>o</b>verd The World <br /> L<b>s</b>rgest Shared Adventure"
          containerclass="mt-5 !text-black item-center"
        />
        <div className="about-subtext">
          <p>The Game-Of-Game Begins Ur life </p>
          <p>Zenrty units every player from countless game and platforms </p>
        </div>
      </div>
      <div className="h-dvh w-screen " id="clip">
        <div className="about-image mask-clip-path">
          <img
            src="img/about.webp"
            alt="bg-image"
            className="size-full absolute top-0 left-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
