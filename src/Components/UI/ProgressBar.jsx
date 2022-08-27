import React from "react";

const ProgressBar = ({ done }) => {
  return (
    <div>
      <div
        className="h-2 font-bold w-96 border bg-green-400 "
        style={{
          fontSize: "12px",
          width: `${done}%`,
          
        }}
      >
      </div>
    </div>
  );
};

export default ProgressBar;
