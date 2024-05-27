import React from "react";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />{" "}
        {/* You can rename this to About if you have an About section */}
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
