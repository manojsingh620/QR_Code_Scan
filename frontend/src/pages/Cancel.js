import React from "react";
import CANCELIMAGE from "../assets/cancel.gif";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div>
      <div className=" w-full max-w-md mx-auto flex justify-center items-center flex-col mt-24 p-2 rounded">
        <h1 className="font-serif text-red-600 text-xl">Please! contact with you senior's</h1>
        <img
          src={CANCELIMAGE}
          width={150}
          height={150}
          className="mix-blend-multiply"
        />
        <p className="text-red-600 font-bold text-xl">Invalid Ticket</p>
      </div>
    </div>
  );
};

export default Cancel;