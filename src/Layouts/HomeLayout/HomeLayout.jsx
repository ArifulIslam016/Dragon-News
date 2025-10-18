import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router";
import Latest from "../../Components/Latest/Latest";
import Navbar from "../../Components/Navbar/Navbar";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
      {/* latest section */}
      <section className="w-11/12 mx-auto pt-8">
              <Latest></Latest>

      </section>
      {/* Navbar section */}
      <nav className="w-11/12 mx-auto pt-8">
        <Navbar></Navbar>
      </nav>
      <main className="grid grid-cols-12 w-11/12 mx-auto"> 
        {/* left aside here */}
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        {/* Middle Part Here */}
        <section className="col-span-6">
            <Outlet></Outlet>
          </section>
          {/* Right Aside here */}
      <aside className="col-span-3">
        <RightAside></RightAside>
      </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
