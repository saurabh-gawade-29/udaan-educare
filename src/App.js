import React, { Component } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

// TODO: User View
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
import Topeng from "./components/Topeng/Topeng";
import Topmedi from "./components/TopMedi/Topmedi";

// TODO: Admin View
import AdminNavbar from "./Admin/components/AdminNavbar/AdminNavbar";
import AdminSidebarIn from "./Admin/components/AdminSidebarIn/AdminSidebarIn";
import AdminHome from "./Admin/components/AdminHome/AdminHome";
import AdminContact from "./Admin/components/AdminContact/AdminContact";
import AdminAbout from "./Admin/components/AdminAbout/AdminAbout";
import AdminAdmission from "./Admin/components/AdminAdmission/AdminAdmission";
import AdminCareer from "./Admin/components/AdminCareer/AdminCareer";
import AdminCollege from "./Admin/components/AdminCollege/AdminCollege";
import AdminOther from "./Admin/components/AdminOther/AdminOther";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdmin: true,
    };
  }
  render() {
    if (this.state.isAdmin === true) {
      return (
        <div>
          <div className="admin-dashboard">
            <AdminNavbar />
            <div className="container-fluid admin-sidebar">
              <div className="row">
                <nav
                  id="sidebarMenu"
                  className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse vh-100"
                >
                  <AdminSidebarIn />
                </nav>
                {/* Admin - Content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                  <Routes>
                    <Route path="/home" element={<AdminHome />} />
                    <Route path="/contact" element={<AdminContact />} />
                    <Route path="/about" element={<AdminAbout />} />
                    <Route path="/admission" element={<AdminAdmission />} />
                    <Route path="/career" element={<AdminCareer />} />
                    <Route path="/college" element={<AdminCollege />} />
                    <Route path="/other" element={<AdminOther />} />
                  </Routes>
                </main>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
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
            <Route
              extact
              path="/top_engineering_institutes"
              element={<Topeng />}
            />
            <Route
              extact
              path="/top_medical_institutes"
              element={<Topmedi />}
            />
          </Routes>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
