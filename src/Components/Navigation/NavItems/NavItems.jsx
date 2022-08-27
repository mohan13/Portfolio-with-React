import React from "react";
import {NavData} from '../NavData'
import NavItem from "../NavItem/NavItem";
const NavItems = ({ from }) => {
  return (
    <div className={`flex items-center justify-between ${from==='sidebar'?'flex-col':null} `}>
      {NavData?.map((val, i) => {
        return (
          <div key={i} 
          className='font-title hover:text-sky-500 font-bold text-lg'  
          >
            <NavItem  path={val.path} title={val.title}/>
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
