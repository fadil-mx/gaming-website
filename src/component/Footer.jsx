import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const links = [
  { href: "dc", icon: <FaDiscord /> },
  { href: "tw", icon: <FaTwitter /> },
  { href: "ig", icon: <FaInstagram /> },
  { href: "fb", icon: <FaFacebook /> },
];

const Footer = () => {
  return (
    <div className="bg-violet-300  w-screen py-4  text-black">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
        <p className=" text-center md:text-left text-sm">
          @ Nova2024.All rights reserved
        </p>
        <div className=" flex gap-8">
          {links.map((item, i) => {
            return (
              <a href={item.href} className="">
                {" "}
                {item.icon}
              </a>
            );
          })}
        </div>
        <p className="  text-sm">Privacy policy</p>
      </div>
    </div>
  );
};

export default Footer;
