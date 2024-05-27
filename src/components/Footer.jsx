// import React from "react";
// import {
//   FaDribbbleSquare,
//   FaFacebookSquare,
//   FaGithubSquare,
//   FaInstagram,
//   FaTwitterSquare,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-800">
//       <div>
//         <h1 className="text-3xl font-bold text-black">WsCube Tech.</h1>
//         <p className="py-4 text-sm">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam
//           iste repellat consequatur libero reiciendis, blanditiis accusantium.
//         </p>
//         <div className="flex space-x-4">
//           <FaFacebookSquare size={30} />
//           <FaInstagram size={30} />
//           <FaTwitterSquare size={30} />
//           <FaGithubSquare size={30} />
//         </div>
//       </div>
//       <div className="lg:col-span-2 flex justify-between flex-wrap">
//         <div>
//           <h6 className="font-semibold text-black">Solutions</h6>
//           <ul className="mt-4">
//             <li className="py-1 text-sm">Analytics</li>
//             <li className="py-1 text-sm">Marketing</li>
//             <li className="py-1 text-sm">Commerce</li>
//             <li className="py-1 text-sm">Insights</li>
//           </ul>
//         </div>
//         <div>
//           <h6 className="font-semibold text-black">Support</h6>
//           <ul className="mt-4">
//             <li className="py-1 text-sm">Pricing</li>
//             <li className="py-1 text-sm">Documentation</li>
//             <li className="py-1 text-sm">Guides</li>
//             <li className="py-1 text-sm">API Status</li>
//           </ul>
//         </div>
//         <div>
//           <h6 className="font-semibold text-black">Company</h6>
//           <ul className="mt-4">
//             <li className="py-1 text-sm">About</li>
//             <li className="py-1 text-sm">Blog</li>
//             <li className="py-1 text-sm">Jobs</li>
//             <li className="py-1 text-sm">Press</li>
//             <li className="py-1 text-sm">Careers</li>
//           </ul>
//         </div>
//         <div>
//           <h6 className="font-semibold text-black">Legal</h6>
//           <ul className="mt-4">
//             <li className="py-1 text-sm">Claim</li>
//             <li className="py-1 text-sm">Policy</li>
//             <li className="py-1 text-sm">Terms</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        <div>
          <h1 className="text-3xl font-bold">WsCube Tech</h1>
          <p className="py-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex space-x-4">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
          </div>
        </div>
        <div className="flex flex-col">
          <h6 className="font-semibold text-black mb-4">Services</h6>
          <ul>
            <li className="py-1 text-sm">Web Design</li>
            <li className="py-1 text-sm">Web Development</li>
            <li className="py-1 text-sm">Digital Marketing</li>
            <li className="py-1 text-sm">SEO</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h6 className="font-semibold text-black mb-4">Company</h6>
          <ul>
            <li className="py-1 text-sm">About Us</li>
            <li className="py-1 text-sm">Blog</li>
            <li className="py-1 text-sm">Careers</li>
            <li className="py-1 text-sm">Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
