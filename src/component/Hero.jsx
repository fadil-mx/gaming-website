import React, { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Hero = () => {
  const [currentindex, setcurrentindex] = useState(1);
  const [hasclicked, sethasclicked] = useState(false);
  const [loading, setloading] = useState(true);
  const [loadedvideo, setloadedvideo] = useState(0);
  const totalvideo = 4;
  const nextvideo = useRef(null);
  const handlevideoload = () => {
    setloadedvideo((prev) => prev + 1);
  };
  const handlevideo = () => {
    sethasclicked(true);
    setcurrentindex((prev) => (prev % totalvideo) + 1);
  };

  const videosrc = (i) => `videos/hero-${i}.mp4`;

  useGSAP(
    () => {
      if (hasclicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextvideo.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentindex], revertOnUpdate: true }
  );

  return (
    <div className="h-dvh w-screen overflow-x-hidden relative">
      <div
        id="video-frame"
        className="h-dvh relative w-screen overflow-hidden bg-blue-75 rounded-lg z-10"
      >
        <div className="">
          <div className="mask-clip-path absolute-center cursor-pointer overflow-hidden rounded-lg z-30 absolute  ">
            <div
              className="origin-center scale-50 opacity-0 transition-all hover:opacity-100 hover:scale-100"
              onClick={handlevideo}
            >
              <video
                ref={nextvideo}
                src={videosrc((currentindex % totalvideo) + 1)} // fix the
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150  object-cover object-center"
                onLoadedData={handlevideoload}
              />
            </div>
          </div>
          <video
            ref={nextvideo}
            src={videosrc(currentindex)}
            loop
            muted
            className="absolute-center invisible size-64 absolute z-20  object-cover object-center"
            id="next-video"
            onLoadedData={handlevideoload}
          />
          <video
            src={videosrc(currentindex)}
            loop
            muted
            autoPlay
            className="absolute left-0 right-0 size-full object-cover object-center"
            onLoadedData={handlevideoload}
          ></video>
        </div>
        <h1 className="z-50 hero-heading special-font absolute bottom-5 right-5 text-blue-75">
          G<b>A</b>MING
        </h1>
        <div className="w-full z-40 absolute top-0 left-0">
          <div className=" mt-24 px-5 sm:px-10">
            <h1 className="hero-heading special-font text-blue-100">
              REDEFI<b>N</b>
              <b>E</b>
            </h1>
            <p className="font-robert-regular max-w-64 mb-5 text-blue-100">
              Enter Metagame Layer <br /> Unleash the play Economy{" "}
            </p>
            <Button
              id="watch-triler"
              title="Watch-Title"
              lefticon={<TiLocationArrow />}
              containerclass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="hero-heading special-font absolute bottom-5 right-5 text-black">
        G<b>A</b>MING
      </h1>
    </div>
  );
};

export default Hero;
