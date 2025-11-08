import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import Latest from "../../Components/Latest/Latest";
import Navbar from "../../Components/Navbar/Navbar";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";
import Loading from "../../Components/Loading";

const HomeLayout = () => {
  const NewsData=useLoaderData()
  
  const { state } = useNavigation();

  return (
    <div>
      {" "}
      <Header></Header>
      {/* latest section */}
      <section className="w-11/12 mx-auto pt-8">
        <Latest NewsData={NewsData}></Latest>
      </section>
      {/* Navbar section */}
      <nav className="w-11/12 mx-auto pt-8">
        <Navbar></Navbar>
      </nav>
      <main className="grid md:grid-cols-12  md:w-11/12 mx-auto mt-10">
        {/* left aside here */}
        <aside className="md:block md:col-span-3 md:sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        {/* Middle Part Here */}
        <section className=" mx-auto md:col-span-6">
          {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        {/* Right Aside here */}
        <aside
          // className="md:col-span-3  top-0 h-fit md:sticky scroll-smooth
      "
        >
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
