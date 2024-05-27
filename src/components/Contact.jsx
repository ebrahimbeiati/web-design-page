import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi"; // Importing icons for visual appeal

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Get in Touch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <FiMapPin className="text-2xl text-blue-500" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <p>123 Street Name</p>
            <p>City, State, Zip Code</p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <FiPhone className="text-2xl text-blue-500" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <p>(123) 456-7890</p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <FiMail className="text-2xl text-blue-500" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p>webdesignanddev2@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-center md:text-left">
            Contact Form
          </h2>
          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <a
              href="mailto:webdesignanddev2@gmail.com"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
