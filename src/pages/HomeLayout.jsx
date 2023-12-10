import React from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
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
