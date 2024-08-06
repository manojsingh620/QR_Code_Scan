import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Freshers = () => {
  const { id } = useParams();
  const backendDomain = process.env.REACT_APP_BACKEND_URL;
  const [data, setData] = useState([]);
  const [verify,setVerify]=useState("");
  console.log("dataApi is =", data);

  const Apidatafetch = async () => {
    console.log("id is == ", id);
    const dataResponse = await fetch(`${backendDomain}/api/verify-qrcode`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ id }),
    });
    const dataApi = await dataResponse.json();
    setData(dataApi.data);
  };

  const idToCheck = id; // Replace with the id you want to check

  const idExists = data.some((item) => item === idToCheck);
  console.log("Does the ID exist in the data array? ", idExists);
  if (idExists == true) {
    setVerify(true)
    console.log("tut gaya bhaiya main to");
  }

  useEffect(() => {
    // Apidatafetch()
  }, []);
  return (
    <div className="h-screen container mx-auto bg-gradient-to-r from-blue-500 to-white flex ">
      <div className="w-full mx-auto flex flex-col items-center justify-center ">
        <h1>wellcom freshers you are wellcom</h1>
        <button onClick={Apidatafetch} className="bg-blue-600 p-2 rounded-full text-white">check ticket</button>
      </div>
    </div>
  );
};

export default Freshers;
