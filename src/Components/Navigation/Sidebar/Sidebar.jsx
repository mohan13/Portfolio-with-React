import React from "react";
import NavItems from "../NavItems/NavItems";
const Sidebar = () => {
  return (
      <div className="flex fixed bg-gray-800 w-48 md:w-60 h-screen" >
        <NavItems from='sidebar'/>
      </div>
  );
};

export default Sidebar;