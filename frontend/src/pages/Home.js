import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Home = () => {
  const navigate = useNavigate()
  const backendDomain = process.env.REACT_APP_BACKEND_URL;
  const [result, setResult] = useState(null);
  const [data, setData] = useState([]);
  const [verify, setVerify] = useState("");
  const [text, setText] = useState("");
  const [idresult, setIdresult] = useState({
    currid : ""
  });
  console.log("idresult is ==",idresult.currid)

  const checkfunction = () => {
    if (data) {
      const idToCheck = idresult.currid; // Replace with the id you want to check
      console.log("idtocheck is =", idresult.currid);
      const idExists = data.some((item) => item === idToCheck);
      console.log("Does the ID exist in the data array? ", idExists);
      if (idExists === true) {
        setVerify(true);
        navigate(`${idToCheck}/verify/success`);
        toast.success("Be ready for 'UDGAM'!! ")
      } else {
        toast.error("Your ticket is invalid")
        navigate(`${idToCheck}/verify/cancel`)
      }
    }
  };

  const startScanning = () => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setResult(result);
      if(result){
        Apidatafetch();
        const id = result.split('/')[3];
        setIdresult({ currid : id})
        // Apidatafetch();
        console.log("url id is here =",id)
      }
    }

    function error(err) {
      console.warn(err);
    }
  };

  const onclickchangeUrl =()=>{
        setResult()
  }

  const Apidatafetch = async () => {
    const dataResponse = await fetch(`${backendDomain}/api/verify-qrcode`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(idresult),
    });
    const dataApi = await dataResponse.json(); 
    setData(dataApi.data);
    setText("This is valid ticket");
    console.log("dataApi from home is =",dataApi.data)
      
  };
  
  useEffect(()=>{
    if(data.length !== 0 && idresult.currid ){
      checkfunction()
    }
    // Apidatafetch();
  },[text])
  return (
    <div className="h-screen bg-gradient-to-r from-blue-300 to-white container mx-auto">
      <div className="max-w-md mx-auto pt-16">
        <div className="flex flex-col items-center justify-center m-3">
          <p className="text-2xl font-serif text-red-600 m-1">Scan QR Code</p>
          <button onClick={startScanning} className= "mb-2 p-2 bg-blue-600 text-white rounded-full">start scanning</button>
          {result ? (
            <div className="flex items-center justify-center">
              <h1 className="text-start" onClick={checkfunction}>Success: {result}</h1>
               {/* <a href={result+"/success"} className="text-blue-600 " onClick={Apidatafetch}>{result+"/success"}</a> */}
            </div>
          ) : (
            <div id="reader"></div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
