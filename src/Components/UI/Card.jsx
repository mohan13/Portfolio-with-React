import React from "react";
// import { Link } from "react-router-dom";
const Card = ({ image, title, para }) => {
  return (
    <div className="border flex flex-col gap-4 bg-white ">
      <div className=" bg-green-300">
        <img src={image} alt="" />
      </div>
      <div className="px-4 pb-4 flex flex-col gap-4 ">
        <div className="font-title text-2xl">{title}</div>
        <div className="font-para">{para}</div>
        <a
          href="https://mern-project-1-3.vercel.app/"
          className="font-title text-md cursor-pointer text-bolder decoration-2 underline underline-offset-4 text-stone-500"
        >
          <button className="border transition duration-300  hover:bg-black hover:text-white border-2 w-36 rounded-sm border-black px-4 py-2 text-sm ">
            View Details
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
