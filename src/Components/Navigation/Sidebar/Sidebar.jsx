import React from "react";
import NavItems from "../NavItems/NavItems";
const Sidebar = () => {
  return (
      <div className="flex bg-gray-800 w-60 h-screen" >
        <NavItems from='sidebar'/>
      </div>
  );
};

export default Sidebar;