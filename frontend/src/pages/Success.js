import React from "react";
import SUCCESSIMAGE from "../assets/success.gif";

const Succes = () => {
  return (
    <div className="flex flex-col  items-center h-screen pt-10">
        <h1 className="font-bold text-lg text-blue-500">Wellcome you are in !!</h1>
    <div className="bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4  rounded-full">
      <img src={SUCCESSIMAGE} width={150} height={150} />
      <p className="text-green-600 font-bold text-xl">Verified</p>
    </div>
    </div>
  );
};

export default Succes;
