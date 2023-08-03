/* eslint-disable no-unused-vars */
import React from "react";
import heroimg from "../assets/image6.jpg";

const Hero = () => {
  return (
    <div className="">
      <nav className="flex justify-between items-center py-5">
        <h1 className="text-xl md:text-2xl font-bold">Real Estate</h1>
        <ul className="flex items-center space-x-5 text-sm md:text-base">
          <li>Features</li>
          <li>Trending</li>
          <li>About</li>
        </ul>
        <button className="bg-yellow-400 px-5 py-2 rounded-xl text-xs md:text-base">
          Contact
        </button>
      </nav>

      <div className="h-[500px] relative">
        <img
          src={heroimg}
          alt="/"
          className="h-full w-full object-cover rounded-md"
        />
        <div className="absolute bottom-5 w-full">
          <div className="w-11/12 xl:w-4/5 m-auto bg-white grid grid-cols-2 lg:flex justify-between items-center p-5 drop-shadow-2xl md:space-x-4 md:rounded-md">
            <div className="flex flex-col space-y-2">
              <label htmlFor="Location">Location</label>
              <input
                type="text"
                placeholder="US"
                className="outline-0 text-xs"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="Property">Property</label>
              <input
                type="text"
                placeholder="Property"
                className="outline-0 text-xs"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="Price">Max-Price</label>
              <input
                type="text"
                placeholder="$100,000"
                className="outline-0 text-xs"
              />
            </div>
            <div>
              <button className="bg-yellow-400 px-5 py-2 mt-5 md:mt-0 md:rounded-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
