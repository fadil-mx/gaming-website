import React from "react";

const BentoCard = ({ src, title, desc, iscomingsoon }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col justify-between p-5 text-blue-50">
        <div className="">
          <h1 className="bento-title special-font">{title}</h1>
          {desc && <p className="mt-3 max-w-64 text-xs md:text-base">{desc}</p>}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
