import React from "react";
import { IoHome, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  // Array of footer links with icons
  const footerLinks = [
    { name: "Home", icon: <IoHome className="inline mr-2" />, href: "#home" },
    {
      name: "About Me",
      icon: <CgProfile className="inline mr-2" />,
      href: "#about",
    },
    {
      name: "Contact",
      icon: <FaPhoneAlt className="inline mr-2" />,
      href: "#contact",
    },
  ];

  const iconBottom = [
    {
      name: "Facebook",
      href: "null",
      icon: <IoLogoFacebook className="inline mr-4 text-xl" />,
    },
    {
      name: "Instagram",
      href: "null",
      icon: <IoLogoInstagram className="inline mr-4 text-xl" />,
    },
    {
      name: "Twitter",
      href: "null",
      icon: <FaXTwitter className="inline mr-4 text-xl" />,
    },
    {
      name: "Youtube",
      href: "null",
      icon: <TbBrandYoutube className="inline mr-4 text-xl" />,
    },
  ];

  return (
    <footer className="bg-[#393e46] text-white py-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-blue-400 transition duration-300 flex items-center"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-5 ">
          {iconBottom.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition duration-300 flex item-center"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="mt-20 text-sm ">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
