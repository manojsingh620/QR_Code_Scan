import React from "react";
import SUCCESSIMAGE from "../assets/success.gif";
import { Link } from "react-router-dom";

const Succes = () => {
  return (
    <div className="flex flex-col  items-center h-screen mt-20 ">
        <h1 className="font-bold text-lg text-green-600">Wellcome!! be ready for Fresher party!</h1>
    <div className=" w-full max-w-md mx-auto flex justify-center items-center flex-col p-4  rounded-full">
      <img src={SUCCESSIMAGE} width={150} height={150} />
      <p className="text-green-600 font-bold text-xl">Verified</p>
    </div>
    </div>
  );
};

export default Succes;
