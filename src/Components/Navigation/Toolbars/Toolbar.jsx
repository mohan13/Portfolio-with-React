import React, { useState } from "react";
import Side from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import NavItems from "../NavItems/NavItems";
import { AiOutlineMenu } from "react-icons/ai";
const Toolbar = () => {
  const [Sidebar, setSidebar] = useState(false);
  let model;
  if (Sidebar) {
    model = (
      <div
        onClick={() => setSidebar(false)}
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
        className="w-full h-screen z-20 absolute top-0 left-0"
      >
        <Side />
      </div>
    );
  }
  return (
    <div className="flex justify-between md:grid grid-cols-2 items-center px-8 py-2 bg-white  ">
      {model}
      <Link
        to="/"
        className="text-xl md:pl-14 md:text-4xl border-b-2 md:border-none border-black font-logo"
      >
        Mohan Grg
      </Link>
      <div className="hidden md:block ">
        <NavItems className />
      </div>
      <div>
        <AiOutlineMenu
          onClick={() => setSidebar(true)}
          className="w-8 h-8 md:w-10 md:hidden md:h-10 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Toolbar;
