import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Succes from "./Success";

const Freshers = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const backendDomain = process.env.REACT_APP_BACKEND_URL;
  const [data, setData] = useState([]);
  const [verify, setVerify] = useState("");
  const [text, setText] = useState("");
  console.log("dataApi is =", data);

  const checkfunction = () => {
    const idToCheck = id; // Replace with the id you want to check
    const idExists = data.some((item) => item === idToCheck);
    console.log("Does the ID exist in the data array? ", idExists);
    if (idExists == true) {
      setText("This is valid ticket");
      setVerify(true);
      navigate("/success")
      console.log("tut gaya bhaiya main to");
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
    checkfunction();
  };

  useEffect(() => {
    // Apidatafetch()
    checkfunction();
  }, [data]);
  return (
    <div className="h-screen container mx-auto bg-gradient-to-r from-blue-300 to-white ">
      <div className="pt-2 ">
        <div className="w-full mx-auto flex  flex-col justify-center items-center p-2">
          <h1 className="text-center text-xl text-red-500 font-bold mb-5">
            Very welcome Freshers batch 2023
          </h1>
          <h1 className="text-center font-serif text-green-700 font-lg">General Rules</h1>
          <h1>
            <b>Dress Code:</b> Specify a dress code, such as formal, casual,
            themed, etc., and encourage everyone to adhere to it.
          </h1>
          <h1>
            <b>Attendance:</b> Ensure that all attendees have registered for the
            event, and entry is restricted to those who have registered.
          </h1>
          <h1>
            <b>Timing:</b> Clearly state the start and end times of the party.
            Ensure everyone adheres to the schedule to maintain order.
          </h1>
          <h1>
            <b>Identification:</b> Require all attendees to carry their college
            ID or another form of identification
          </h1>
          <h1 className="text-center font-serif text-green-700 font-lg ">
            Conduct and Behavior
          </h1>

          <h1>
            <b>Respect:</b> Emphasize the importance of respecting all
            attendees, including peers, seniors, and organizers.
          </h1>
          <h1>
            <b>No Bullying or Harassment:</b> Zero tolerance for any form of
            bullying, harassment, or discrimination.
          </h1>
          <h1>
            <b>Substance Use:</b> Strictly prohibit the use of alcohol, drugs,
            or any other illegal substances.
          </h1>
          <h>
            <b>Cleanliness:</b> Encourage everyone to keep the venue clean and
            dispose of trash properly
          </h>
        </div>
        <div className="flex justify-center items-center">
          
            <button
              onClick={Apidatafetch}
              className="bg-blue-600 px-2 py-1 rounded-full text-white   text-center"
            >
              verify ticket
            </button>
         
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Freshers;
