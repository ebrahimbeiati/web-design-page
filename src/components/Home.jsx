
import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-600 text-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-xl font-semibold">Empower Your Brand</p>
        <h1 className="text-4xl md:text-6xl font-bold py-4">
          Accelerate Your Growth
        </h1>
        <div className="flex justify-center items-center mb-8">
          <p className="text-lg md:text-xl font-bold pr-2">Specializing in: </p>
          <ReactTyped
            className="text-lg md:text-xl font-bold"
            strings={["Digital Marketing", "Web Development", "Web Design"]}
            typeSpeed={80}
            backSpeed={60}
            loop
          />
        </div>
        <button className="bg-white text-black w-[200px] rounded-md font-medium py-3 hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
