import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <section className="mx-auto bg-black max-w-7xl">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </section>
  );
};

export default HomeLayout;
