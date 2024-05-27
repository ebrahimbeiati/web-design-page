// import React from "react";
// import Single from "../assets/single.png";
// import Double from "../assets/double.png";
// import Triple from "../assets/triple.png";

// const Cards = () => {
//   return (
//     <div className="w-full py-16 px-4 bg-gray-100">
//       <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {[Single, Double, Triple].map((image, index) => (
//           <div
//             key={index}
//             className="w-full shadow-xl bg-white p-6 rounded-lg hover:shadow-2xl transition duration-300"
//           >
//             <img
//               className="w-20 mx-auto mb-6"
//               src={image}
//               alt={`Card ${index + 1}`}
//             />
//             <h2 className="text-2xl font-bold text-center mb-4">
//               Service Name
//             </h2>
//             <p className="text-center text-3xl font-bold mb-4">$149</p>
//             <div className="text-center">
//               <p className="mb-2">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//               <p className="mb-2">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </div>
//             <button className="bg-[#00df9a] w-full rounded-md font-medium text-white mt-8 py-3 hover:bg-green-600 transition duration-300">
//               Start Trial
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;

import React from "react";
import {
    FaDesktop, FaMobileAlt, FaCode,
    FaSearch
 } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Responsive Web Design",
      price: "$199",
      description:
        "Craft visually stunning websites that adapt seamlessly to any device, ensuring an optimal user experience.",
      icon: FaDesktop,
    },
    {
      title: "Mobile App Development",
      price: "$299",
      description:
        "Build powerful mobile applications for iOS and Android platforms, tailored to your specific business needs.",
      icon: FaMobileAlt,
    },
    {
      title: "Custom Web Development",
      price: "$399",
      description:
        "Create bespoke web solutions with advanced functionalities and intuitive user interfaces.",
      icon: FaCode,
      },
   
    {
      title: "Search Engine Optimization",
      description:
        "Boost your website's visibility and organic traffic with our comprehensive SEO strategies.",
      icon: FaSearch,
    }
  
  ];

  return (
    <div className="w-full py-16 px-4 bg-gray-100">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full shadow-xl bg-white p-6 rounded-lg hover:shadow-2xl transition duration-300"
          >
            <service.icon className="w-20 h-20 mx-auto mb-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-center mb-4">
              {service.title}
            </h2>
           
            <div className="text-center">
              <p className="mb-2">{service.description}</p>
            </div>
            <button className="bg-[#00df9a] w-full rounded-md font-medium text-white mt-8 py-3 hover:bg-green-600 transition duration-300">
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
