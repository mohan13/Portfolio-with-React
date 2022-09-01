import React from "react";
import { NavData } from "../NavData";
import NavItem from "../NavItem/NavItem";
const NavItems = ({ from }) => {
  return (
    <div
      className={`flex items-left gap-10 py-10 pl-8 ${
        from === "sidebar" ? "flex-col" : null
      } `}
    >
      {NavData?.map((val, i) => {
        return (
          <div
            key={i}
            className="font-title  transition duration-300 hover:text-sky-500 font-bold text-sm md:text-lg"
          >
            <NavItem path={val.path} title={val.title} />
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
