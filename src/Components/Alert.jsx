import React from "react";
import "./Alert.jsx";

const Alert = ({ message, setShowAlert }) => {
  return (
    <div className="alert flex flex-col space-y-5 justify-between">
      <p className="text-xs sm:text-sm">{message}</p>
      <div
        className="bg-yellow-500 w-10  
        text-black rounded-md cursor-pointer  
        text-sm px-2 py-1 self-center top-0"
        onClick={() => setShowAlert(false)}
      >
        esc
      </div>
    </div>
  );
};

export default Alert;
