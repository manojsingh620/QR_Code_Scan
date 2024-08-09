import React, { useEffect } from "react";
import SUCCESSIMAGE from "../assets/success.gif";
import { Link, useParams } from "react-router-dom";

const Succes = () => {
  const { id } = useParams();
  console.log("idtocheck is =", id);
  const backendDomain = process.env.REACT_APP_BACKEND_URL;

  const Apidatafetch = async () => {
    console.log("id is == ", id);
    const dataResponse = await fetch(`${backendDomain}/api/qrcode-update`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ id }),
    });
    const dataApi = await dataResponse.json();
  };

  useEffect(() => {
    Apidatafetch();
  }, []);

  return (
    <div className="flex flex-col  items-center h-screen mt-20 ">
      <h1 className="font-bold text-lg text-green-600">
        Wellcome!! be ready for Fresher party!
      </h1>
      <div className=" w-full max-w-md mx-auto flex justify-center items-center flex-col p-4  rounded-full">
        <img src={SUCCESSIMAGE} width={150} height={150} />
        <p className="text-green-600 font-bold text-xl">Verified</p>
      </div>
      <Link
        to={"/"}
        className="flex items-center justify-center mt-40 border-2 border-green-600 px-2 rounded"
      >
        <p className=" font-serif">Scan new ticket</p>
      </Link>
    </div>
  );
};

export default Succes;
