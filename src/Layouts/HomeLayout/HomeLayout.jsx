import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router";
import Latest from "../../Components/Latest/Latest";
import Navbar from "../../Components/Navbar/Navbar";

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
      <main>
        <section className="nav-left">
          <section>
            <Outlet></Outlet>
          </section>
        </section>
        <section className="nav-right"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
