import React from "react";
import "./Alert.jsx";

const Alert = ({ message, setShowAlert }) => {
  return (
    <div className="alert flex flex-col space-y-5 justify-between">
      <p>{message}</p>
      <div
        className="bg-black w-10  text-white rounded-md cursor-pointer text-sm px-2 py-1 self-center top-0"
        onClick={() => setShowAlert(false)}
      >
        esc
      </div>
    </div>
  );
};

export default Alert;
