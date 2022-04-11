import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import OurPedagogy from "./components/OurPedagogy/OurPedagogy";
import Admission from "./components/Admission/Admission";
import Careeroption from "./components/Careeroption/Careeroption";
import Faq from "./components/Faq/Faq";
import Privacy from "./components/Privacy/Privacy";
import Refund from "./components/Refund/Refund";
import Terms from "./components/Terms/Terms";
import Errorpage from "./components/Errorpage/Errorpage";
import { Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route extact path="/" element={<Home />} />
          <Route extact path="/About" element={<About />} />
          <Route extact path="/OurPedagogy" element={<OurPedagogy />} />
          {/* <Route extact path="/DiscoverCourse" element={} /> */}
          <Route extact path="/Admission" element={<Admission />} />
          <Route extact path="/Contact" element={<Contact />} />
          <Route extact path="/Careeroption" element={<Careeroption />} />
          <Route extact path="/Faq" element={<Faq />} />
          <Route extact path="/Privacy" element={<Privacy />} />
          <Route extact path="/Refund" element={<Refund />} />
          <Route extact path="/Terms" element={<Terms />} />
          <Route extact path="/Errorpage" element={<Errorpage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
