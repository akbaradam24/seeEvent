import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
export default function SearchEvents() {
  return (
    <div>
      <Navbar isLogin />
      <Filter />
      <Footer />
    </div>
  );
}
