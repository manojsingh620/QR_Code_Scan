import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Succes from "./Success";
import HelloImg from '../assets/helloparty.jpg'

const Freshers = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const backendDomain = process.env.REACT_APP_BACKEND_URL;
  const [data, setData] = useState([]);
  const [verify, setVerify] = useState("");
  const [text, setText] = useState("");
  console.log("dataApi is =", data);

  const checkfunction = () => {
    if (data) {
      const idToCheck = id; // Replace with the id you want to check
      console.log("idtocheck is =", id);
      const idExists = data.some((item) => item === idToCheck);
      console.log("Does the ID exist in the data array? ", idExists);
      if (idExists == true) {
        setText("This is valid ticket");
        setVerify(true);
        navigate("/success");
        console.log("tut gaya bhaiya main to");
      } else {
        // navigate("/cancel")
      }
    }
  };

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
    console.log("dataApi is =", dataApi);

    if (dataApi.data) {
      console.log("data Api from data is =", dataApi.data);
      checkfunction();
    }
  };

  useEffect(() => {
    Apidatafetch();
    // checkfunction();
  }, []);
  return (
    <div className="h-screen container mx-auto bg-white ">
      <div className="pt-2 ">
        <div className="w-full mx-auto flex  flex-col justify-center items-center p-2 mt-10">
          <img src={HelloImg} alt="helloimghai"/>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={Apidatafetch}
            className="bg-blue-600 px-2 py-1 rounded-full text-white   text-center"
          >
            verify ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Freshers;
