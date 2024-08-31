import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../../Pages/Home/Home";
import Shop from "../../Pages/shop/Shop";
import { Route, Routes } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
