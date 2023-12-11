import React from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <section className="bg-black max-w-7xl mx-auto">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </section>
  );
};

export default HomeLayout;
