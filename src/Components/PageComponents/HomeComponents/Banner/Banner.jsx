import React from "react";
import { BannerData } from "./BannerData";
const Banner = () => {
  return (
    <div>
      {BannerData?.map((val, i) => {
        return (
          <div
            key={i}
            className="grid grid-cols-2 place-content-center bg-gray-100"
          >
            <div className="grid place-content-center p-10  h-screen">
              <div className="font-slogan text-7xl">{val.Title1}</div>
              <div className="font-slogan text-7xl my-4">{val.Title2}</div>
              <div className="font-para leading-loose text-lg my-4  text-gray-500">
                {val.para}
              </div>
              <button className="border border-2 w-36  my-4 rounded-sm border-black px-4 py-2 text-sm ">
                {val.btn}
              </button>
            </div>
            <div>
                <img src={val.Image} alt=''/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
