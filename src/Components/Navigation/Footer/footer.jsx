import React from "react";
import { footerData } from "./footerdata";
import Icon from "../../UI/Icon";
const Footer = () => {
  return (
    <div className="grid md:flex justify-between gap-8 px-10 py-6 bg-black">
      {footerData?.map((val, i) => {
        return (
          <div key={i}>
            <div className="grid gap-4 ">
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
                    <Icon icon={val.icon}/>
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
