import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Home = () => {
  const [result, setResult] = useState(null);

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
    }

    function error(err) {
      console.warn(err);
    }
  };
  
  return (
    <div className="h-screen bg-gradient-to-r from-blue-300 to-white container mx-auto">
      <div className="max-w-md mx-auto pt-20">
        <div className="flex flex-col items-center justify-center m-3">
          <p className="text-2xl font-serif text-red-600">Scan QR Code</p>
          <button onClick={startScanning} className="p-2 bg-blue-600 text-white rounded-full">start scanning</button>
          {result ? (
            <div>
              Success : <a href={result}>{result}</a>
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
