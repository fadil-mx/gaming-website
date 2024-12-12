import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useWindowScroll } from "react-use";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navref = useRef(null);
  const audioref = useRef(null);

  const navitem = ["Nexus", "Vault", "Prologue", "About", "Contact"];
  const [isindicatoractive, setisindicatoractive] = useState(false);
  const [isaudioplaying, setisaudioplaying] = useState(false);
  const [lastscrolly, setlastscrolly] = useState(0);
  const [isnavopen, setisnavopen] = useState(true);

  const audiotoggle = () => {
    setisaudioplaying((prev) => !prev);
    setisindicatoractive((prev) => !prev);
  };
  const { y: currentScrolly } = useWindowScroll();
  useEffect(() => {
    if (isaudioplaying) {
      audioref.current.play();
    } else {
      audioref.current.pause();
    }
  });

  useEffect(() => {
    gsap.to("#navbar", {
      y: isnavopen ? 0 : -100,
      duration: 0.2,
      opacity: isnavopen ? 1 : 0,
    });
  }, [isnavopen]);

  useEffect(() => {
    if (currentScrolly === 0) {
      setisnavopen(true);
      navref.current.classList.remove("floating-nav");
    } else if (currentScrolly > lastscrolly) {
      setisnavopen(false);
      navref.current.classList.add("floating-nav");
    } else if (currentScrolly < lastscrolly) {
      setisnavopen(true);
      navref.current.classList.add("floating-nav");
    }
    setlastscrolly(currentScrolly);
  }, [currentScrolly]);

  // useGSAP(() => {
  //   gsap.set("#navbar", { backgroundColor: "black" });
  //   gsap.from("#navbar", {
  //     backgroundColor: "white",
  //     ease: "power1.inOut",
  //     scrollTrigger: {
  //       trigger: "#navbar",
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       scrub: true,
  //     },
  //   });
  // });

  return (
    <div
      id="navbar"
      ref={navref}
      className=" fixed z-50 inset-x-0 top-4 h-16  sm:inset-x-6 "
    >
      <header className="w-full absolute top-1/2 -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4 ">
          <div className="flex gap-7 items-center">
            <img src="/img/logo.png " alt="logo" className="w-10" />
            <Button
              id="product-b"
              title="Porducts"
              righticon={<TiLocationArrow />}
              containerclass="md:flex bg-blue-50 items-center justify-center hidden gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="md:block hidden ">
              {navitem.map((item, index) => (
                <a
                  className="nav-hover-btn"
                  href={`# ${item.toLowerCase()}`}
                  key={index}
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={audiotoggle}
            >
              <audio
                src="/audio/loop.mp3"
                ref={audioref}
                className="hidden"
                loop
              />
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  key={index}
                  className={`indicator-line ${
                    isindicatoractive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
