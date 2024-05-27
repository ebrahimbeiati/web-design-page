import React, { useState } from "react";

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [validEmail, setValidEmail] = useState(true); // State to track if email is valid

  const handleSubscribe = () => {
    // Add validation logic
    const email = document.getElementById("email").value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (isValidEmail) {
      // Add logic to handle subscription (send email, etc.)
      // For demonstration purposes, we'll just set subscribed to true
      setSubscribed(true);
      setValidEmail(true); // Reset validEmail state
    } else {
      setValidEmail(false);
    }
  };

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-4xl md:text-5xl font-bold py-2">
            Stay Updated with Our Latest Projects and Insights
          </h1>
          <p className="text-lg">
            Subscribe to our newsletter and be the first to know about our
            latest designs, development projects, and industry insights.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            <input
              className={`p-3 flex w-full rounded-md text-black bg-white ${
                !validEmail && "border-red-500"
              }`}
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter Email"
            />
            <button
              onClick={handleSubscribe}
              className="bg-blue-500 text-white rounded-md font-medium w-full sm:w-auto mt-4 sm:mt-0 py-3 gap-4 px-6"
            >
              Subscribe
            </button>
          </div>
          {!validEmail && (
            <p className="text-red-500 text-sm mt-2">
              Please enter a valid email
            </p>
          )}
          <p className="text-sm mt-2">
            We value your privacy. Read our{" "}
            <span className="text-blue-500">Privacy Policy</span>.
          </p>
          {subscribed && (
            <p className="text-green-500 mt-2">
              You've successfully subscribed!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
