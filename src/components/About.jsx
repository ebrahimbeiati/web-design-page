import React from "react";
import Laptop from "../assets/laptop.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom"; 

const About = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <img
          className="w-full max-w-xs mx-auto md:mx-0 my-4 md:my-0 md:self-center rounded-lg shadow-lg"
          src={Laptop}
          alt="Laptop"
        />
        <div className="flex flex-col justify-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Elevate Your Online Presence
          </h2>
          <p className="text-lg mb-6">
            Transform your online presence with cutting-edge website designs
            tailored to your unique brand and audience. Let our team of experts
            guide you through the journey of creating a captivating digital
            experience.
          </p>
          <p className="text-lg mb-6">
            At our company, we believe in the power of innovation and
            creativity. Our mission is to provide businesses with the tools they
            need to thrive in the digital world. We combine technical expertise
            with artistic vision to deliver websites that are not only
            functional but also visually stunning.
          </p>
          <p className="text-lg mb-6">
            With years of experience in web design and development, we
            understand the importance of staying ahead of the curve. Our team is
            dedicated to continuous learning and improvement, ensuring that we
            bring the latest trends and technologies to our clients. We work
            closely with you to understand your goals and create a website that
            reflects your brand's identity and values.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-400 hover:text-white transition duration-300 flex items-center"
          >
            Get Started <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
