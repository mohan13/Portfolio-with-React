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
    <div className="grid grid-cols-2 items-center px-8 py-4 bg-white  ">
      {model}
      <Link to="/" className="text-4xl font-logo">
        Mohan Grg
      </Link>
      <div>
        <NavItems/>
      </div>
      <div>
        <AiOutlineMenu
          onClick={() => setSidebar(true)}
          className="w-10 md:hidden h-10 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Toolbar;
