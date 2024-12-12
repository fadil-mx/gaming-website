import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <section id="contact" className=" w-screen my-20 min-h-96 px-10  ">
      <div className="relative rounded-lg py-24 bg-black text-blue-50 sm:overflow-hidden border border-black">
        <div className="absolute h-full -left-20 w-72 top-0 overflow-hidden sm:block hidden lg:left-20 lg:w-96 ">
          <div className="contact-clip-path-1 ">
            <img src="img/contact-1.webp " alt="" />
          </div>
          <div className="contact-clip-path-2 lg:translate-y-40 translate-y-60 ">
            <img src="img/contact-2.webp " alt="" />
          </div>
        </div>
        <div className="absolute  -top-40 w-60 left-10     sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-72 ">
          <div className=" absolute contact-clip-path-1 md:scale-125 ">
            <img src="img/swordman-partial.webp " alt="" />
          </div>
          <div className=" sword-man-clip-path  md:scale-125 ">
            <img src="img/swordman.webp " alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center text-center ">
          <p className="font-general text-[10px] uppercase">join zentry</p>
          <p className=" special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            lets b<b>u</b>ild the <br /> new e<b>r</b>e of <br /> gaming t
            <b>o</b>gether
          </p>
          <Button title="contact us" containerclass="mt-10 curser-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
