import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import Topbar from "./Components/Topbar";
import Teams from "./pages/Teams";
import Loader from "./Components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },1000)
  })
  return (
    <>
     {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Teams />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
      </>
    )}
   <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up" /></a>

    </>
  );
};

export default App;
