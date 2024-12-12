import React, { useRef, useState } from "react";
import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";

const Fearures = () => {
  const BentoTilt = ({ children, className = "" }) => {
    const [trasformstyle, settrasformstyle] = useState("");
    const itemref = useRef(null);

    const handleMouseOver = (e) => {
      if (!itemref.current) return;
      const { left, top, width, height } =
        itemref.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      const tiltX = (x - 0.5) * 15;
      const tiltY = (y - 0.5) * -5;

      const newTransform = `perspective(700px) rotateX(${tiltY}deg) rotateY(${tiltX}deg ) scale3d(0.95,0.95,0.95)`;
      settrasformstyle(newTransform);
    };
    const handleMouseOut = () => {
      settrasformstyle("");
    };
    return (
      <div
        className={className}
        ref={itemref}
        onMouseMove={handleMouseOver}
        onMouseLeave={handleMouseOut}
        style={{ transform: trasformstyle }}
      >
        {children}
      </div>
    );
  };

  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto  px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Dive into the 'Game of Games' Universe
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding ecosystem where a
            vibrant array of products converge into an interconnected universe.
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden  rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            desc="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            iscomingsoon
          />
        </div>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className=" bento-tilt_1 md:row-span-2 row-span-1 md:col-span-1 border-hsla ">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Zig<b>m</b>a
                </>
              }
              desc="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              iscomingsoon
            />
          </BentoTilt>
          <BentoTilt className=" row-span-1 ms-32  md:ms-0  md:col-span-1 bento-tilt_1  ">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  ne<b>x</b>us
                </>
              }
              desc="A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction"
              iscomingsoon
            />{" "}
          </BentoTilt>
          <BentoTilt className=" bento-tilt_1 me-14 md:me-0 row-span-1 md:col-span-1  ">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              desc="A cross-world AI Agent - elevating your gameplay to be more fun and productive. "
              iscomingsoon
            />{" "}
          </BentoTilt>
          <div className=" bento-tilt_2 ">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font">
                m<b>o</b>re com<b>in</b>ng so<b>o</b>n
              </h1>
              <TiLocationArrow className="scale-[5] self-end m-5" />
            </div>
          </div>
          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover  object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Fearures;
