import React from "react";
import { AboutData } from "./AboutData";
import {Link} from 'react-router-dom'
// import Icon from "../../UI/Icon";
const AboutMe = () => {
  return (
    <div className="p-10 bg-gray-100">
      {AboutData?.map((val, i) => {
        return (
          <div key={i} className="grid grid-cols-2 gap-10">
            <div>
              {/* <div className="font-title  text-lg">
                {val.title}
              </div> */}
              <div className="font-slogan text-6xl">{val.subTitle}</div>
              <div className="flex flex-col text-gray-500 gap-3 leading-loose my-4">
                <div className="font-para text-lg">{val.para1}</div>
                <div className="font-para text-lg">{val.para2}</div>
                <div className="font-para text-lg">{val.para3}</div>
              </div>

              <Link to="/contact" className="font-para text-teal-400 text-lg">{val.btn}</Link>
            </div>
            <div className="my-10">
              <div className="font-slogan text-4xl">My Skills</div>
              <div className="flex flex-wrap w-full my-6">
                {val.icons?.map((val, i) => {
                  return (
                    <div key={i}>
                      <div className="bg-gray-300 m-2 text-xl p-4 rounded-md">
                        {val.icon1}
                        {/* <div className="w-32 bg-blue-400 h-2"></div> */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutMe;
