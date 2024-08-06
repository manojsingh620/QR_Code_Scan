import React, { useEffect, useState } from "react";
// import DemoImg from "../assets/DemoImg.png";
import {v4} from 'uuid'

const Register = () => {
  const backendDomain = process.env.REACT_APP_BACKEND_URL;
  const [uniqueid,setUniqueid]=useState({
    uniqueId : "",
})
 console.log("uniqueId ==IS ",uniqueid)
  const [qrdata, setQrdata] = useState({
    qrcodeUrldata: "",
  });
  console.log("qrdata is ===", qrdata);
  const [qrcode, setQrcode] = useState("");
  const [data,setData]=useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const dataResponse = await fetch(`${backendDomain}/api/register`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(uniqueid),
    });
    const dataApi = await dataResponse.json();
    console.log("dataApi is ====",dataApi.data)
    setData(dataApi.data)
  }

  const generateqr=()=>{
     setUniqueid({uniqueId : v4()})
     
    console.log("uniqueId is thwer ",uniqueid.uniqueId)
    const url = "  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    const originalqrcode = `${url}https://qr-code-scanner-frontend.vercel.app/${uniqueid.uniqueId}/verify`;
    setQrcode(originalqrcode)
    console.log("url link with id =",originalqrcode)
  }



  useEffect(()=>{
    // generateqr();
  },[])
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-white container flex items-center justify-center px-2">
      <div className="max-w-md mx-auto bg-white   h-96 w-96 rounded">
        <h2 className="text-center text-xl font-bold">QR Code Generator</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center mt-3 mx-2 ">
            <input
              type="text"
              placeholder="enter text or id"
              className="w-full p-1 px-2 border-2 rounded-l"
              value={uniqueid.uniqueId}
              name="qrcodeUrldata"
              onChange={generateqr}
            />
            <button  className="bg-blue-600 text-white p-1.5 rounded-r" onClick={generateqr}>
              generat
            </button>
          </div>
        </form>
        {qrcode.length > 0 && (
          <div className="flex items-center justify-center mt-10">
            <img src={qrcode} alt="qrimage" className="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
