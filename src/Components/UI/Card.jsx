import React from "react";

const Card = ({ image, view }) => {
  return (
    <div className="border ">
        <div className="h-32 absolute bg-green-300">
          <img src={image} alt="" />
        </div>
        <div className="bg-red-200 relative top-0 left-0">{view}</div>
    </div>
  );
};

export default Card;
