import { useState } from "react";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import BestDeals from "./components/BestDeals";
import Newestdeals from "./components/Newestdeals";

function App() {
  return (
    <div className="app">
      <div className="w-11/12 md:w-4/5 m-auto ">
        <Hero />
        <Aboutus />
        <Newestdeals />
        <BestDeals />
      </div>
      <Footer />
    </div>
  );
}

export default App;
