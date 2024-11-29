import React from "react";

const Button = ({ id, title, containerclass, righticon, lefticon }) => {
  return (
    <button
      id={id}
      className={`z-10 relative group bg-violet-50 w-fit cursor-pointer 
    overflow-hidden rounded-full text-black px-7 py-3 ${containerclass}`}
    >
      {lefticon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {righticon}
    </button>
  );
};

export default Button;
