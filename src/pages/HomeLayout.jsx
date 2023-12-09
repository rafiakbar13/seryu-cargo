import React from "react";
// import { Header, Navbar, Loading } from "../components";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
