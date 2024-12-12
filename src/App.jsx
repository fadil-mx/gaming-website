import React from "react";
import Hero from "./component/Hero";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Fearures from "./component/Fearures";
import Story from "./component/Story";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden ">
      <Navbar />
      <Hero />
      <About />
      <Fearures />
      <Story />
      <Contact />
      <Footer />
      {/* <section className="w-screen h-screen"></section> */}
    </div>
  );
};

export default App;
