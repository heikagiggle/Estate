/* eslint-disable no-unused-vars */
import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="w-full py-16">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h1 className="text-xl md:text-3xl font-bold">
            Download the real estate app
          </h1>
          <div className="flex space-x-5">
            <div className="flex items-center px-5 py-2 bg-white rounded drop-shadow-xl space-x-2">
              <FaGooglePlay size={"1.5rem"} />
              <div>
                <p className="text-xs">Get on</p>
                <h1 className="text-sm">Google Play Store</h1>
              </div>
            </div>
            <div className="flex items-center px-5 py-2 bg-white rounded drop-shadow-xl space-x-2">
              <IoLogoAppleAppstore size={"1.5rem"} />
              <div>
                <p className="text-xs">Get On</p>
                <h1 className="text-sm">Apple store</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full py-10 bg-neutral-800 text-white">
        <div className="w-11/12 md:w-1/3 m-auto flex flex-col items-center text-center space-y-5">
          <h1 className="text-2xl font-bold">Real estate</h1>
          <ul className="flex items-center space-x-5 text-sm">
            <li>Features</li>
            <li>Trending</li>
            <li>About</li>
          </ul>
          <div className="flex items-center space-x-5">
            <FiTwitter size={"1.5rem"} />
            <AiOutlineInstagram size={"2rem"} />
            <AiOutlineYoutube size={"2rem"} />
            <FiFacebook size={"2rem"} />
            <AiFillGithub size={"1.5rem"} />
          </div>
          <p className="p-5 text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dignissim viverra diam, in consectetur dolor rhoncus vel.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
