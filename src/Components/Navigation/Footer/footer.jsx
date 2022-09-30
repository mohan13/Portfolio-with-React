import React from "react";
import { footerData } from "./footerdata";
import Icon from "../../UI/Icon";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="grid md:flex justify-between gap-4 md:gap-8 p-6 md:px-10 md:py-6 bg-black">
      {footerData?.map((val, i) => {
        return (
          <div key={i}>
            <div className="grid gap-2 md:gap-4 ">
              <div className="font-title text-xl text-white">{val.title}</div>
              <div className="font-para text-sm text-gray-400">{val.para}</div>
              <div className="font-para text-sm text-gray-400">
                {val.copyright}
              </div>
              <div>{val.placeholder} </div>
            </div>
            <div className="flex gap-2">
              {val.Icon?.map((val, i) => {
                return (
                  <div key={i}>
                    <Link to={{val.path}}>
                    <Icon icon={val.icon}/></Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
