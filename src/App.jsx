import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
// switch replaced by Routes and Redirect by Navigate in v6.0
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about/*" element={<About/>}/>
        <Route path="service/*" element={<Service/>}/>
        <Route path="contact/*" element={<Contact/>}/>
        {/* if Someone tries to visit other than above routes navigate to `/` */}
        <Route path="/*" element={<Navigate replace to="/"/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
